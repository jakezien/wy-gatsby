import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Parallax } from 'react-scroll-parallax';
import { rhythm, scale } from "../utils/typography"


const Container = styled.section`
  width: 100%;
  height 90vh;
  position: relative;
  display: flex;
  overflow: hidden;
`

const FixedBg = styled.figure`
  width: 100%;
  height: 100%;
  position: absolute;
`





const CoverPhoto = (props) => {

  const StyledImg = styled(Img)`
    height: 100vh;
    opacity: ${props.transform}
  `

  const CaptionContainer = styled.div`
    max-width: ${rhythm(30)};
    margin: auto;
    position: relative;
    color: #fff;
    p {font-size: ${props.bigText ? "2em" : "inherit"};}
  `

  let parallaxProps = {
    className : 'custom-class',
    tagOuter : 'figure'
  }

  if (props.parallaxH)
    parallaxProps.x = [50, -50]
  else 
    parallaxProps.y = [-60, 60]

  return (
    <Container className={props.className}>
      <FixedBg>
        <Parallax {...parallaxProps}>
          {props.bg ? props.bg : <StyledImg fluid={props.image} />}
        </Parallax>
      </FixedBg>
      <CaptionContainer>
        {props.children ? props.children : <p>{props.caption}</p>}
      </CaptionContainer>
    </Container>
  )
}

export default CoverPhoto