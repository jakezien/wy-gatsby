import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"

const NextButton = ({ title, caption, uri }) => {
  return (      
    <Link to={uri}>
      <p>Next: <h4 style={{display: "inline"}}>{caption}</h4></p>
      <h1 style={{marginTop: "-1rem"}}>{title}</h1>
    </Link>
  )  
}

export default NextButton