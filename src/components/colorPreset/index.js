import React from 'react';
import './color-presets.css';
import dropDown from '../../icons/arrowDropdown.svg';
import { COLORS_LIST } from '../../constants';

const ColorPreset = ({onOpen, open}) => (
    <div className="ColorPreset" onClick={onOpen}>
        <img src={dropDown} alt=""/>
        {open && <div className='ColorPreset__dropdown' >
            {COLORS_LIST.map( color =>
                <div className='ColorPreset__dropdown-item' key={color}>
                    <div className='dropdown-item__text'>{color.toUpperCase()}</div>
                    <div className='dropdown-item__block-color' style={{background: color}} />
                </div> )}
        </div>}
    </div>
);

export default ColorPreset;
