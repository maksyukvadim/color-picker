import React from 'react';

const RangeInput = ({name, value, onDrag, color}) =>
    <div className="dropdown__range_group">
        <span className='range_group__name'>{name}</span>
        <input
            type="range"
            min="0"
            max="255"
            step="1"
            value={value}
            onChange={onDrag(color)}
            className={`range_group__range range_group__range_${color}`}
        />
    </div>;

export default RangeInput;