import React, {Component} from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ToolsActions from '../../actions/tools';
import { EYE_DROPPER } from "../../constants/tools";
import ColorizeIcon from '@material-ui/icons/Colorize';

class Eyedropper extends Component {

    setEyeDropperTool = () => {
        this.props.setTool(EYE_DROPPER);
    };

    render() {
        return (
            <div id="instruments__color-eyedropper" className="instruments-button" onClick={this.setEyeDropperTool}>
                <ColorizeIcon/>
                Eyedropper
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

export default connect(null, mapDispatchToProps)(Eyedropper);
