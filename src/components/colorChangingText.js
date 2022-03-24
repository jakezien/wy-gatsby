import React from "react";
import { useParallax } from 'react-scroll-parallax';

const ColorChangingText = (props) => {
  const { ref } = useParallax < HTMLDivElement > ({
    onChange: (element) => console.log('change', element),
    onProgressChange: (element) => console.log('progress change', element),
    onEnter: (e) => console.log('enter', e),
    onExit: (e) => console.log('exit', e),
    speed: -100,
  });


  return (
    <div className="color-changing-text" ref={ref}>
      {props.children}
    </div>
  )
}

export default ColorChangingText;