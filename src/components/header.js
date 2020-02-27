import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"


const Header = ({title}) => {
  return (      
    <header id="site-header">
      <div id="site-logo"></div>
      <nav id="site-nav">

        <div id="menu-mobile">  
          <div id="menu-btn">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div class="logotype">
            <a href="/"> 
              Logo
              {/*{% include logotype-h.svg %}*/}
            </a>
          </div>
          <div class="clearfix"></div>
        </div>

        <ul>
          <div class="logotype">
            <a href="/">
              Logo
              {/*{% include logotype-small.svg %}*/}
            </a>
          </div>
          <li class="mobile-show"><a href="/">Home</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/schools">Schools</a></li>
          <li><a href="/qeros">Q&rsquo;eros</a></li>
          <li><a href="/expeditions">Expeditions</a></li>
          <li><a href="/shop">Shop</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/about">About</a></li>
          <li class="donate-btn">
            <a href="#donate" data-bypass="true">
              Donate
              <div class="close">X</div>
            </a>
          </li>
        </ul>
      </nav>
{/*
   {% include scrollNagger.html %}
   {% include donate.html %}
*/}
    </header>
  )  
}

export default Header