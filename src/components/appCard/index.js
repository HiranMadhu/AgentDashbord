import React from "react"
import AppCardHeader from "./appCardHeader"
import AppCardBody from "./appCardBody"

function AppCard(props) {
  return (
    <div>
      <AppCardHeader />
      <AppCardBody listOfAppointments={props.listOfAppointments || []}/>
    </div>
  )
}

export default AppCard
