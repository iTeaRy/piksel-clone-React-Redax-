import React, {Component} from 'react';

import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ToolsActions from '../../actions/tools';
import {STROKE} from "../../constants/tools";

class Stroke extends Component {

    setStrokeTool = () => {
        this.props.setTool(STROKE);
    };

    render() {
        return (
            <div id="instruments__pen" className="instruments-button" onClick={this.setStrokeTool}>
                <CreateOutlinedIcon/>
                Stroke
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    setTool: bindActionCreators(
        ToolsActions.setTool,
        dispatch
    ),
});

export default connect(null, mapDispatchToProps)(Stroke);
