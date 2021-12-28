import React, {useState} from "react"
import {Redirect} from "react-router-dom"
import {Avatar, Badge, Button, Col, Dropdown, Menu, Row, Select} from "antd"
import {CalendarOutlined, DownOutlined, EyeOutlined, LogoutOutlined, PlusOutlined,} from "@ant-design/icons"
import AppLogo from "../../components/logo/drawable-xxhdpi/ADL Logo.png"
import {useSelector} from "react-redux";
// import AgentNameSkeleton from "../../pages/appointment/agentNameSkeleton"

const {Option} = Select

const TopNav = (props) => {
    // const [isLoading, setLoading] = useState(true)
    const {summary} = useSelector(({dashboardSlice}) => dashboardSlice);
    const [userLoggedOut, setUserLoggedOut] = useState(false)

    function onclickLogOut() {
        localStorage.removeItem("token")
        setUserLoggedOut(true)
    }

    const menu = (
        <Menu>
            <Menu.Item>
                <EyeOutlined style={{width: 20}}/>
                <a target="_parent" href="./" style={{fontSize: 13}}>
                    {" "}
                    View user profile{" "}
                </a>
            </Menu.Item>
            <Menu.Item>
                <PlusOutlined style={{width: 20}}/>
                <a target="_parent" href="./" style={{fontSize: 13}}>
                    {" "}
                    Add account{" "}
                </a>
            </Menu.Item>
            <Menu.Item>
                <Button
                    style={{
                        padding: "0px",
                        fontSize: 13,
                        borderColor: "transparent",
                        backgroundColor: "transparent",
                        height: 0,
                        //  pointerEvents: 'none',
                    }}
                    onClick={onclickLogOut}
                    icon={<LogoutOutlined style={{width: 14}}/>}
                >
                    {" "}
                    Logout
                </Button>
            </Menu.Item>
        </Menu>
    )

    return (
        <div>
            {userLoggedOut ? (
                <Redirect to="/"/>
            ) : (
                <Row>
                    <Col span={12}>
                        {" "}
                        <a href="./dashboard">
                            <img
                                src={AppLogo}
                                alt=""
                                style={{
                                    top: "14px",
                                    left: "28px",
                                    width: "90px",
                                    height: "33px",
                                }}
                            />
                        </a>
                    </Col>

                    <Col span={12}>
                        <Row
                            style={{
                                flexDirection: "row",
                                justifyContent: "flex-end",
                            }}
                        >
                            <Col>
                                <Button
                                    type="text"
                                    style={{marginRight: "40px"}}
                                    a
                                    href="./dashboard"
                                >
                                    <CalendarOutlined/>
                                </Button>
                            </Col>

                            <Col>
                                <h5
                                    style={{
                                        marginBottom: "-45px",
                                        marginTop: "-10px",
                                        fontSize: "14px",
                                        marginRight: "5px",
                                        marginLeft: "-20px",
                                        width: "150px",
                                        fontFamily: "Poppins",
                                        fontWeight: "bold"
                                    }}
                                >
                                    {/* {isLoading ? <AgentNameSkeleton></AgentNameSkeleton> :( */}
                                    {summary?.agentSummary.firstName} {summary?.agentSummary.lastName}
                                    {/* )} */}
                                </h5>
                                <h5 style={{marginLeft: "-45px", fontSize: "12px", fontFamily: "Poppins"}}>
                                    {" "}
                                    <Select
                                        defaultValue="Available"
                                        style={{width: "115px", fontSize: "12px"}}
                                        bordered={false}
                                        suffixIcon={<DownOutlined
                                            style={{marginTop: "2px", color: "black", fontSize: "10px"}}/>}
                                    >
                                        <Option value="Available">
                                            <Badge status="success"/> Available{" "}
                                        </Option>
                                        <Option value="Busy">
                                            <Badge status="error"/> Busy{" "}
                                        </Option>
                                        <Option value="Offline">
                                            <Badge status="default"/> Offline{" "}
                                        </Option>
                                    </Select>
                                </h5>
                            </Col>

                            <Col>
                                {" "}
                                <Dropdown overlay={menu} placement="bottomRight" arrow>
                                    <Avatar
                                        style={{color: "#f56a00", backgroundColor: "#fde3cf"}}
                                    >
                                        {" "}
                                        User{" "}
                                    </Avatar>
                                </Dropdown>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            )}
        </div>
    )
}

export default TopNav
