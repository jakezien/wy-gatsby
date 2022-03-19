import React from "react"
import Img from "gatsby-image"
import { Parallax } from 'react-scroll-parallax';
import Container from "./container"


const CaptionedPhoto = (props) => {
  let captionSide = props.captionRight ? 'right' : 'left';
  let ext = props.extension ? props.extension : "jpg";
  
  let content = (
    <div className="max-w-xs my-0 mx-1">
      {props.children ? props.children : <p>{props.caption}</p>}
    </div>
  )
            
  let parallaxProps = {
    className : 'custom-class',
    tagOuter : 'figure'
  }

  if (props.parallaxH) 
    parallaxProps.x = [5, -5]
  else 
    parallaxProps.y = [-15, 15]

  return (
    <Container className={`${props.className} flex my-8`}>
      {(captionSide === "left") ? content : ""}
      <div className="w-full overflow-hidden">
        <Parallax {...parallaxProps}>
          {props.image ? <Img fluid={props.image} /> : ""}
        </Parallax>
      </div>
      {(captionSide === "right") ? content : ""}
    </Container>
  )
}

export default CaptionedPhoto