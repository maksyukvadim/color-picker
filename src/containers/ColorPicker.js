import React, { Component } from 'react';
import InputColorHex from '../components/InputColorHex';
import ColorSliders from '../components/colorSliders';
import ColorPreset from '../components/colorPreset';

class ColorPicker extends Component {

    state = {
        openedSliders: false,
        openedPresets: false,
        activeColor: '#ff0000'
    };

    onOpenedPresets = () => {
        this.setState({openedPresets: !this.state.openedPresets});
    };
    onOpenedSliders = () => {
        this.setState({openedSliders: !this.state.openedSliders});
    };
    onAcceptColor = (color) => this.setState({activeColor: color});

    render() {
        const { openedSliders, openedPresets, activeColor } = this.state;
        return (
            <div className="ColorPicker">
                <InputColorHex color={activeColor} />
                <ColorSliders
                    onOpen={this.onOpenedSliders}
                    open={openedSliders}
                    onAccept={this.onAcceptColor}
                />
                <ColorPreset
                    onOpen={this.onOpenedPresets}
                    open={openedPresets}
                />
            </div>
        );
    }
}

export default ColorPicker;
