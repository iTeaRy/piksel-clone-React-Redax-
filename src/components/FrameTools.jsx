import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ToolsActions from "../actions/tools";

class FrameTools extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props.tools,
        };
    }

    static getDerivedStateFromProps(props, state) {
        return { ...state, ...props.tools };
    }

    getFrameBlind = frame => {
        return (
            <div
                style={{
                    width: 100,
                    height: 100,
                    imageRendering: 'pixelated',
                    backgroundImage: `url(${frame.data})`,
                    backgroundSize:'cover',
                    backgroundRepeat: 'no-repeat',
                    border: '6px double rgba(28,110,164,0.3)',
                    borderRadius: 10,
                    margin: 5
                }}
                key={frame.id}
                onClick={() => this.props.changeFrame(frame.id)}
            >
            </div>
        );
    };

    render() {
        const { frames } = this.props;
        const blinds = frames && frames.length > 0
            ? frames.map(frame => {
                return this.getFrameBlind(frame);
            })
            : null;
        return (
            <div className="instruments">
                {blinds}
                <div
                    style={{
                        width: 100,
                        height: 100,
                        display: 'flex',
                        alignItems: 'center',
                        textAlign: 'center',
                        border: '6px double rgba(28,110,164,0.3)',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: 10,
                        margin: 5,
                        fontSize: 30,
                    }}
                    onClick={this.props.createFrame}>
                    New Frame
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    createFrame: bindActionCreators(
        ToolsActions.createNewFrame,
        dispatch
    ),
    changeFrame: bindActionCreators(
        ToolsActions.changeFrame,
        dispatch
    ),
});

const mapStateToProps = state => ({
    tools: state.tools,
    frames: state.frames.data
});

export default connect(mapStateToProps, mapDispatchToProps)(FrameTools);
