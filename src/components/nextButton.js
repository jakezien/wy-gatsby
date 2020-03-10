import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import Container from "./container"

const NextButton = ({ title, caption, uri }) => {
  return (      
    <Container>
      <Link to={uri}>
        <p>Next: <h4 style={{display: "inline"}}>{caption}</h4></p>
        <h1 style={{marginTop: "-1rem"}}>{title}</h1>
      </Link>
    </Container>
  )  
}

export default NextButton