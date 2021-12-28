import { Skeleton, Row, Col } from 'antd';

const AppointmentSkeleton = () => {
    return (
        <Row style={{textAlign:"center"}}>
            <Col span={6}>
                < Skeleton.Button  active style={{ width: 320 , height: 102 , marginTop: '20px' , marginBottom: '24px'  }}/>
            </Col>

            <Col span={6}>
            < Skeleton.Button  active style={{ width: 320 , height: 102 , marginTop: '20px' , marginBottom: '24px' }}/>
            </Col>
            
            <Col span={6}>
            < Skeleton.Button  active style={{ width: 320 , height: 102 , marginTop: '20px' , marginBottom: '24px' }}/>
            </Col>

            <Col span={6}>
            < Skeleton.Button  active style={{ width: 320 , height: 102 , marginTop: '20px' , marginBottom: '24px' }}/>
            </Col>
        </Row>

    )
}

export default AppointmentSkeleton