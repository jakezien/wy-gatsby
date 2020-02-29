import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'
import { Parallax } from 'react-scroll-parallax';
import { rhythm, scale } from "../utils/typography"

const CoverPhoto = (props) => {
  const CaptionContainer = styled.div`
    max-width: ${rhythm(20)};
  `

  return (
    <BackgroundImage 
      Tag="div" 
      fluid={props.image} 
      classname={props.classname}
      style={{
        width: '100%',
        height: '100vh',
        minHeight: '600px',
      }}
      >
      <CaptionContainer>
        {props.children ? props.children : <p>{props.caption}</p>}
      </CaptionContainer>
    </BackgroundImage>
  )
}

const StyledCoverPhoto = styled(CoverPhoto)`
  border: 10px solid red;
`

export default StyledCoverPhoto