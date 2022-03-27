import React from "react"
import { Link } from "gatsby"

import Container from "./container"
import Logotype from "./logotype"
import Social from "./social"

const Footer = () => {
  return (      
    <footer className="relative z-1 bg-brown">
      <Container >
        <Logotype />
        <div>
          <Social />
          mailto
          join mailing list
        </div>
        <div>
          © {new Date().getFullYear()} Willka Yachay.
          Willka Yachay is a legal Peruvian NGO with a partner US 501c3.
          Photographs by Hannah Porst.
          Video courtesy of <a href="http://www.kidnectedworld.com" target="_blank">Kidnected World.</a> 
          Website by Jake Zien.
        </div>
      </Container>
    </footer>
  )  
}

export default Footer