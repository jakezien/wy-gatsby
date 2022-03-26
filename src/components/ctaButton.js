import React from "react"
import { Link } from "gatsby"

const CtaButton = ({ to, text, caption, next, className }) => {
  return (      
    <div className="mb-4">
      {next && <span>Next: </span>}
      <h4 style={{display: "inline"}}>{caption}</h4>
      <Link to={to} className={`${className} no-underline hover:text-hotPink`}>
        <h1 className="my-2 py-4 border border-current border-x-0 border-y-[1]">{text}</h1>
      </Link>
    </div>

  )  
}

export default CtaButton