import React, { Component } from 'react'
import RangeInput from '../rangeInput';
import { rgbToHex } from '../../utils';
import './color-sliders.css';

class ColorSliders extends Component {

    state = {
        red: 255,
        green: 0,
        blue: 0
    };

    onHandleDrag = (color) => (e) => this.setState({[color]: +e.target.value});

    onAccept = (red, green, blue) => {
        const hex = rgbToHex(red, green, blue);
        this.props.onAccept(hex);
    };

    render() {
        const { open, onOpen } = this.props;
        const { red, green, blue } = this.state;

        return (
            <div className="ColorSliders">
                <div className='wrap-color-block' onClick={onOpen}>
                    <div className='color-block' style={{backgroundColor: `RGB(${red},${green},${blue})`}}/>
                </div>
                {open && <div className='ColorSliders__dropdown'>
                    <RangeInput name='R' value={red} color='red' onDrag={this.onHandleDrag} />
                    <RangeInput name='G' value={green} color='green' onDrag={this.onHandleDrag} />
                    <RangeInput name='B' value={blue} color='blue' onDrag={this.onHandleDrag} />
                    <div className='button-group'>
                        <button className='button_cancel'>CANCEL</button>
                        <button className='button_accept' onClick={() => this.onAccept(red, green, blue)}>OK</button>
                    </div>
                </div>}

            </div>
        );
    }
}

export default ColorSliders;
