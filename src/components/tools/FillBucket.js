import React, {Component} from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ToolsActions from '../../actions/tools';
import { FILL } from "../../constants/tools";
import FormatColorFillOutlinedIcon from '@material-ui/icons/FormatColorFillOutlined';

class FillBucket extends Component {

    setFillTool =() => {
        this.props.setTool(FILL);
    };

    render() {
        return (
            <div id="instruments__fillbucket" className="instruments-button" onClick={this.setFillTool}>
                <FormatColorFillOutlinedIcon/>
                Fill bucket
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

export default connect(null, mapDispatchToProps)(FillBucket);
