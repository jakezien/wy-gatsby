import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import Container from "./container"
import styled from "styled-components"

const StyledH1 = styled.h1`
  margin-top: -1rem;
  font-size: 3.5em;
  letter-spacing: -0.03em;
`

const StyledLink = styled(Link)`
  text-decoration: none;
`

const CtaButton = ({ to, text, caption, next }) => {
  return (      
    <Container>
      <StyledLink to={to}>
        {next ? <span>Next: </span> : ""}
        <h4 style={{display: "inline"}}>{caption}</h4>
        <StyledH1>{text}</StyledH1>
      </StyledLink>
    </Container>
  )  
}

export default CtaButton