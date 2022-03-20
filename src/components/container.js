import React from "react"

const Container = (props) => {
  return (
    <div className={`${props.className} mx-auto w-5/6 py-8`}>
      {props.children}
    </div>
  )
}

export default Container