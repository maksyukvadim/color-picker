import React, { Component } from 'react';
import './color-presets.css';
import dropDown from '../../icons/arrowDropdown.svg';
import { COLORS_LIST } from '../../constants';

class ColorPreset extends Component {
    render() {
        return (
            <div className="ColorPreset">
                <img src={dropDown} alt=""/>
                <div className='ColorPreset__dropdown' >
                    {COLORS_LIST.map( item =>
                        <div className='ColorPreset__dropdown-item'>
                            {item.toUpperCase()}
                            <div className='color-block' style={{background: item}} />
                        </div> )}
                </div>
            </div>
        );
    }
}

export default ColorPreset;
