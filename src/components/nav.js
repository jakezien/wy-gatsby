import React from "react"
import { Link } from "gatsby"
import Logotype from "./logotype"

const Nav = () => {
  return (
    <ul className="flex justify-between px-1 py-0.5 fixed z-40 w-full list-none">
      <Link to="/"><Logotype /></Link>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/expeditions">Expeditions</Link></li>
      <li><Link to="/qeros">Q’eros</Link></li>
      <li><Link to="/projects">Projects</Link></li>
      <li><Link to="/schools">Schools</Link></li>
      <li><Link to="/journal">Journal</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/donate">Donate</Link></li>
    </ul>
  )
}

export default Nav