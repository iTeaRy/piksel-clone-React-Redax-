import React, { Component } from 'react';

import '../styles/canvas.css';
import {
    PEN,
    RUBBER,
    FILL,
    EYE_DROPPER,
    LEFT_MOUSE_BUTTON,
    RIGHT_MOUSE_BUTTON,
    DEFAULT_CANVAS_SIZE,
    STROKE,
} from '../constants/tools';
import { findPos, rgbaToCssFormat } from '../utils/CanvasUtils';

class Canvas extends Component {
    constructor(props) {
        super(props);
        this.state = { ...props.tools };
    }

    componentDidMount() {
        this.updateCanvas();
    }

    componentDidUpdate() {
        if (this.props.isNew) {
            this.drawImage();
            this.props.updateFrame();
        }
        if (this.state.isNewSize) {
            this.setSize();
            this.props.updatedCanvasSize()
        }
    }

    static getDerivedStateFromProps(props, state) {
        return {
            ...state,
            ...props.tools,
            reference: props.reference,
            frame: props.frame,
            frameId: props.frameId,
        };
    }

    setInstrumentEvents = () => {
        switch(this.state.tool) {
            case PEN: return {
                onMouseMove: this.drawPenPixel,
                onMouseDown: this.drawPenPixel,
                onMouseUp: this.drawPenPixel,
                onMouseLeave: this.saveImage,
            };
            case STROKE: return {
                onMouseMove: this.stroke,
                onMouseDown: this.stroke,
                onMouseUp: this.stroke,
                onMouseLeave: this.saveImage,
            };
            case RUBBER: return {
                onMouseMove: this.drawRubberPixel,
                onMouseDown: this.drawRubberPixel,
                onMouseLeave: this.saveImage,
            };
            case FILL: return {
                onMouseDown: this.fill,
                onMouseLeave: this.saveImage,
                onMouseUp: this.drawPenPixel,
            };
            case EYE_DROPPER: return {
                onMouseDown: this.eyeDropper,
            };
            default: return {
                onMouseMove: this.drawPenPixel,
                onMouseDown: this.drawPenPixel,
                onMouseLeave: this.saveImage,
            };
        }
    };

    eyeDropper = (e) => {
        const canvas = this.props.reference.current;
        const ctx = canvas.getContext('2d');
        const sizeConfig = DEFAULT_CANVAS_SIZE / canvas.width;
        let position = findPos(canvas);
        let x = e.pageX - position.x;
        let y = e.pageY - position.y;
        let rgb = ctx.getImageData(x / sizeConfig, y/sizeConfig, 1, 1).data;
        const rgba = { r: rgb[0], g: rgb[1], b: rgb[2], a: rgb[3] };
        this.props.setColor(rgba);

    };

    fill = () => {
        const canvas = this.props.reference.current;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = rgbaToCssFormat(this.state.color);
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    determinantPosition = (pageX, pageY) => {
        const canvas = this.props.reference.current;
        const ctx = canvas.getContext('2d');
        const sizeConfig = DEFAULT_CANVAS_SIZE / canvas.width;
        const position = findPos(canvas);
        const x = Math.floor((pageX - position.x) / sizeConfig - 1);
        const y = Math.floor((pageY - position.y) / sizeConfig - 1);
        return { x, y, ctx };
    };

    drawPenPixel = e => {
        const { x, y, ctx } = this.determinantPosition(e.pageX, e.pageY);
        switch(e.buttons) {
            case LEFT_MOUSE_BUTTON: {
                ctx.fillStyle = rgbaToCssFormat(this.state.color);
                ctx.fillRect(x, y, this.state.penSize, this.state.penSize);
                break;
            }
            case RIGHT_MOUSE_BUTTON: {
                ctx.fillStyle = rgbaToCssFormat(this.state.secondaryColor);
                ctx.fillRect(x, y, this.state.penSize, this.state.penSize);
                break;
            }
            default: break;
        }
    };

    drawRubberPixel = e => {
        const { x, y, ctx } = this.determinantPosition(e.pageX, e.pageY);
        switch(e.buttons) {
            case LEFT_MOUSE_BUTTON: {
                ctx.clearRect(x, y, this.state.penSize, this.state.penSize)
                break;
            }
            default: break;
        }
    };

    drawImage = () => {
        if (this.props.frame && this.props.frame.id) {
            const canvas = this.props.reference.current;
            const ctx = canvas.getContext('2d');
            const img = new Image();
            img.crossOrigin = 'Anonymous';
            img.src = this.props.frame.data;
            if (!!this.props.frame.data) {
                ctx.clearRect(0, 0, canvas.width, canvas.height)
                img.onload = function () {
                    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                };
            } else {
                ctx.clearRect(0, 0, canvas.width, canvas.height)
            }

        }
    };

    saveImage = () => {
        const canvas = this.props.reference.current;
        this.props.saveImage({
            data: canvas.toDataURL(),
            id: this.props.frameId,
        });
    };


    setSize = () => {
        const canvas = this.props.reference.current;
        const ctx = canvas.getContext('2d');
        this.saveImage();
        canvas.classList.remove(`canvas__${canvas.width}size`);
        canvas.width = this.state.size;
        canvas.height = this.state.size;
        canvas.classList.add(`canvas__${canvas.width}size`);
        ctx.imageSmoothingEnabled = false;
        ctx.webkitImageSmoothingEnabled = false;
        this.drawImage();
    };

    updateCanvas() {
        this.setSize();
    }

    render() {
        return (
            <canvas
                className="canvas"
                ref={this.props.reference}
                {...this.setInstrumentEvents()}
                onContextMenu={e => {
                    if(e.preventDefault) e.preventDefault();
                    return false;
                }}
            />
        );
    }
}

export default Canvas;
