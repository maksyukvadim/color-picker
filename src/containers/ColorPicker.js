import React, { Component } from 'react';
import InputColorHex from '../components/InputColorHex';
import ColorSliders from '../components/colorSliders';
import ColorPreset from '../components/colorPreset';

class ColorPicker extends Component {

    state = {
        openedSliders: false,
        openedPresets: false
    };

    onOpenedPresets = (e) => {
        this.setState({openedPresets: !this.state.openedPresets});
    };

    render() {
        const { openedSliders, openedPresets } = this.state;
        return (
            <div className="ColorPicker">
                <InputColorHex />
                <ColorSliders open={openedSliders} />
                <ColorPreset onOpen={this.onOpenedPresets} open={openedPresets} />
            </div>
        );
    }
}

export default ColorPicker;
