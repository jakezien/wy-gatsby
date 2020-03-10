import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import styled from "styled-components"

const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: ${rhythm(0.5)} ${rhythm(1)};
  li {
    list-style: none;
  }
`

const Nav = () => {
  return (
    <Ul>
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
    </Ul>
  )
}

export default Nav