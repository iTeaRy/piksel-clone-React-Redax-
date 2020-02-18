import React, {Component} from 'react';

import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ToolsActions from '../../actions/tools';
import {PEN} from "../../constants/tools";

class Pen extends Component {

    setPenTool = () => {
        this.props.setTool(PEN);
    };

    render() {
        return (
            <div id="instruments__pen" className="instruments-button" onClick={this.setPenTool}>
                <CreateOutlinedIcon/>
                Pen
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

export default connect(null, mapDispatchToProps)(Pen);
