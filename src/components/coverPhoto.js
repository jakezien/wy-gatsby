import React from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import { Parallax } from 'react-scroll-parallax';

const Scrim = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: white;
  z-index: 1;
`

const CoverPhoto = (props) => {

  let parallaxProps = {}

  if (props.parallaxH)
    parallaxProps.x = [50, -50]
  else 
    parallaxProps.y = [-60, 60]
  
  if (props.parallaxProps) 
    parallaxProps = { ...parallaxProps, ...props.parallaxProps }

  return (
    <div className={`${props.className} 
      w-full flex overflow-hidden relative
      ${props.fullHeight ? 'h-screen' : 'h-[90vh]'} 
    `}>
      <div className={`w-full m-auto relative z-10 text-white top-12 ${props.bigText && 'text-lg'}`}>
        {props.children ? props.children : <p>{props.caption}</p>}
      </div>
      <figure className={`w-full h-full z-0 ${props.fixed ? 'fixed' : 'absolute'}`}>
        {props.scrim ? <Scrim className="scrim" /> : ""}
        {props.bg ? props.bg :
          <Parallax {...parallaxProps}>
            <GatsbyImage image={props.image} alt={props.alt} className="h-screen" />
          </Parallax>
        }
      </figure>
    </div>
  )
}

export default CoverPhoto