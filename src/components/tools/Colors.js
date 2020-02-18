import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';

import ToolsActions from '../../actions/tools';
import ColorPicker from "../common/ColorPicker";

class Colors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowPicker: false,
            isShowSecondPicker: false,
        };
    }

    chooseColor = color => {
        this.props.setColor(color);
    };

    chooseSecondColor = color => {
        this.props.setSecondaryColor(color);
    };

    handleShowColorPicker = () => {
        this.setState(prevState => ({
            isShowPicker: !prevState.isShowPicker
        }))
    };

    handleShowSecondColorPicker = () => {
        this.setState(prevState => ({
            isShowSecondPicker: !prevState.isShowSecondPicker
        }))
    };

    render() {
        return (
            <div className="colors">
                <div className="colors__change">
                    <ColorPicker
                        onChange={this.chooseColor}
                        onShowPicker={this.handleShowColorPicker}
                        isShow={this.state.isShowPicker}
                        value={this.props.color}
                        id="colorPicker_id"
                    />
                    <CompareArrowsIcon onClick={this.props.reversColors} />
                    <ColorPicker
                        onChange={this.chooseSecondColor}
                        onShowPicker={this.handleShowSecondColorPicker}
                        isShow={this.state.isShowSecondPicker}
                        value={this.props.secondaryColor}
                        id="secondaryColorPicker_id"
                    />
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    setColor: bindActionCreators(
        ToolsActions.setColor,
        dispatch
    ),
    setSecondaryColor: bindActionCreators(
        ToolsActions.setSecondaryColor,
        dispatch
    ),
    reversColors: bindActionCreators(
        ToolsActions.reversColors,
        dispatch
    ),
});

export default connect(null, mapDispatchToProps)(Colors);
