import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import { ThemeProvider } from 'styled-components';
import { ParallaxProvider } from 'react-scroll-parallax';
import Theme from '../styles/theme';

import Header from "./header"
import Footer from "./footer"

const Layout = ({ location, title, children }) => {
  return (
    <ThemeProvider theme = {Theme}>
      <ParallaxProvider>
        <div>
          <Header title="Poop" />
          <main>{children}</main>
          <Footer />
        </div>
      </ParallaxProvider>
    </ThemeProvider>
  )
}

export default Layout
