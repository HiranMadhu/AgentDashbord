import React, { useState, useEffect } from "react";
import { Layout, Row, Col, Button, Card, Steps, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import axios from "axios";
import TopNav from "../../components/topNav.js/index.js";
import PersonalInfor from "./personalInfor";
import ContactInfor from "./contactInfor.js";
import KycInformation from "./kycInformation.js";
import VerificationInfo from "./verificationFiles/verificationInfo.js";
import "./index.css";
import PersonalPic from "../../components/assets/icons/PNG/drawable-xxhdpi/Group 1974.png";
import ContactPic from "../../components/assets/icons/PNG/drawable-xxhdpi/Group 1975.png";
import KYCPic from "../../components/assets/icons/PNG/drawable-xxhdpi/Group 1977.png";
import Verification from "../../components/assets/icons/PNG/drawable-xxhdpi/Group 1976.png";
import LocationLogo from "../../components/assets/icons/PNG/drawable-xxhdpi/Group 1979.png";
import { EndButtonModal } from "./endButtonModal.js";
import { useDispatch, useSelector } from "react-redux";
import { setPersonalInfo } from "./redux/appointment-action";
import AppointmentSkeleton from "./appointmentSkeleton.js";
const { Header } = Layout;
const { Step } = Steps;

const Appointment = (props) => {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(true);
  const [appointment, setAppoinmet] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [current, setCurrent] = useState(0);
  const [currentPersonalInfo, setCurrentPersonalInfo] = useState([]);
  const [currentContactInfo, setCurrentContactInfo] = useState([]);
  const [currentKycInfo, setCurrentKycInfo] = useState([]);

  const windowUrl = window.location.search;
  const urlParams = new URLSearchParams(windowUrl);
  const token = urlParams.get("userToken");
  const id = urlParams.get("userId");
  const appointmentId = urlParams.get("appointmentId");
  const { personalInfo, personalId, fullInfo } = useSelector(
    ({ appointmentSlice }) => appointmentSlice
  );

  // const videocallSrc = "http://localhost:5000/waitingRoom/aa"
  const videocallSrc = "https://videokyctemp.el.r.appspot.com/waitingroom/test";

  const showModal = () => {
    setIsModalVisible((prev) => !prev);
  };

  useEffect(() => {
    if (personalId !== id) {
      const article = {
        userId: id,
        appointmentId:appointmentId,
        userToken: token,
        requestHeader: {
          requestId: "e54eb678-b7b2-11ea-b3de-0242ac130004",
          timestamp: "2019-12-04T14:00:00Z",
          channel: "sca",
          deviceId: "wedfd",
          deviceType: "android",
        },
      };
      dispatch(setPersonalInfo(article));
      axios
        .post(
          process.env.REACT_APP_API_ENDPOINT +
            `/adl/et/telco/dte/ekycvkyc/api/v1.0/usermgt/query/customer`,
          article
          //'http://localhost:3012/CustomerDetails',article
        )
        .then((response) => {
          setAppoinmet(response.data);
          setLoading(false);
        });
    } else {
      setAppoinmet(fullInfo);
      setLoading(false);
    }
  }, []);

  function submitAppointmentInfo() {
    var sendData = {
      userId: id,
      userToken: token,
      userInfo: {
        detectedDocument: appointment.userInfo.detectedDocument,
        imageInfo: {
          mainImageFrontRef: appointment.userInfo.imageInfo.mainImageFrontRef,
          mainImageBackRef: appointment.userInfo.imageInfo.mainImageBackRef,
          selfieImageRef: appointment.userInfo.imageInfo.selfieImageRef,
          proofImageRef: appointment.userInfo.imageInfo.proofImageRef,
          videoSelfieRef: appointment.userInfo.imageInfo.videoSelfieRef,
          videoIdRef: appointment.userInfo.imageInfo.videoIdRef,
          videoSignatureRef: appointment.userInfo.imageInfo.videoSignatureRef,
        },
        addressInfo: {
          sameAsPermanent: currentContactInfo[4]?.value,
          addressList: [
            {
              addressLine1: currentContactInfo[0]?.value,
              addressLine2: currentContactInfo[1]?.value,
              city: currentContactInfo[2]?.value,
              district: currentContactInfo[3]?.value,
              type: "PERMANENT",
            },
            {
              addressLine1: currentContactInfo[0]?.value,
              addressLine2: currentContactInfo[1]?.value,
              city: currentContactInfo[2]?.value,
              district: currentContactInfo[3]?.value,
              type: "CURRENT",
            },
          ],
        },
        firstName: currentPersonalInfo[2]?.value,
        lastName: currentPersonalInfo[3]?.value,
        gender: currentPersonalInfo[4]?.value,
        nicNo: currentPersonalInfo[0]?.value,
        title: currentPersonalInfo[1]?.value,
        birthDay: currentPersonalInfo[5]?.value,
        maritalStatus: currentPersonalInfo[6]?.value,
        residence: currentContactInfo[5]?.value,
        mobile: currentContactInfo[6]?.value,
        office: currentContactInfo[7]?.value,
        email: currentContactInfo[8]?.value,
      },
      bankQuestionInfo: {
        purposeOfOpeningTheAccount: currentKycInfo[0]?.value,
        expectedModeOfTransaction: currentKycInfo[2]?.value,
        sourceOfCreditsToAC: currentKycInfo[1]?.value,
        wealthGeneratedFrom: currentKycInfo[3]?.value,
        politicallyExposedPerson: currentKycInfo[4]?.value,
      },
      requestHeader: {
        requestId: "e54eb678-b7b2-11ea-b3de-0242ac130004",
        timestamp: "2019-12-04T14:00:00Z",
        channel: "sca",
        deviceId: "wedfd",
        deviceType: "android",
      },
    };

    axios
      .post(
        `http://192.168.0.108:30509/adl/et/telco/dte/ekycvkyc/api/v1.0/usermgt/update/customer`,
        sendData
      )
      .then((response) => {});
  }

  const steps = [
    {
      title: (
        <div
          style={{
            fontFamily: "Poppins",
            fontWeight: "bold",
            fontSize: "16px",
          }}
        >
          <img
            style={{
              height: "20px",
              width: "20px",
              marginTop: "-3px",
              marginRight: "5px",
            }}
            src={PersonalPic}
            alt={PersonalPic}
          />
          Personal Information
        </div>
      ),

      content: (
        <PersonalInfor
          appointment={appointment}
          getCurrentPersonalInfo={setCurrentPersonalInfo}
        />
      ),
    },
    {
      title: (
        <div
          style={{
            fontFamily: "Poppins",
            fontWeight: "bold",
            fontSize: "16px",
          }}
        >
          <img
            style={{
              height: "20px",
              width: "20px",
              marginTop: "-3px",
              marginRight: "5px",
            }}
            src={ContactPic}
            alt={ContactPic}
          />
          Contact Information
        </div>
      ),

      content: (
        <ContactInfor
          appointment={appointment}
          getCurrentContactInfo={setCurrentContactInfo}
        />
      ),
    },
    {
      title: (
        <div
          style={{
            fontFamily: "Poppins",
            fontWeight: "bold",
            fontSize: "16px",
          }}
        >
          <img
            style={{
              height: "20px",
              width: "20px",
              marginTop: "-3px",
              marginRight: "5px",
            }}
            src={KYCPic}
            alt={KYCPic}
          />
          KYC Information
        </div>
      ),

      content: (
        <KycInformation
          appointment={appointment}
          getKycInformation={setCurrentKycInfo}
        />
      ),
    },
    {
      title: (
        <div
          style={{
            fontFamily: "Poppins",
            fontWeight: "bold",
            fontSize: "16px",
          }}
        >
          <img
            style={{
              height: "20px",
              width: "20px",
              marginTop: "-3px",
              marginRight: "5px",
            }}
            src={Verification}
            alt={Verification}
          />
          Verification
        </div>
      ),

      content: <VerificationInfo appointment={appointment} />,
    },
  ];

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <Layout className="layout">
      <Header style={{ backgroundColor: "#FFFFFF" }}>
        <TopNav></TopNav>
      </Header>
      {isLoading ? (
        <AppointmentSkeleton></AppointmentSkeleton>
      ) : (
        <Row>
          <Col span={12}>
            <iframe
              title="webRTC"
              src={videocallSrc}
              allow="camera; microphone"
              style={{ width: "100%", height: "100%", border: "0px" }}
              id="webRTC"
            ></iframe>
          </Col>
          <Col span={12}>
            <Card
              style={{
                backgroundColor: "#202020",
                border: "0px",
                height: "88px",
                color: "#FFFFFF",
                overflowX: "inherit",
              }}
            >
              <Row>
                <Col span={16}>
                  <Row>
                    <Col style={{ paddingRight: "10px" }}>
                      <Avatar size="large" icon={<UserOutlined />} />
                    </Col>
                    <Col span={17}>
                      <h4
                        style={{
                          align: "top",
                          color: "#FFFFFF",
                          fontFamily: "Poppins",
                          fontWeight: "normal",
                        }}
                      >
                        {appointment?.userInfo.firstName}{" "}
                        {appointment?.userInfo.lastName}
                      </h4>
                      <h5
                        style={{
                          align: "top",
                          color: "#FFFFFF",
                          marginLeft: "-5px",
                          fontFamily: "Poppins",
                          fontWeight: "normal",
                          marginTop: "-8px",
                        }}
                      >
                        <img
                          style={{
                            width: "25px",
                            height: "25px",
                            marginTop: "-5px",
                            marginRight: "5px",
                          }}
                          src={LocationLogo}
                          alt={LocationLogo}
                        />
                        {appointment?.userInfo.addressInfo.addressList[0].city},
                        Srilanka
                      </h5>
                    </Col>
                  </Row>
                </Col>
                <Col span={8}>
                  <Col>
                    <Button
                      onClick={function (event) {
                        submitAppointmentInfo();
                        showModal();
                      }}
                      key="1"
                      type="primary"
                      style={{
                        backgroundColor: "#4FBA9C",
                        border: "0px",
                        borderRadius: "5px",
                        width: "119px",
                        height: "32px",
                        float: "right",
                        fontFamily: "Poppins",
                        fontWeight: "normal",
                      }}
                    >
                      Complete
                    </Button>

                    <EndButtonModal
                      isModalVisible={isModalVisible}
                      setIsModalVisible={setIsModalVisible}
                      appointment={appointment}
                    />
                  </Col>
                </Col>
              </Row>
            </Card>

            <Card
              title={steps[current].title}
              extra={
                <div>
                  <Steps current={current} onChange={(cu) => setCurrent(cu)}>
                    {steps.map((item) => (
                      <Step />
                    ))}
                  </Steps>
                </div>
              }
              actions={[
                <div className="steps-action">
                  <Row>
                    <Col span={12}>
                      <div className="text-left">
                        {current > 0 && (
                          <Button
                            style={{
                              margin: "0 18px",
                              borderRadius: 5,
                              border: "1px solid #4FBA9C",
                              color: "#4FBA9C",
                              width: "100px",
                              height: "32px",
                              fontFamily: "Poppins",
                              fontWeight: "normal",
                              fontSize: "14px",
                              marginLeft: "25px",
                            }}
                            onClick={() => prev()}
                          >
                            Back
                          </Button>
                        )}
                      </div>
                    </Col>
                    <Col span={12}>
                      <div className="text-right">
                        {current < steps.length - 1 && (
                          <Button
                            type="primary"
                            style={{
                              margin: "0 18px",
                              width: "100px",
                              height: "32px",
                              fontFamily: "Poppins",
                              fontWeight: "normal",
                              fontSize: "14px",
                              marginRight: "25px",
                              borderRadius: "5px",
                              backgroundColor: "#4FBA9C",
                              border: "none",
                              color: "#FFFFFF",
                            }}
                            onClick={() => next()}
                          >
                            Next
                          </Button>
                        )}
                      </div>
                    </Col>
                  </Row>
                </div>,
              ]}
            >
              {appointment ? steps[current].content : null}
            </Card>
          </Col>
        </Row>
      )}
    </Layout>
  );
};

export default Appointment;
