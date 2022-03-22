import React from "react"
import { Link } from "gatsby"

const CtaButton = ({ to, text, caption, next, className }) => {
  return (      

    <Link to={to} className={`${className} no-underline`}>
      {next && <span>Next: </span>}
      <h4 style={{display: "inline"}}>{caption}</h4>
      <h1 className="my-2 py-4 border border-x-0 border-y-[1]">{text}</h1>
    </Link>

  )  
}

export default CtaButton