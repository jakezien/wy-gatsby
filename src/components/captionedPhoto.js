import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Parallax } from 'react-scroll-parallax';
import { rhythm, scale } from "../utils/typography"
import Container from "./container"
import { useController } from 'react-scroll-parallax';


const CaptionedPhoto = (props) => {
  let captionSide = props.captionRight ? 'right' : 'left';
  let ext = props.extension ? props.extension : "jpg";

  const { parallaxController } = useController();

  const StyledContainer = styled(Container)`
    display: flex;
    margin-top: ${rhythm(8)};
    margin-bottom: ${rhythm(8)};
  `;

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
    <StyledContainer className={props.className}>
      {(captionSide === "left") ? content : ""}
      <ImageContainer>
        <Parallax {...parallaxProps}>
          {props.image ? <Img fluid={props.image} /> : ""}
        </Parallax>
      </ImageContainer>
      {(captionSide === "right") ? content : ""}
    </StyledContainer>
  )
}

export default CaptionedPhoto