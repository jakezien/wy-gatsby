import React from "react"
import { Picture } from 'react-responsive-picture';

const CaptionedPhoto = ({ caption, image, captionSide }) => {
  captionSide = captionSide ? captionSide : "left";
  return (
    <div>
      {captionSide === "left" ? <p>{caption}</p> : ""}
      <Picture src="{image}@2x.jpg 2x, {image}.jpg 1x"/>
      {captionSide === "right" ? <p>{caption}</p> : ""}
    </div>
  )
}

export default CaptionedPhoto