import React from 'react';
import './color-presets.css';
import dropDown from '../../icons/arrowDropdown.svg';
import { COLORS_LIST } from '../../constants';

const ColorPreset = ({onOpen, open, onActiveColor}) => (
    <div className="ColorPreset" onClick={onOpen}>
        <img src={dropDown} alt=""/>
        {open && <div className='ColorPreset__dropdown' >
            {COLORS_LIST.map( ({name ,value}) =>
                <div className='ColorPreset__dropdown-item' key={name} onClick={() => onActiveColor(value)} >
                    <div className='dropdown-item__text'>{name.toUpperCase()}</div>
                    <div className='dropdown-item__block-color' style={{background: value}} />
                </div> )}
        </div>}
    </div>
);

export default ColorPreset;
