import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import styled from "styled-components"
import Logotype from "./logotype"

const StyledUl = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: ${rhythm(0.5)} ${rhythm(1)};
  position: fixed;
  z-index: 1000;
  width: 100%;
  li {
    list-style: none;
  }
`

const Nav = () => {
  return (
    <StyledUl>
      <Link to="/"><Logotype /></Link>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/expeditions">Expeditions</Link></li>
      <li><Link to="/qeros">Q’eros</Link></li>
      <li><Link to="/projects">Projects</Link></li>
      <li><Link to="/schools">Schools</Link></li>
      <li><Link to="/journal">Journal</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/donate">Donate</Link></li>
    </StyledUl>
  )
}

export default Nav