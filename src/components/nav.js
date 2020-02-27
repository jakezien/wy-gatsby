import React from "react"
import { Link } from "gatsby"

const Nav = () => {
  return (
    <ul>
      <div class="logotype"><Link to="/">Logo</Link></div>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/projects">Projects</Link></li>
      <li><Link to="/schools">Schools</Link></li>
      <li><Link to="/qeros">Q’eros</Link></li>
      <li><Link to="/expeditions">Expeditions</Link></li>
      <li><Link to="/shop">Shop</Link></li>
      <li><Link to="/blog">Blog</Link></li>
      <li><Link to="/about">About</Link></li>
      <li class="donate-btn">Donate</li>
    </ul>
  )
}

export default Nav