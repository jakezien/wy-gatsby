import React from "react"
import styled from "styled-components"
import { rhythm, scale } from "../utils/typography"

const StyledDiv = styled.div`
              margin-left: auto;
              margin-right: auto;
              max-width: ${rhythm(32)};
              padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
            `

const Container = (props) => {
  return (
    <StyledDiv className={props.className}>
      {props.children}
    </StyledDiv>
  )
}

export default Container