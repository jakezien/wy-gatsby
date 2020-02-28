import React from "react"
import Img from "gatsby-image"
import { Parallax } from 'react-scroll-parallax';

const CaptionedPhoto = (props) => {
  let cs = props.captionSide ? props.captionSide : "left";
  let ext = props.extension ? props.extension : "jpg";
  let content = props.children ? props.children : <p>{props.caption}</p>
            
  return (
    <div>
      {(cs === "left") ? content : ""}
      <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
        {props.image ? <Img fluid={props.image} /> : ""}
      </Parallax>
      {(cs === "right") ? content : ""}
    </div>
  )
}

export default CaptionedPhoto