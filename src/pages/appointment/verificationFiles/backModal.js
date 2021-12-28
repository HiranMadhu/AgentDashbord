import React , { useState , useEffect} from 'react';
import { Col, Row, Progress, Modal } from 'antd';
import { compareback } from './service/verification.service';

export const BackModal = ({ isBackModalVisible, setIsBackModalVisible , appointment , setIsBackTextVisible},...props) => {

    let percentage = 100
    const [backCompare, setBackCompare] = useState([])
    const backhandleOk = () => {
        setIsBackModalVisible(false);
        setIsBackTextVisible(true)
    };

    const handleCancel = () => {
        setIsBackModalVisible(false);
    };

    useEffect(()=>{
        if(appointment){
            const backdata = {
                ReferenceIDBase: appointment.userInfo.imageInfo.mainImageBackRef,  
                ReferenceIDUser: appointment.userInfo.imageInfo.mainImageBackRef,  
                requestHeader: {
                  requestId: appointment.responseHeader.requestId,
                  timestamp: appointment.responseHeader.timestamp,
                  channel: "sca",
                },
              }
            compareback(backdata)
            .then((response) => {
            setBackCompare(response.data)
            })
        }
    
    },[appointment])
    
    return (
        <>
            {isBackModalVisible ? (

                <Modal cancelButtonProps={{ style: { display: 'none' } }} onCancel={handleCancel} title="ID Comparison (Back Side)" style={{fontSize: "16px", fontFamily:"Poppins", fontWeight:"bolder"}} visible={isBackModalVisible} onOk={backhandleOk} okText='Done'
                okButtonProps={{ style: { backgroundColor: '#4FBA9C', borderRadius: '5px', color: 'white', width: '100px', height: '32px' , marginRight:'10px', marginBottom:"5px" , marginTop:"5px", fontSize: "14px", fontFamily:"Poppins", fontWeight:"normal"} }}>
                    <Row>
                        <Col span={12}>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img width={'220px'} height={'160px'} src={
                                    "http://13.228.45.95:9000/get-image_web?reference=" +
                                    appointment.userInfo.imageInfo.mainImageBackRef +
                                    "&" +
                                    "requestId" +
                                    "=" +
                                    appointment.responseHeader.requestId
                            } alt="face" />
                            </div>
                            <br/>
                            <h4 style={{textAlign:'left', fontSize: "14px", fontFamily:"Poppins", fontWeight:"bold"}}> Similarity Score </h4>
                        </Col>
                        <Col span={12}>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img width={'220px'} height={'160px'} src={
                                    "http://13.228.45.95:9000/get-image_web?reference=" +
                                    appointment.userInfo.imageInfo.mainImageBackRef +
                                    "&" +
                                    "requestId" +
                                    "=" +
                                    appointment.responseHeader.requestId
                            } alt="face" />
                            </div>
                            <br/>
                            <h4 style={{textAlign:'right' , fontSize: "14px", fontFamily:"Poppins", fontWeight:"bold"}}>
                            {Math.round(backCompare.similarityScore * percentage) || 0}%</h4>
                        </Col>
                        <Progress strokeColor={`${Math.round(backCompare.similarityScore * percentage) > 75 ? '#9ADA44': '#EB4141'}`} 
                        percent={Math.round(backCompare.similarityScore * percentage)} showInfo={false} style={{marginTop:"-12px"}}/>
                    </Row>
                </Modal>

            ) : null}
        </>
    )
};