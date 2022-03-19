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
  z-index: 0
`

const Scrim = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: white;
  z-index: 1;
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
    z-index: 1;
    color: ${props => props.theme.white};
    p {font-size: ${props.bigText ? "2em" : "inherit"};}
  `

  let parallaxProps = {
    tagOuter : 'figure'
  }

  if (props.parallaxH)
    parallaxProps.x = [50, -50]
  else 
    parallaxProps.y = [-60, 60]

  return (
    <Container className={props.className}>
      <CaptionContainer className="caption w-full">
        {props.children ? props.children : <p>{props.caption}</p>}
      </CaptionContainer>
      <FixedBg>
        {props.scrim ? <Scrim className="scrim" /> : ""}
        <Parallax {...parallaxProps}>
          {props.bg ? props.bg : <StyledImg fluid={props.image} />}
        </Parallax>
      </FixedBg>
    </Container>
  )
}

export default CoverPhoto