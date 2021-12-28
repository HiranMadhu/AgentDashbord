import React from "react"
import { Col, Row, Modal } from "antd"

export const IdModel = (
  { isIdModalVisible, setIsIdModalVisible, appointment },
  ...props
) => {
  const fronthandleOk = () => {
    setIsIdModalVisible(false)
  }

  const handleCancel = () => {
    setIsIdModalVisible(false);
  };

  return (
    <>
      {isIdModalVisible ? (
        <Modal
          cancelButtonProps={{ style: { display: "none" } }}
          title="ID Preview"
          onCancel={handleCancel}
          visible={isIdModalVisible}
          onOk={fronthandleOk}
          okText="Done"
          okButtonProps={{
            style: {
              backgroundColor: "#4FBA9C",
              borderRadius: "5px",
              color: "white",
              width: "100px",
              height: "32px",
              fontSize: "14px",
              fontFamily: "Poppins",
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
                    appointment.userInfo.imageInfo.mainImageFrontRef +
                    //"SELFIE_FRONT16342795273564065" +
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
                    appointment.userInfo.imageInfo.mainImageBackRef +
                    //"NIC_FRONT1634279799833307" +
                    "&" +
                    "requestId" +
                    "=" +
                    appointment.responseHeader.requestId
                  }
                  alt="backid"
                />
              </div>
              <br />
            </Col>
          </Row>
        </Modal>
      ) : null}
    </>
  )
}

export default IdModel
