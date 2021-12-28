import React, { useState } from "react"
import { Col, Row, Button, Divider, Tag, Skeleton } from "antd"
import "./verification.css"
import { compareface } from "./service/verification.service"
import { comparefront } from "./service/verification.service"
import { compareback } from "./service/verification.service"
// import ScreenCapture from './screenCapture';
import { FaceModal } from "./faceModal"
import { FrontModal } from "./frontModal"
import { BackModal } from "./backModal"
import { SignModal } from "./signModal"

const VerificationInfo = ({ appointment }, ...props) => {
  let percentage = 100
  const [faceCompare, setFaceCompare] = useState([])
  const [frontCompare, setFrontCompare] = useState([])
  const [backCompare, setBackCompare] = useState([])
  const [isFaceModalVisible, setIsFaceModalVisible] = useState(false)
  const [isFrontModalVisible, setIsFrontModalVisible] = useState(false)
  const [isBackModalVisible, setIsBackModalVisible] = useState(false)
  const [isSignModalVisible, setIsSignModalVisible] = useState(false)
  const [isFaceButtonChecked, setIsFaceButtonChecked] = useState(false)
  const [isFrontButtonChecked, setIsFrontButtonChecked] = useState(false)
  const [isBackButtonChecked, setIsBackButtonChecked] = useState(false)
  const [isSignButtonChecked, setIsSignButtonChecked] = useState(false)
  const [isLoading, setLoading] = useState(true)
  const [isFaceTextVisible, setIsFaceTextVisible] = useState(false)
  const [isFrontTextVisible, setIsFrontTextVisible] = useState(false)
  const [isBackTextVisible, setIsBackTextVisible] = useState(false)

  const showFaceModal = () => {
    setIsFaceButtonChecked(true)
    setIsFaceModalVisible((prev) => !prev)
    const facedata = {
      clientImageReference: appointment.userInfo.imageInfo.videoSelfieRef,
      baseImageReference: appointment.userInfo.imageInfo.mainImageFrontRef,
      requestHeader: {
        requestId: appointment.responseHeader.requestId,
        timestamp: appointment.responseHeader.timestamp,
        channel: "sca",
      },
    }

    compareface(facedata).then((response) => {
      setFaceCompare(response.data)
      setLoading(false)
    })
    if (isLoading) {
      return (
        <div>
          <Skeleton.Image />
        </div>
      )
    }
  }

  const showFrontModal = () => {
    setIsFrontButtonChecked(true)
    setIsFrontModalVisible((prev) => !prev)
    const frontdata = {
      ReferenceIDBase: appointment.userInfo.imageInfo.mainImageFrontRef,
      ReferenceIDUser: appointment.userInfo.imageInfo.mainImageFrontRef,
      requestHeader: {
        requestId: appointment.responseHeader.requestId,
        timestamp: appointment.responseHeader.timestamp,
        channel: "sca",
      },
    }
    comparefront(frontdata).then((response) => {
      setFrontCompare(response.data)
    })
  }

  const showBackModal = () => {
    setIsBackButtonChecked(true)
    setIsBackModalVisible((prev) => !prev)
    const backdata = {
      ReferenceIDBase: appointment.userInfo.imageInfo.mainImageBackRef,
      ReferenceIDUser: appointment.userInfo.imageInfo.mainImageBackRef,
      requestHeader: {
        requestId: appointment.responseHeader.requestId,
        timestamp: appointment.responseHeader.timestamp,
        channel: "sca",
      },
    }
    compareback(backdata).then((response) => {
      setBackCompare(response.data)
    })
  }

  const showSignModal = () => {
    setIsSignButtonChecked(true)
    setIsSignModalVisible((prev) => !prev)
  }

  return (
    <div>
      <Row style={{ flexDirection: "row" }}>
        <Col span={12} style={{ justifyContent: "flex-start" }}>
          <div>
            <img
              src={
                "http://13.228.45.95:9000/get-image_web?reference=" +
                appointment.userInfo.imageInfo.mainImageFrontRef +
                "&" +
                "requestId" +
                "=" +
                appointment.responseHeader.requestId
              }
              alt="front"
              style={{ width: "345px", height: "215px", maxWidth: "100%" }}
            />
          </div>
        </Col>

        <Col span={12} style={{ justifyContent: "flex-end" }}>
          <div>
            <img
              src={
                "http://13.228.45.95:9000/get-image_web?reference=" +
                appointment.userInfo.imageInfo.mainImageBackRef +
                "&" +
                "requestId" +
                "=" +
                appointment.responseHeader.requestId
              }
              alt="back"
              style={{ width: "345px", height: "215px", maxWidth: "100%", marginLeft: "10px" }}
            />
          </div>
        </Col>
      </Row>
      <br /><br />

      <div className="example">
        <Row>
          <Col span={12}>
            <h4
              style={{
                fontSize: "14px",
                fontFamily: "Poppins",
                fontWeight: "bold",
              }}
            >
              {" "}
              Face Comparison{" "}
            </h4>
            {/* <ScreenCapture /> */}
            <Button
              onClick={() => showFaceModal()}
              style={{
                width: 132,
                height: 35,
                backgroundColor: "#454545",
                color: "#FFFFFF",
                borderRadius: "5px",
                fontSize: "14px",
                fontFamily: "Poppins",
                fontWeight: "normal",
              }}
            >
              {isFaceButtonChecked ? "Check Again" : "Start Check"}
            </Button>
            <FaceModal
              appointment={appointment}
              isFaceModalVisible={isFaceModalVisible}
              setIsFaceModalVisible={setIsFaceModalVisible}
              setIsFaceTextVisible={setIsFaceTextVisible}
            />
          </Col>
          <Col span={12} style={{ textAlign: "right" }}>
            {isFaceTextVisible ? (
              <Tag
                style={{
                  width: 64,
                  height: 30,
                  backgroundColor: "#D4F9E7",
                  color: "#4FBA9C",
                  borderRadius: "5px",
                  fontSize: "14px",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  fontWeight: "bold",
                  marginRight: "2px",
                  marginBottom: "8px",
                  borderColor: "#D4F9E7",
                  lineHeight: 2,
                }}
              >
                {Math.round(faceCompare.similarityScore * percentage) || 0}%
              </Tag>
            ) : (
              " "
            )}
            <h4 onClick={showFaceModal}>
              <div
                style={{
                  color: "#FCC236",
                  textDecoration: "underline",
                  fontSize: "14px",
                  fontFamily: "Poppins",
                  fontWeight: "normal",
                  cursor: "pointer",
                }}
              >
                {" "}
                {isFaceTextVisible ? "View Comparison" : " "}{" "}
              </div>
            </h4>
          </Col>
          <Divider style={{ backgroundColor: "#F1EFEF", marginTop: "15px", marginBottom: "15px" }} />
        </Row>

        <Row>
          <Col span={12}>
            <h4
              style={{
                fontSize: "14px",
                fontFamily: "Poppins",
                fontWeight: "bold",
              }}
            >
              {" "}
              ID Comparison (Front Side){" "}
            </h4>
            <Button
              onClick={showFrontModal}
              style={{
                width: 132,
                height: 35,
                backgroundColor: "#454545",
                color: "#FFFFFF",
                borderRadius: "5px",
                fontSize: "14px",
                fontFamily: "Poppins",
                fontWeight: "normal",
              }}
            >
              {isFrontButtonChecked ? "Check Again" : "Start Check"}
            </Button>
            <FrontModal
              appointment={appointment}
              isFrontModalVisible={isFrontModalVisible}
              setIsFrontModalVisible={setIsFrontModalVisible}
              setIsFrontTextVisible={setIsFrontTextVisible}
            />
          </Col>
          <Col span={12} style={{ textAlign: "right" }}>
            {isFrontTextVisible ? (
              <Tag
                style={{
                  width: 64,
                  height: 30,
                  backgroundColor: "#D4F9E7",
                  color: "#4FBA9C",
                  borderRadius: "5px",
                  fontSize: "14px",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  fontWeight: "bold",
                  marginRight: "2px",
                  marginBottom: "8px",
                  borderColor: "#D4F9E7",
                  lineHeight: 2,
                }}
              >
                {Math.round(frontCompare.similarityScore * percentage) || 0}%
              </Tag>
            ) : (
              " "
            )}

            <h4 onClick={showFrontModal}>
              <div
                style={{
                  color: "#FCC236",
                  textDecoration: "underline",
                  fontSize: "14px",
                  fontFamily: "Poppins",
                  fontWeight: "normal",
                  cursor: "pointer",
                }}
              >
                {" "}
                {isFrontTextVisible ? "View Comparison" : " "}{" "}
              </div>
            </h4>
          </Col>
          <Divider style={{ backgroundColor: "#F1EFEF", marginTop: "15px", marginBottom: "15px" }} />
        </Row>

        <Row>
          <Col span={12}>
            <h4
              style={{
                fontSize: "14px",
                fontFamily: "Poppins",
                fontWeight: "bold",
              }}
            >
              {" "}
              ID Comparison (Back Side){" "}
            </h4>
            <Button
              onClick={showBackModal}
              style={{
                width: 132,
                height: 35,
                backgroundColor: "#454545",
                color: "#FFFFFF",
                borderRadius: "5px",
                fontSize: "14px",
                fontFamily: "Poppins",
                fontWeight: "normal",
              }}
            >
              {isBackButtonChecked ? "Check Again" : "Start Check"}
            </Button>
            <BackModal
              appointment={appointment}
              isBackModalVisible={isBackModalVisible}
              setIsBackModalVisible={setIsBackModalVisible}
              setIsBackTextVisible={setIsBackTextVisible}
            />
          </Col>
          <Col span={12} style={{ textAlign: "right" }}>
            {isBackTextVisible ? (
              <Tag
                style={{
                  width: 64,
                  height: 30,
                  backgroundColor: "#D4F9E7",
                  color: "#4FBA9C",
                  borderRadius: "5px",
                  fontSize: "14px",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  fontWeight: "bold",
                  marginRight: "2px",
                  marginBottom: "8px",
                  borderColor: "#D4F9E7",
                  lineHeight: 2,
                }}
              >
                {Math.round(backCompare.similarityScore * percentage) || 0}%
              </Tag>
            ) : (
              " "
            )}
            <h4 onClick={showBackModal}>
              <div
                style={{
                  color: "#FCC236",
                  textDecoration: "underline",
                  fontSize: "14px",
                  fontFamily: "Poppins",
                  fontWeight: "normal",
                  cursor: "pointer",
                }}
              >
                {" "}
                {isBackTextVisible ? "View Comparison" : " "}{" "}
              </div>
            </h4>
          </Col>
          <Divider style={{ backgroundColor: "#F1EFEF", marginTop: "15px", marginBottom: "15px" }} />
        </Row>

        <Row>
          <Col span={12}>
            <h4
              style={{
                fontSize: "14px",
                fontFamily: "Poppins",
                fontWeight: "bold",
              }}
            >
              {" "}
              Signature Comparison{" "}
            </h4>
            <Button
              onClick={showSignModal}
              style={{
                width: 132,
                height: 35,
                backgroundColor: "#454545",
                color: "#FFFFFF",
                borderRadius: "5px",
                fontSize: "14px",
                fontFamily: "Poppins",
                fontWeight: "normal",
                marginBottom: "20px",
              }}
            >
              {isSignButtonChecked ? "Check Again" : "Start Check"}
            </Button>
            <SignModal
              appointment={appointment}
              isSignModalVisible={isSignModalVisible}
              setIsSignModalVisible={setIsSignModalVisible}
            />
          </Col>
        </Row>
      </div>
    </div>
  )
}
export default VerificationInfo
