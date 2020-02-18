import React from 'react';
import PropTypes from 'prop-types';
import { SketchPicker } from 'react-color';

import { DEFAULT_COLOR } from '../../constants/tools';

import './ColorPicker.css';

const ColorPicker = props => {
    const { value, onChange } = props;

    return (
        <div id={props.id}>
            <div
                className="click-color"
                id="primary"
                onClick={props.onShowPicker}
                style={{ backgroundColor: `rgba(${value.r},${value.g},${value.b},${value.a})`}}
            />
            {props.isShow ? (
                <div style={{ position: 'fixed', zIndex: '1' }}>
                    <div className={'popover'}>
                        <div className="cover" onClick={props.onShowPicker} />
                        <SketchPicker
                            color={value ? value : DEFAULT_COLOR}
                            onChangeComplete={color => onChange(color.rgb)}
                        />
                    </div>
                </div>
            ) : null}
        </div>
    );
};


ColorPicker.propTypes = {
    onShowPicker: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.object,
    isShow: PropTypes.bool,
    id: PropTypes.string,
};

ColorPicker.defaultProps = {
    value: DEFAULT_COLOR,
    label: '',
};

export default ColorPicker;
