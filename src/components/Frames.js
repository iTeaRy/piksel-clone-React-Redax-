import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ToolsActions from "../actions/tools";
import FramesActions from "../actions/frames";
import { getCurrentFrame } from "../selectors/Frame";
import Canvas from "./Canvas";

import '../styles/canvas.css';

class Frames extends Component {
    constructor(props) {
        super(props);
        this.canvas = React.createRef();
    }

    render() {
        return (
            <Canvas
                reference={this.canvas}
                frame={this.props.frame}
                setColor={this.props.setColor}
                saveImage={this.props.saveImage}
                updateFrame={this.props.updateFrame}
                updatedCanvasSize={this.props.updatedCanvasSize}
                tools={this.props.tools}
                frameId={this.props.frameId}
                isNew={this.props.isNew}
            />
        );
    }
}

const mapDispatchToProps = dispatch => ({
    setColor: bindActionCreators(
        ToolsActions.setColor,
        dispatch
    ),
    updatedCanvasSize: bindActionCreators(
        ToolsActions.updatedCanvasSize,
        dispatch
    ),
    saveImage: bindActionCreators(
        FramesActions.saveImage,
        dispatch
    ),
    updateFrame: bindActionCreators(
        FramesActions.updateFrame,
        dispatch
    ),
});

const mapStateToProps = state => ({
    frame: getCurrentFrame(state.frames),
    tools: state.tools,
    isNew: state.frames.isNewFrame,
    frameId: state.frames.currentFrameId,
});

export default connect(mapStateToProps, mapDispatchToProps)(Frames);
