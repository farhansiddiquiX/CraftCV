import React from 'react';
import { themes } from '../../themes';
import './ColorPicker.css';

export default function ColorPicker({ selected, onSelect, onCustomColorChange, customColor }) {
  return (
    <div className="color-picker">
      <h4>Theme Color</h4>
      <div className="swatches">
        {themes.map(t =>
          t.isCustom ? (
            <label
              key={t.id}
              className={`swatch custom-picker ${selected === t.id ? 'active' : ''}`}
              style={{ backgroundColor: selected === t.id ? customColor : 'transparent' }}
            >
              {selected !== t.id && (
                <img src="/images/rainbow-circle.png" alt="Custom" className="custom-img" />
              )}
              <input
                type="color"
                value={customColor}
                onChange={(e) => {
                  onCustomColorChange(e.target.value);
                  onSelect(t.id);
                }}
                title="Choose Custom Color"
              />
            </label>
          ) : (
            <button
              key={t.id}
              className={`swatch ${selected === t.id ? 'active' : ''}`}
              style={{ backgroundColor: t.color }}
              onClick={() => onSelect(t.id)}
              title={t.name}
            />
          )
        )}
      </div>
    </div>
  );
}
