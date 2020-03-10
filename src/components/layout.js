import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import { ParallaxProvider } from 'react-scroll-parallax';

import Header from "./header"
import Footer from "./footer"

const Layout = ({ location, title, children }) => {
  return (
    <ParallaxProvider>
      <div>
        <Header title="Poop" />
        <main>{children}</main>
        <Footer />
      </div>
    </ParallaxProvider>
  )
}

export default Layout
