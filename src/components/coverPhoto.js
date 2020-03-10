import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Parallax } from 'react-scroll-parallax';
import { rhythm, scale } from "../utils/typography"

const CoverPhoto = (props) => {

  const Container = styled.section`
    width: 100%;
    height 100vh;
    background: red;
    position: relative; 
  `

  const FixedBg = styled.figure`
    width: 100%;
    height: 100%;
  `

  const CaptionContainer = styled.div`
    max-width: ${rhythm(20)};
  `

  return (
    <Container>
      <FixedBg>
        {props.bg}
      </FixedBg>
      <CaptionContainer>
        {props.children ? props.children : <p>{props.caption}</p>}
      </CaptionContainer>
    </Container>
  )
}

const StyledCoverPhoto = styled(CoverPhoto)`
  border: 10px solid red;
`

export default StyledCoverPhoto