import React from "react"
import { GatsbyImage } from "gatsby-plugin-image";
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
            
  let parallaxProps = {}

  if (props.parallaxH) 
    parallaxProps.translateX = [5, -5]
  else 
    parallaxProps.translateY = [-15, 15]

  return (
    <Container className={`${props.className} flex my-8`}>
      {captionSide === "left" && <Parallax speed={-20} className="pr-20 flex flex-col justify-center">{content}</Parallax>}
      <div className="w-2/3 overflow-hidden">
        {/* <Parallax {...parallaxProps}> */}
          {props.image && <GatsbyImage image={props.image} alt={""} className="w-full"/>}
        {/* </Parallax> */}
      </div>
      {(captionSide === "right") && <Parallax speed={-20} className="pl-20 flex flex-col justify-center">{content}</Parallax>}
    </Container>
  )
}

export default CaptionedPhoto