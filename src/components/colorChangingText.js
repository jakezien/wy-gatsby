import React from "react";
import { useParallax } from 'react-scroll-parallax';
import { rgbToHex } from "../utils/util";
const interpolate = require('color-interpolate');

const ColorChangingText = (props) => {
  const [color, setColor] = React.useState(props.colors?.[0]);
  const interpolator = interpolate(props.colors);

  const onProgressChange = (progress) => {
    let newColorRgb = interpolator(progress);
    let newColorHex = rgbToHex(newColorRgb);
    if (newColorHex !== color) {
      setColor(newColorHex);
    }
  }

  const { ref } = useParallax({
    // onChange: (e) => console.log('change', e),
    onProgressChange: onProgressChange,
    speed:0,
  });


  return (
    <div className={props.className} ref={ref} style={{
      color: color,
      willChange: "color",
    }}>
      {props.children}
    </div>
  )
}

export default ColorChangingText;