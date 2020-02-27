import React from "react"
import { FullsizePicture } from 'react-responsive-picture';

const fixedBgPhoto = (props) => {
  return (
    <div>
      {props.children ? props.children : <p>{props.caption}</p>}
      <FullsizePicture src="{image}@2x.jpg 2x, {image}.jpg 1x"/>
    </div>
  )
}

export default fixedBgPhoto