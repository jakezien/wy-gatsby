import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ location, title, children }) => {
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <Header title="Poop" />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
