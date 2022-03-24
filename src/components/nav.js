import React from "react"
import { Link } from "gatsby"
import Logotype from "./logotype"

const Nav = () => {
  return (
    <nav className="px-1 py-0.5 fixed z-40 w-full">
      <ul className="w-full flex justify-between list-none font-franklin uppercase tracking-widest font-normal">
        <li className="mx-4 self-start"><Link to="/"><Logotype small className="fill-black w-12 h-9" /></Link></li>
        <div className="flex justify-center">
          <li className="mx-4"><Link to="/expeditions">Expeditions</Link></li>
          <li className="mx-4"><Link to="/qeros">Q’eros</Link></li>
          <li className="mx-4"><Link to="/projects">Projects</Link></li>
          <li className="mx-4"><Link to="/schools">Schools</Link></li>
          <li className="mx-4"><Link to="/journal">Journal</Link></li>
          <li className="mx-4"><Link to="/about">About</Link></li>
        </div>
        <li className="mx-4 self-end"><Link to="/donate">Donate</Link></li>
      </ul>
    </nav>
  )
}

export default Nav