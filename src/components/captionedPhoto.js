import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Parallax } from 'react-scroll-parallax';
import { rhythm, scale } from "../utils/typography"

const CaptionedPhoto = (props) => {
  let cs = props.captionSide ? props.captionSide : "left";
  let ext = props.extension ? props.extension : "jpg";

  const Container = styled.div`
    display: flex;
    width: 100%;
    margin: ${rhythm(12)} auto;
  `

  const ImageContainer = styled.div`
    width: ${rhythm(24)};
    overflow: hidden;
  `

  const CaptionContainer = styled.div`
    max-width: ${rhythm(8)};
    margin: 0 ${rhythm(1)};
  `
  
  let content = (
    <CaptionContainer>
      {props.children ? props.children : <p>{props.caption}</p>}
    </CaptionContainer>
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
    <Container>
      {(cs === "left") ? content : ""}
      <ImageContainer>
        <Parallax {...parallaxProps}>
          {props.image ? <Img fluid={props.image} /> : ""}
        </Parallax>
      </ImageContainer>
      {(cs === "right") ? content : ""}
    </Container>
  )
}

export default CaptionedPhoto