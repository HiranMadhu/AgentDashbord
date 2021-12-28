import {Col, Layout, Row} from "antd"
import TopNav from "../../components/topNav.js"
import TopCardView from "../../components/widgets/topCardView.js"
import AppointmentView from "./appointment-view.jsx"
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {fetchSummary} from "./redux/dashboard-action";

const {Content, Header} = Layout

const Dashboard = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchSummary({
            requestHeader: {
                requestId: "e54cb678-b7b2-11ca-b3de-0242ac13004",
                timestamp: "2021-09-24T14:00:00.Z",
                channel: "sca",
                action: "PROFILE",
            },
            agentId: 1,
        }));
    },[]);

    return (
        <Layout className="layout">
            <Header style={{backgroundColor: "#FFFFFF"}}>
                <TopNav></TopNav>
            </Header>
            <TopCardView/>
            <Content style={{paddingLeft: "50px", paddingRight: "50px", paddingBottom: "55px", position: "relative"}}>
                <Row gutter={24}>
                    <Col>
                        <AppointmentView/>
                    </Col>
                </Row>
            </Content>
        </Layout>
    )
}

export default Dashboard
