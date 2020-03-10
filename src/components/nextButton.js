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

const NextButton = ({ title, caption, uri }) => {
  return (      
    <Container>
      <StyledLink to={uri}>
        <p>Next: <h4 style={{display: "inline"}}>{caption}</h4></p>
        <StyledH1>{title}</StyledH1>
      </StyledLink>
    </Container>
  )  
}

export default NextButton