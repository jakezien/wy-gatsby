import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import { StaticImage } from "gatsby-plugin-image";
import { encodeSvg } from "../util/util";
import MountainsSVG from '../images/expeditions/mountains.svg';
import TentsSVG from '../images/expeditions/tents.svg';

const mountainsBase64 = encodeSvg(<MountainsSVG/>);
const tentsBase64 = encodeSvg(<TentsSVG/>);

const ExpeditionsHero = (props) => {
  console.log('mountainsBase64', mountainsBase64)
  console.log('tentsBase64', tentsBase64)

  return (
    <ParallaxBanner
      className="relative h-full"
      layers={[
      {
        speed: 0,
        style: { position: 'fixed', inset:'none !important' },
        className: '-z-1',
        children: (
          <StaticImage
            alt=""
            src='../images/expeditions/sky@2x.jpg'
            className="w-full h-full bg-cover fixed object-bottom"
            layout="fullWidth"
          />
        )
      },
      {
        speed: -50,
        children: (
          <div className="absolute w-full h-full flex flex-col justify-center">
            <h1 className="text-center mx-auto text-white">Expeditions</h1>
          </div>
        )
      },
      {
        speed: 0,
        children: (
          <StaticImage 
            alt="" 
            src='../images/expeditions/top@2x.jpg'
            className="w-full absolute left-0 bottom-0 object-bottom" 
            style={{
              maskImage: 'url(mountains.svg)',
              maskPosition: 'center 67%',
              maskRepeat: 'no-repeat',
              maskSize: '100% auto',
              bottom: '-15%'
            }}/>
        ) 
      },
      {
        speed: 10,
        children: (
          <StaticImage
            alt="A starry sky framed by mountains. At their base, several tents glow from lantern light within."
            src='../images/expeditions/top@2x.jpg'
            className="w-full absolute left-0 bottom-0 object-bottom"
            style={{
              maskImage: 'url(tents.svg)',
              maskPosition: 'center bottom',
              maskRepeat: 'no-repeat',
              maskSize: '100% auto',
              bottom: '3%'
            }}/>
        )
      },
    ]}
  />
  )
}

export default ExpeditionsHero