import React from "react"
import "./index.css"

const CheckBox = (props) => {
  return (
    <div className="container">
      <div className="round">
        <label for={props.id}></label>
      </div>
    </div>
  )
}
export default CheckBox
