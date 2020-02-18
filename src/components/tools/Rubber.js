import React, {Component} from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ToolsActions from '../../actions/tools';
import { RUBBER } from "../../constants/tools";
import KitchenIcon from '@material-ui/icons/Kitchen';

class Rubber extends Component {

    setRubberTool = () => {
        this.props.setTool(RUBBER);
    };

    render() {
        return (
            <div id="instruments__rubber" className="instruments-button" onClick={this.setRubberTool}>
                <KitchenIcon/>
                Rubber
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

export default connect(null, mapDispatchToProps)(Rubber);
