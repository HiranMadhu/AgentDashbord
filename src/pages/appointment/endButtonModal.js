import React , {useState , useEffect} from 'react';
import { Modal, Input, Row, Col, Button, Alert } from 'antd';
import { compareface , comparefront , compareback } from './verificationFiles/service/verification.service';
import {useSelector} from "react-redux";
import {appointmentStatusChange} from "./service/appoinment.service";
export const EndButtonModal = ({isModalVisible, setIsModalVisible , appointment}, ...props) => {

    const { personalInfo , contactInfo , kycInfo ,appointmentId} = useSelector(({ appointmentSlice }) => appointmentSlice);
    let percentage = 100
    const [faceCompare, setFaceCompare] = useState([])
    const [frontCompare, setFrontCompare] = useState([])
    const [backCompare, setBackCompare] = useState([])
    const { TextArea } = Input;
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };

    const handleFinalStatus = (status) => {
      const body = {
        agentId: 1,
        appointmentId: appointmentId,
        action: status,
        statusInfo: {
          personalInformation: "VERIFIED",
          contactInformation: "VERIFIED",
          kycInformation: "VERIFIED",
          location: "Colombo",
          faceComparison: 81.2,
          idComparison: 82.2,
          signatureComparison: 85.2,
          remark: "remarks",
        },
        requestHeader: {
          requestId: "e54eb678-b7b2-11ea-b3de-0242ac130004",
          timestamp: "2019-12-04T14:00:00Z",
          channel: "sca",
        },
      };

      appointmentStatusChange(body).then((res) => {
        setIsModalVisible(false);
      });
    };

    useEffect(()=>{
      if(appointment){
      const facedata = {
          clientImageReference: appointment.userInfo.imageInfo.selfieImageRef,  
          baseImageReference: appointment.userInfo.imageInfo.mainImageFrontRef, 
          requestHeader: {
            requestId: appointment.responseHeader.requestId,
            timestamp: appointment.responseHeader.timestamp,
            channel: "sca",
          },
        }
          compareface(facedata)          
          .then((response) => {
          setFaceCompare(response.data)
          })

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
  },[appointment])

    return(
        <>
        {isModalVisible ? (

        <Modal title="Final Status" style={{fontSize: "16px", fontFamily:"Poppins"}} visible={isModalVisible} onCancel={handleCancel} width='642px' height='559px' borderRadius='10px'
            footer={[
            <Button onClick={() => handleFinalStatus("INCOMPLETE")} key="cancel" style= {{ backgroundColor: '#4FBA9C', borderRadius: '5px', color: 'white', width: '128px', height: '32px' , marginRight:'135px' , fontFamily:"Poppins" , fontSize:"14px" , marginTop:"10px" }} href='./dashboard' >Incomplete</Button>,
            <Button onClick={() => handleFinalStatus("REJECT")} key="back" style={{ backgroundColor: '#FF442F', borderRadius: '5px', color: 'white', width: '128px', height: '32px' , fontFamily:"Poppins" , fontSize:"14px" , marginBottom:'10px'}} href='./dashboard'>Reject</Button>,
            <Button onClick={() => handleFinalStatus("ACCEPT")} key="submit" style= {{ backgroundColor: '#4FBA9C', borderRadius: '5px', color: 'white', width: '185px', height: '32px', marginRight: '8px' , fontFamily:"Poppins" , fontSize:"14px" }} href='./dashboard'>Mark as Successful</Button>
            ]}
            >
            <Row>
              <Col span={18} style={{fontWeight:"normal" , fontFamily:'Poppins'}}>
                <p>Personal Information</p>
                <p>Contact Information</p>
                <p>KYC Information</p>
                <p>Location</p>
                <p>Face Comparison</p>
                <p>ID Comparison (Front Side)</p>
                <p>ID Comparison (Back Side)</p>
                <br/>
                <p>Add Remark</p>
              </Col>
              
              <Col span={6} style={{ textAlign: 'right', fontWeight:"bold" , fontFamily:"Poppins"}}>
                <p>{personalInfo.filter((val) => val.confirmed === false).length === 0 ? 'Verified' : 'Non-Verified'}</p>
                <p>{contactInfo.filter((val) => val.confirmed === false).length === 0 ? 'Verified' : 'Non-Verified'}</p>
                <p>{kycInfo.filter((val) => val.confirmed === false).length === 0 ? 'Verified' : 'Non-Verified'}</p>
                <p>{appointment.userInfo.addressInfo.addressList[0].city}</p>
                <p>{Math.round(faceCompare.similarityScore * percentage) || 0}%</p>
                <p>{Math.round(frontCompare.similarityScore * percentage) || 0}%</p>
                <p>{Math.round(backCompare.similarityScore * percentage) || 0}%</p>
              </Col>
              <TextArea rows={4} style={{ borderColor: '#F1EFEF', backgroundColor: '#F1EFEF', height: '97px', borderRadius: '5px' , resize:"none"}} />
            </Row>
          </Modal>
        ): null}
          </>
    )
};
