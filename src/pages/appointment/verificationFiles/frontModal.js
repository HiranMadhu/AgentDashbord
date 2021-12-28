import React , { useState , useEffect} from 'react';
import { Col, Row, Progress , Modal} from 'antd';
import { comparefront } from './service/verification.service';

export const FrontModal = ({isFrontModalVisible , setIsFrontModalVisible , appointment , setIsFrontTextVisible},...props) => {

    let percentage = 100
    const [frontCompare, setFrontCompare] = useState([])
    const fronthandleOk = () => {
        setIsFrontModalVisible(false);
        setIsFrontTextVisible(true);
    };

    const handleCancel = () => {
        setIsFrontModalVisible(false);
    };

    useEffect(() => {
        if(appointment){
        const frontdata = {
            ReferenceIDBase: appointment.userInfo.imageInfo.mainImageFrontRef, 
            ReferenceIDUser: appointment.userInfo.imageInfo.mainImageFrontRef, 
            requestHeader: {
              requestId: appointment.responseHeader.requestId,
              timestamp: appointment.responseHeader.timestamp,
              channel: "sca",
            },
          }
            comparefront(frontdata)
            .then((response) => {
              setFrontCompare(response.data)
            })
        }
    },[appointment])

    return(
        <>
        {isFrontModalVisible ? (

                <Modal cancelButtonProps={{ style: { display: 'none' } }} onCancel={handleCancel} title="ID Comparison (Front Side)" style={{fontSize: "16px", fontFamily:"Poppins", fontWeight:"bolder"}} visible={isFrontModalVisible} onOk={fronthandleOk} okText='Done'
                okButtonProps={{ style: { backgroundColor: '#4FBA9C', borderRadius: '5px', color: 'white', width: '100px', height: '32px', marginRight:'10px', marginBottom:"5px" , marginTop:"5px", fontSize: "14px", fontFamily:"Poppins", fontWeight:"normal" } }}>
                    <Row>
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
                            <h4 style={{textAlign:'right' , fontSize: "14px", fontFamily:"Poppins", fontWeight:"bold"}}>
                            {Math.round(frontCompare.similarityScore * percentage) || 0}%</h4>
                        </Col>
                        <Progress strokeColor={`${Math.round(frontCompare.similarityScore * percentage) > 75 ? '#9ADA44': '#EB4141'}`} 
                        percent={Math.round(frontCompare.similarityScore * percentage)} showInfo={false} style={{marginTop:"-12px"}}/>
                    </Row>
                </Modal>
        ):null}
        </>
    )

};