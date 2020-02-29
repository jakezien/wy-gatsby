import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Parallax } from 'react-scroll-parallax';
import { rhythm, scale } from "../utils/typography"

const CaptionedPhoto = (props) => {
  let cs = props.captionSide ? props.captionSide : "left";
  let ext = props.extension ? props.extension : "jpg";


  const Frame = styled.div`
    border: 20px solid white;
    overflow: hidden;
  `

  const Container = styled.div`
    display: flex;
    width: 100%;
    margin: ${rhythm(8)} auto;
  `

  const ImageContainer = styled.div`
    width: ${rhythm(24)};
    overflow: hidden;
  `

  const CaptionContainer = styled.div`
    max-width: ${rhythm(8)};
  `
  
  let content = (
    <CaptionContainer>
      {props.children ? props.children : <p>{props.caption}</p>}
    </CaptionContainer>
  )
            
  return (
    <Container>
      {(cs === "left") ? content : ""}
      <ImageContainer>
        <Parallax className="custom-class" y={[0, 20]} tagOuter="figure">
          {props.image ? <Img fluid={props.image} /> : ""}
        </Parallax>
      </ImageContainer>
      {(cs === "right") ? content : ""}
    </Container>
  )
}

export default CaptionedPhoto