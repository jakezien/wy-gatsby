import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import Container from "./container"
import Logotype from "./logotype"
import Social from "./social"

const Footer = () => {
  return (      
    <footer>
      <Container >
        <Logotype />
        <div>
          <Social />
          mailto
          join mailing list
        </div>
        <div>
          © {new Date().getFullYear()} Willka Yachay.
          Willka Yachay is a legal Peruvian NGO.
          Photographs by Hannah Porst.
          Video courtesy of <a href="http://www.kidnectedworld.com" target="_blank">Kidnected World.</a> 
          Website by Jake Zien.
        </div>
      </Container>
    </footer>
  )  
}

export default Footer