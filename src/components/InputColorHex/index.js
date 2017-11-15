import React from 'react';
import './input-color-hex.css';

const InputColorHex = ({color}) =>
    <input className='InputColorHex'
           value={color}
           maxLength='7'
           type="text"
           onChange={() => {}}
    />;

export default InputColorHex;
