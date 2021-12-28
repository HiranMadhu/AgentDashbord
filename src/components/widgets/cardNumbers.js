import { Col, Row } from "antd"
import Card from "./card"

const CardNumbers = ({ backgroundColor, cardText, cardNumber }) => {
  return (
    <Row>
      <Col span={16}>
        <Card
          cardText={cardText}
          style={{
            borderRadius: "5px 0px 0px 5px",
            backgroundColor: "#3A3A3A",

            fontSize: "18px",
          }}
          bodyStyle={{
            textAlign: "left",
            font: "Poppins",
            fontWeight: "medium",
            fontSize: "20px",
            letterSpacing: "0px",
            color: "#FFFFFF",
            lineHeight: "1.3"
          }}
        ></Card>
      </Col>
      <Col span={8}>
        <Card
          cardText={cardNumber}
          style={{
            borderRadius: "0 5px 5px 0",
            fontSize: "41px",
            color: "#FFFFFF",
            backgroundColor: backgroundColor,
          }}
        ></Card>
      </Col>
    </Row>
  )
}

export default CardNumbers
