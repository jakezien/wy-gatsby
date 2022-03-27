import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../util/typography"

import Nav from "./nav"


const Header = ({title}) => {
  return (      
    <header id="site-header">
      <div id="site-logo"></div>
      <Nav />
{/*
   {% include scrollNagger.html %}
   {% include donate.html %}
*/}
    </header>
  )  
}

export default Header