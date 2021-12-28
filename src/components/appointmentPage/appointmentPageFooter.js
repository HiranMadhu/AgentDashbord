import React from "react"
import { useState } from "react"
import { Row, Col, Button, Card} from "antd"

function AppointmentPageFooter(props) {

    const [viewStep, setViewStep] = useState(1)

    function onClickNextButton(event) {
      console.log(viewStep)
      setViewStep(viewStep + 1)
    }
    
  return (
    <Card style={{ height: "70px" }}>
      <Row justify="start">
        <Col span={8}>col-4</Col>

        <Col offset={8}>
          <Button
            style={{
              backgroundColor: "#4FBA9C",
              border: "1px",
              borderColor: "#4FBA9C",
              color: "#FFFFFF",
              fontSize: "14px",
              width: "100px",
              height: "32px",
            }}
            onClick={onClickNextButton}
          >
            Next
          </Button>
        </Col>
      </Row>
    </Card>
  )
}
export default AppointmentPageFooter
