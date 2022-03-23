import React from "react"
import LogotypeSvg from "../images/svg/logotype.svg"
import LogotypeSmallSvg from "../images/svg/logotype-small.svg"
import LogotypeHorizontalSvg from "../images/svg/logotype-h.svg"

const Logotype = (props) => {
  let returnedLogo = <LogotypeSvg />

  if (props.horizontal) {
    returnedLogo = <LogotypeHorizontalSvg />
  }
  if (props.small) {
    returnedLogo = <LogotypeSmallSvg />
  }
  return (
    <div className={props.className}>
      {returnedLogo}
    </div>
  )  
}

export default Logotype