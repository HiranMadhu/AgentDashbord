import React from "react"
import { Avatar, Row, Col } from "antd"
import { CalendarOutlined } from "@ant-design/icons"

function AppCardHeader(props) {
  return (
    <div
      style={{
        height: 64,
        maxWidth: "100%",
        backgroundColor: "#3A3A3A",
        border: "0px",
        borderRadius: "5px 5px 0 0",
        padding: "20px",
      }}
    >
      <Row >
        <Col>
          <Avatar style={{ backgroundColor: "white", marginRight:"20px", width:"30px", height:"30px" }}>
            <CalendarOutlined style={{ color: "black", fontSize:"16px" }} />
          </Avatar>
        </Col>
        <Col xs={2}>
          <h3 style={{fontSize:"16px", fontFamily:"Poppins", marginTop:"4px", fontWeight: "normal" , color:"#FFFFFF"}}>Appointments</h3>
        </Col>
      </Row>
    </div>
  )
}

export default AppCardHeader
