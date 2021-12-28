import React , { useState , useEffect} from 'react';
import { Col, Row, Progress , Modal } from 'antd';
import { compareface } from './service/verification.service';

export const FaceModal = ({isFaceModalVisible , setIsFaceModalVisible , appointment , setIsFaceTextVisible , setState},...props) => {

    let percentage = 100
    const [faceCompare, setFaceCompare] = useState([])
    const facehandleOk = () => {
        setIsFaceModalVisible(false);
        setIsFaceTextVisible(true);
    };

    const handleCancel = () => {
        setIsFaceModalVisible(false);
    };

    useEffect(()=>{
        if(appointment){
        const facedata = {
            clientImageReference: appointment.userInfo.imageInfo.videoSelfieRef,  
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
        }
    },[appointment])

    return(
        <>
        {isFaceModalVisible ? (

                <Modal cancelButtonProps={{ style: { display: 'none' } }} onCancel={handleCancel} title="Face Comparison" style={{fontSize: "16px", fontFamily:"Poppins", fontWeight:"bolder"}} visible={isFaceModalVisible} onOk={facehandleOk} okText='Done' 
                okButtonProps={{ style: { backgroundColor: '#4FBA9C', borderRadius: '5px', color: 'white', width: '100px', height: '32px' , marginRight:'10px', marginTop:"5px", marginBottom:"5px" , fontSize: "14px", fontFamily:"Poppins", fontWeight:"normal"} }}>
                    <Row>
                        <Col span={12}>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <img width={'120px'} height={'160px'} style={{marginRight:"40px"}} src={
                                    "http://13.228.45.95:9000/get-image_web?reference=" +
                                    // appointment.userInfo.imageInfo.selfieImageRef +
                                    appointment.userInfo.imageInfo.videoSelfieRef +
                                    "&" +
                                    "requestId" +
                                    "=" +
                                    appointment.responseHeader.requestId
                            } alt="face" />
                            </div>
                            <br/>
                            <h4 style={{textAlign:'left' , fontSize: "14px", fontFamily:"Poppins", fontWeight:"bold"}}> Similarity Score </h4>
                        </Col>
                        <Col span={12}>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img width={'220px'} height={'160px'} src={
                                    "http://13.228.45.95:9000/get-image_web?reference=" +
                                    appointment.userInfo.imageInfo.mainImageFrontRef +
                                    "&" +
                                    "requestId" +
                                    "=" +
                                    appointment.responseHeader.requestId
                            } alt="face" />
                            </div>
                            <br/>
                            <h4 style={{ textAlign: 'right' , fontSize: "14px", fontFamily:"Poppins", fontWeight:"bold"}}>
                                {/* <Skeleton/> */}
                                {Math.round(faceCompare.similarityScore * percentage) || 0}%</h4>
                        </Col>
                        <Progress strokeColor={`${Math.round(faceCompare.similarityScore * percentage) > 75 ? '#9ADA44': '#EB4141'}`} 
                        percent={Math.round(faceCompare.similarityScore * percentage)} showInfo={false} style={{marginTop:"-12px"}}/>
                    </Row>
                </Modal>

        ): null}
        </>
    )
};