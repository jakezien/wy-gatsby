import React from "react"
import styled from "styled-components"

const StyledVideo = styled.video`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`

const BgVideo = (props) => {
  return (
    <StyledVideo muted loop playsInline autoPlay disablePictureInPicture className={props.className}>
      <source src={props.src} type="video/mp4" />
    </StyledVideo>
  )
}

export default BgVideo