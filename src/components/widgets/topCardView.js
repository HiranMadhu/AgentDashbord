import React, {useEffect, useState} from "react"
import {Col, Layout, Row} from "antd"
import CardNumbers from "./cardNumbers"
import {useSelector} from "react-redux";

const {Content} = Layout

const TopCardView = () => {
    const [appoinmentsSummary, setAppoinmentsSummary] = useState([]);
    const {summary} = useSelector(({dashboardSlice}) => dashboardSlice);

    useEffect(() => {
        if (summary) {
            setAppoinmentsSummary([
                {
                    name: "Completed Appointments",
                    number: summary.agentSummary.completedAppointment,
                    // number: summary.agentSummary.incompleteAppointment,
                    color: "#002C88",
                },
                {
                    name: "Successful Appointments",
                    number: summary.agentSummary.successAppointment,
                    // number: summary.agentSummary.completedAppointment,
                    color: "#20846A",
                },
                {
                    name: "Incomplete Appointments",
                    number: summary.agentSummary.incompleteAppointment,
                    // number: summary.agentSummary.successAppointment,
                    color: "#FCC236",
                },
                {
                    name: "Rejected Appointments",
                    number: summary.agentSummary.rejectAppointment,
                    color: "#E5363C",
                }]);
        }
    }, [summary]);

    return (
        <Content style={{padding: "0 50px"}}>
            <Row gutter={{xs: 1, sm: 24, md: 24, lg: 32}}>
                {appoinmentsSummary.map((item) => (
                    <Col
                        xs={24}
                        md={12}
                        xl={6}
                        style={{
                            paddingTop: "10px",
                            paddingBottom: "10px",
                            fontFamily: "Poppins Medium !important",
                        }}
                        span={6}
                    >
                        <CardNumbers
                            backgroundColor={item.color}
                            cardText={item.name}
                            cardNumber={item.number}
                        />
                    </Col>
                ))}
            </Row>
        </Content>
    )
}
export default TopCardView
