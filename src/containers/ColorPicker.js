import React, { Component } from 'react';
import InputColorHex from '../components/InputColorHex';
import ColorPresets from '../components/colorSliders';
import ColorSliders from '../components/colorPreset';

class ColorPicker extends Component {

    state = {
        openedSliders: false,
        openedPresets: false
    };

    render() {
        const { openedSliders, openedPresets } = this.state;
        return (
            <div className="ColorPicker">
                <InputColorHex />
                <ColorPresets open={openedPresets} />
                <ColorSliders open={openedSliders} />
            </div>
        );
    }
}

export default ColorPicker;
