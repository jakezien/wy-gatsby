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
        // sky
        speed: 0,
        style: { position: 'fixed', inset:'none !important' },
        className: '-z-1',
        children: (
          <StaticImage
            alt=""
            src='../images/expeditions/sky2x.jpg'
            className="w-full h-full md:bg-cover fixed object-bottom"
            layout="fullWidth"
          />
        )
      },
      {
        // title  
        speed: -50,
        children: (
          <div className="absolute w-full h-full flex flex-col justify-center">
            <h1 className="text-center mx-auto text-cloud mb-24">Expeditions</h1>
            {/* <p className="text-cloud max-w-2xl mt-4 mx-auto visibility:hidden">In partnership with Q’ero families, Willka Yachay offers expeditions to individuals and groups who appreciate the Q’eros, support their sustainable development, seek a strong intercultural connection with&nbsp;them, and wish to learn from their teachings.</p> */}
          </div>
        )
      },
      {
        // mountains
        speed: -10,
        children: (
          <StaticImage 
            alt="" 
            src='../images/expeditions/top2x.jpg'
            className="w-full absolute left-0 right-0 bottom-[10vh] sm:bottom-[3%] object-bottom" 
            style={{
              maskImage: 'url(mountains.svg)',
              maskPosition: 'center 67%',
              maskRepeat: 'no-repeat',
              maskSize: '100% auto',
            }}/>
        ) 
      },
      {
        // tents
        speed: 5,
        children: (
          <StaticImage
            alt="A starry sky framed by mountains. At their base, several tents glow from lantern light within."
            src='../images/expeditions/top2x.jpg'
            className="w-full absolute left-0 right-0 bottom-[3vh] object-bottom"
            style={{
              maskImage: 'url(tents.svg)',
              maskPosition: 'center bottom',
              maskRepeat: 'no-repeat',
              maskSize: '100% auto',
            }}/>
          )
        },
        {
          // subtitle
          speed: -20,
          opacity: [1,0],
          startScroll: 0,
          endScroll: 350,
          children: (
              <div className="absolute w-full h-full flex flex-col justify-center top-[256px]">
                {/* <h1 className="text-center mx-auto text-cloud ">Expeditions</h1> */}
                <p className="text-cloud max-w-2xl w-5/6 mx-auto mt-28 md:mt-16">In partnership with Q’ero families, Willka Yachay offers expeditions to individuals and groups who appreciate the Q’eros, support their sustainable development, seek a strong intercultural connection with&nbsp;them, and wish to learn from their teachings.</p>
              </div>
            )
        }
    ]}
  />
  )
}

export default ExpeditionsHero