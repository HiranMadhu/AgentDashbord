import React from "react"
import { Row, Col, Button } from "antd"
import { LeftCircleFilled, RightCircleFilled } from "@ant-design/icons"
var currentDate = new Date()
const currentDayOfMonth = currentDate.getDate()
const currentMonth = currentDate.getMonth()
const currentYear = currentDate.getFullYear()
var monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]
var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]
const dateString =
  currentDayOfMonth + " " + monthNames[currentMonth] + " " + currentYear
const daysting = days[currentDate.getDay()]
const DemoBox = (props) => (
  <p className={`height-${props.value}`}>{props.children}</p>
)

function CalendarCardHeader(props) {
  return (
    <div
      style={{
        position: "unset",
        height: 70,
        backgroundColor: "#E8E8E8",
        border: "0px",
        borderRadius: "5px 5px 0 0",
        padding: "20px",
        overflowX: "clip",
      }}
    >
      <Row justify="start">
        <Col span={4}>
          <DemoBox value={100}>
            <Row style={{ align: "top" }}>
              <Col xs={8} className="gutter-row">
                <LeftCircleFilled
                  style={{ style: "#F8F8F8", fontSize: "30px" }}
                />
              </Col>
              <Col xs={8} className="gutter-row">
                <RightCircleFilled
                  style={{ style: "#F8F8F8", fontSize: "30px" }}
                />
              </Col>
            </Row>
          </DemoBox>
        </Col>
        <Col xs={8}>
          <h4
            style={{
              margin: "-5px",
              fontSize: "20px",
            }}
          >
            {dateString}
          </h4>
          <h5
            style={{
              margin: "-5px",
              fontSize: "12px",
            }}
          >
            {daysting}
          </h5>
        </Col>
        <Col span={6}>col-4</Col>
        <Col span={4}>
          <Button
            style={{
              position: "inherit",
              backgroundColor: "#4FBA9C",
              borderRadius: "5px",
              fontSize: "14px",
              paddingLeft: "32px",
              paddingRight: "33px",
              border: "0px",
              opacity: "1",
              overflowX: "clip",
            }}
            type="primary"
          >
            Edit Calendar
          </Button>
        </Col>
      </Row>
    </div>
  )
}

export default CalendarCardHeader
