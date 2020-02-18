import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Player from './animation/Player';
import RangeInput from './tools/RangeInput';
import ToolsActions from '../actions/tools';
import './animation/player.css'

const UPNG = require('upng-js');
const download = require('downloadjs');

const ONE_SECOND = 1000;

class AnimationPlayer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stop: false,
            frames: props.frames,
            currentItem: 0,
            fps: 2,
            background: props.frames && props.frames.length > 0
                ? props.frames[0].data
                : null,
        }
    }

    componentDidMount() {
        if (this.state.frames && this.state.frames.length > 0) requestAnimationFrame(this.step);
    }

    static getDerivedStateFromProps(props, state) {
        return { ...state, ...props };
    }

    step = () => {
        const timestamp = new Date().getTime();
        if (!this.state.start) this.setState({ start: timestamp });
        const progress = timestamp - this.state.start;
        if (!this.state.stop) {
            requestAnimationFrame(this.step);
            if (progress > ONE_SECOND / this.state.fps) {
                this.setState({ start: timestamp });
                this.setState(prevState => ({
                    background: prevState.currentItem + 1 < prevState.frames.length
                        ? prevState.frames[prevState.currentItem + 1].data
                        : prevState.frames[0].data,
                    currentItem: prevState.currentItem + 1 < prevState.frames.length
                        ? prevState.currentItem + 1
                        : 0
                }));
            }
        }
    };

    saveGif = () => {

    };


   /*  saveGif = () => {
        if (this.props.frames && this.props.frames.length > 0) {
            console.log('this.props.frames.length', this.props.frames.length);
            console.log('WorkerScript', WorkerScript);
            const gif = new GIF({
                width: 32,
                height: 32,
                workers: this.props.frames.length,
                workerScript: WorkerScript,
            });
            this.props.frames.forEach(item => {
                const img = new Image();
                img.crossOrigin = 'Anonymous';
                img.src = item.data;
                //const delay = ONE_SECOND / this.state.fps;
                if (!!item.data) {
                    img.onload = function () {
                        gif.addFrame(img, {copy: true});
                    };
                }
            });
            console.log('FINISHED', gif);
            gif.on('start', function() {
                console.log('start', new Date());
                //window.open(URL.createObjectURL(blob));
            });
            gif.on('progress', function(p) {
                console.log('progress', `${Math.round(p * 100)}%`);
                //window.open(URL.createObjectURL(blob));
            });
            gif.on('finished', blob => {
                console.log('finished', blob);
                //window.open(URL.createObjectURL(blob));
            });
            gif.render();
        }
    };*/
    saveUPNG = () => {
        const arrayBuffer = this.state.frames.map(elem => elem.data);
        const arrayDelay = new Array(arrayBuffer.length);
        arrayDelay.fill(ONE_SECOND / this.state.fps);
        const apng = UPNG.encode(arrayBuffer, 32, 32, 0, arrayDelay);
        console.log(apng);
        download(apng, 'animation.apng', 'apng')
    };
    render() {
        return (
            <React.Fragment>
                <Player background={this.state.background} />
                <RangeInput
                    value={this.state.fps}
                    caption={'fps'}
                    min={1}
                    max={30}
                    changeValue={this.props.changeFps}
                    id="fps-range"
                    className="range"
                />
                <button
                    style={{height: 30,
                        width: 70,
                    }}
                    onClick={this.saveUPNG}
                >Save</button>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    frames: state.frames.data,
    fps: state.frames.fps,
});

const mapDispatchToProps = dispatch => ({
    changeFps: bindActionCreators(
        ToolsActions.changeFps,
        dispatch
    ),
});

export default connect (mapStateToProps, mapDispatchToProps)(AnimationPlayer);
