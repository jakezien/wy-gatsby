import React from "react"
import { Picture } from 'react-responsive-picture';

const CaptionedPhoto = (props) => {
  let cs = props.captionSide ? props.captionSide : "left";
  let ext = props.extension ? props.extension : "jpg";
  let content = props.children ? props.children : <p>{props.caption}</p>
  let src = props.image + '@2x.' + ext + ' 2x, ' +
            props.image + '.' + ext + ' 1x';
            
  return (
    <div>
      {(cs === "left") ? content : ""}
      <Picture src={src}/>
      {(cs === "right") ? content : ""}
    </div>
  )
}

export default CaptionedPhoto