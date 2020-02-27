import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

const Footer = () => {
  return (      
    <footer id="site-footer">
      <div class="wrapper">
        <div class="logotype">
          Logotype.svg
        </div>

        <div class="keyline"></div>

        <div class="contact">

          <div class="social">
            <a href="http://www.twitter.com/willkayachay" class="twitter icon" target="_blank">
              twitter.svg
            </a>
            <a href="http://www.facebook.com/willkayachay" class="facebook icon" target="_blank">
              facebook.svg
            </a>
            <a href="http://www.instagram.com/willkayachay" class="instagram icon" target="_blank">
              instagram.svg
            </a>
          </div>

          <a class="block" href="mailto:info@willkayachay.org">info@willkayachay.org</a>

          <a class="block" href="http://eepurl.com/tZlTP" target="_blank">Join our mailing list</a>
        </div>

        <div class="copyright">
          <div>
            <p>&copy; 2014 Willka Yachay</p>
          </div>
          <div>
            <p>Willka Yachay is a legal Peruvian NGO.</p>
          </div>
          <div>
            <p>Photographs by Hannah Porst.</p>
            <p>Video courtesy of <a href="http://www.kidnectedworld.com" target="_blank">Kidnected World.</a></p>
            <p>Website by Jake Zien.</p>
          </div>
        </div>
      
      </div>

    </footer>
  )  
}

export default Footer