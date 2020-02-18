import React, {Component} from 'react';

class RangeInput extends Component {

    changeValue = (e) => {
        this.props.changeValue(e.target.value);
    };

    render() {
        return (
            <div className="instruments-button">
                {this.props.caption}
                <input
                    type="range"
                    id={this.props.id}
                    min={this.props.min}
                    max={this.props.max}
                    step={this.props.step}
                    value={this.props.value}
                    onChange={this.changeValue}
                    className={this.props.className}
                />
                <div>{this.props.value}</div>
            </div>
        )
    }
}

export default RangeInput;
