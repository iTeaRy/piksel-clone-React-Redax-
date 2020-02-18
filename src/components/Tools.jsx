import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import RangeInput from './tools/RangeInput';
import Pen from './tools/Pen';
import Rubber from './tools/Rubber';
import Eyedropper from './tools/Eyedropper';
import FillBucket from './tools/FillBucket';
import Colors from './tools/Colors';
import '../styles/instruments.css'
import ToolsActions from "../actions/tools";

class Tools extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props.tools,
        };
    }

    static getDerivedStateFromProps(props, state) {
        return { ...state, ...props.tools };
    }

    render() {
        return (
            <div className="instruments">
                <RangeInput
                    value={this.state.penSize}
                    caption={'Pen Size'}
                    min={1}
                    max={4}
                    changeValue={this.props.setPenSize}
                    className="pen-size"
                />
                <Pen />
                <Rubber />
                <Eyedropper />
                <FillBucket />
                <Colors color={this.state.color} secondaryColor={this.state.secondaryColor} />
                <RangeInput
                    value={this.state.size}
                    caption={'Canvas Size'}
                    step={32}
                    min={32}
                    max={128}
                    changeValue={this.props.changeCanvasSize}
                    className="pen-size"
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    tools: state.tools,
});

const mapDispatchToProps = dispatch => ({
    setPenSize: bindActionCreators(
        ToolsActions.setPenSize,
        dispatch
    ),
    changeCanvasSize: bindActionCreators(
        ToolsActions.changeCanvasSize,
        dispatch
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tools);
