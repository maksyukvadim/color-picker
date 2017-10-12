import React, { Component } from 'react';
import './color-presets.css';
import dropDown from '../../icons/arrowDropdown.svg';
import { COLORS_LIST } from '../../constants';

class ColorPreset extends Component {
    render() {
        const { onOpen, open } = this.props;
        return (
            <div className="ColorPreset" onClick={onOpen}>
                <img src={dropDown} alt=""/>
                {open && <div className='ColorPreset__dropdown' >
                    {COLORS_LIST.map( item =>
                        <div className='ColorPreset__dropdown-item' key={item}>
                            <div className='dropdown-item__text'>{item.toUpperCase()}</div>
                            <div className='dropdown-item__block-color' style={{background: item}} />
                        </div> )}
                </div>}
            </div>
        );
    }
}

export default ColorPreset;
