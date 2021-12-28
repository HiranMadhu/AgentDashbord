import React, { useState } from "react"
import { Col, Row, Modal } from "antd"
import "./signModel.css"

export const SignModal = (
  { isSignModalVisible, setIsSignModalVisible, appointment },
  ...props
) => {
  const [backgroundPosition, setBackgroundPosition] = useState("0% 0%")

  const signhandleOk = () => {
    setIsSignModalVisible(false)
  }

  const handleCancel = () => {
    setIsSignModalVisible(false);
};

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect()
    const x = ((e.pageX - left) / width) * 100
    const y = ((e.pageY - top) / height) * 100
    setBackgroundPosition(`${x}% ${y}%`)
  }

  return (
    <>
      {isSignModalVisible ? (
        <Modal
          cancelButtonProps={{ style: { display: "none" } }}
          onCancel={handleCancel}
          title="Signature Comparison"
          style={{
            fontSize: "16px",
            fontFamily: "Poppins",
            fontWeight: "bolder",
          }}
          visible={isSignModalVisible}
          onOk={signhandleOk}
          okText="Done"
          okButtonProps={{
            style: {
              backgroundColor: "#4FBA9C",
              borderRadius: "5px",
              color: "white",
              width: "100px",
              height: "32px",
              marginRight: "10px",
              marginBottom: "5px",
              fontSize: "14px",
              fontFamily: "Poppins",
              fontWeight: "normal",
            },
          }}
        >
          <Row>
            <Col span={12}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  width={"220px"}
                  height={"160px"}
                  src={
                    "http://13.228.45.95:9000/get-image_web?reference=" +
                    // appointment.userInfo.imageInfo.mainImageFrontRef +
                    "SELFIE_FRONT16342795273564065" +
                    "&" +
                    "requestId" +
                    "=" +
                    appointment.responseHeader.requestId
                  }
                  alt="face"
                />
              </div>
              <br />
            </Col>
            <Col span={12}>
              <figure
                onMouseMove={handleMouseMove}
                style={{
                  backgroundPosition,
                  backgroundImage: `url(${
                    "http://13.228.45.95:9000/get-image_web?reference=" +
                    appointment.userInfo.imageInfo.mainImageFrontRef +
                    "&" +
                    "requestId" +
                    "=" +
                    appointment.responseHeader.requestId
                  })`,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    width={"220px"}
                    height={"160px"}
                    className="zoomImage"
                    src={
                      "http://13.228.45.95:9000/get-image_web?reference=" +
                      appointment.userInfo.imageInfo.mainImageFrontRef +
                      "&" +
                      "requestId" +
                      "=" +
                      appointment.responseHeader.requestId
                    }
                    alt="face"
                  />
                </div>
              </figure>
            </Col>
          </Row>
        </Modal>
      ) : null}
    </>
  )
}
export default SignModal
