import { Skeleton, Row, Col } from 'antd';

const AgentNameSkeleton = () => {
    return (
        <Row style={{ textAlign: "center" }}>
            <Col span={4}>
                <Skeleton.Input style={{
                    marginBottom: "-45px",
                    marginTop: "25px",
                    marginRight: "5px",
                    marginLeft: "-20px",
                    height: '15px',
                    width: "150px",
                }} active />
            </Col>
        </Row>

    )
}

export default AgentNameSkeleton