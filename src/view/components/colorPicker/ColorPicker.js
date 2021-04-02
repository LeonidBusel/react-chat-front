import { useState } from "react";
import RCColorPicker from "rc-color-picker";

import 'rc-color-picker/assets/index.css';

import "./colorPicker.scss";

const ColorPicker = ({ onClose, color }) => {
    return (
        <div className="color-picker-wrapper">
            <RCColorPicker animation="slide-up" enableAlpha={true} defaultColor={color} onClose={onClose} />
        </div>

    )
}

export default ColorPicker;