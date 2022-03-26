import React from "react"
import { Link } from "gatsby"
import Logotype from "./logotype"

const Nav = () => {
  return (
    <nav className="px-1 py-0.5 fixed z-40 w-full bg-cloud">
      <ul className="w-full flex justify-between items-center list-none font-franklin uppercase tracking-[0.2em] font-normal">
        <li className="mx-4 my-2 self-start"><Link to="/"><Logotype small className="fill-black w-11 h-8" /></Link></li>
        <div className="flex justify-center items-center">
          <li className="mx-4 my-0"><Link to="/expeditions">Expeditions</Link></li>
          <li className="mx-4 my-0"><Link to="/qeros">Q’eros</Link></li>
          <li className="mx-4 my-0"><Link to="/projects">Projects</Link></li>
          <li className="mx-4 my-0"><Link to="/schools">Schools</Link></li>
          <li className="mx-4 my-0"><Link to="/journal">Journal</Link></li>
          <li className="mx-4 my-0"><Link to="/about">About</Link></li>
        </div>
        <li className="mx-4 my-0 border rounded-sm border-darkBrown"><Link to="/donate" className="block px-3 py-1">Donate</Link></li>
      </ul>
    </nav>
  )
}

export default Nav