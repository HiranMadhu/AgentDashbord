import React, { useState } from "react"
import { Redirect } from "react-router-dom"
import { Form, Input, Button, Alert } from "antd"
import Sidephoto from "../../components/assets/images/drawable-xxxhdpi/Mask Group 44.png"
import Sidemiddlephoto from "../../components/assets/illustration/drawable-hdpi/Group 1626.png"
import AppLogo from "../../components/logo/drawable-xxhdpi/ADL Logo.png"
import { UserOutlined, LockOutlined } from "@ant-design/icons"
import "./index.css"

function AdminLogin(props) {
  const [userCredentials, setUserCredentials] = useState({})
  const [userLoggedIn, setUserLogedIn] = useState(() =>
    localStorage.getItem("token")
  )
  const [errors, setErrors] = useState(null)
  const [loading, setLoading] = useState(false)

  const onFinish = (values) => {
    setLoading(true)
    setErrors(null)
    setUserCredentials(values)
    setTimeout(function () {
      if (
        userCredentials.username === "admin" &&
        userCredentials.password === "admin@89"
      ) {
        localStorage.setItem("token", JSON.stringify(userCredentials))
        setLoading(false)
        setUserLogedIn(true)
      } else {
        setErrors(" Username or password is incorrect")
        setLoading(false)
      }
    }, 1000)
  }

  return (
    <>
      {userLoggedIn ? (
        <Redirect to="/dashboard" />
      ) : (
        <div>
          <div id="col-1">
            <img
              src={Sidephoto}
              alt=""
              style={{ width: "100%", height: "100vh", overflowX: "hidden" }}
            />
            <img
              src={Sidemiddlephoto}
              alt=""
              style={{
                width: "388.37px",
                height: "265.25px",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          </div>
          <div id="col-2">
            <div class="split right">
              <div class="centered">
                <img
                  src={AppLogo}
                  alt=""
                  style={{
                    height: "60px",
                    width: "180px",
                    marginBottom: "10px",
                  }}
                />

                <p
                  style={{
                    fontSize: "16px",
                    color: "black",
                    fontFamily: "Poppins",
                    fontWeight: "bold",
                  }}
                >
                  Please Login to Continue
                </p>
                <div style={{ textAlign: "center", height: 50 }}>
                  <div style={{ width: 309, margin: "0 auto" }}>
                    {errors ? (
                      <Alert message={errors} type="error" showIcon banner />
                    ) : null}
                  </div>
                </div>

                <Form
                  name="normal_login"
                  className="login-form"
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                >
                  <Form.Item
                    style={{ fontFamily: "Poppins" }}
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Username!",
                      },
                    ]}
                  >
                    <Input
                      style={{
                        height: "40px",
                        width: "309px",
                        borderRadius: "5px",
                        border: "1px solid #E8E8E8",
                        fontSize: "16px",
                        fontFamily: "Poppins",
                      }}
                      disabled={loading}
                      prefix={
                        <UserOutlined
                          className="site-form-item-icon"
                          style={{ color: "#E8E8E8" }}
                        />
                      }
                      placeholder="Username"
                    />
                  </Form.Item>
                  <Form.Item
                    style={{ fontFamily: "Poppins" }}
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Password!",
                      },
                    ]}
                  >
                    <Input
                      disabled={loading}
                      style={{
                        height: "40px",
                        width: "309px",
                        borderRadius: "5px",
                        border: "1px solid #E8E8E8",
                        fontSize: "16px",
                        fontFamily: "Poppins",
                      }}
                      prefix={
                        <LockOutlined
                          className="site-form-item-icon"
                          style={{ color: "#E8E8E8" }}
                        />
                      }
                      type="password"
                      placeholder="Password"
                    />
                  </Form.Item>
                  <Form.Item>
                    <Button
                      style={{
                        width: "309px",
                        height: "40px",
                        backgroundColor: "#4FBA9C",
                        borderRadius: "5px",
                        alignContent: "center",
                        alignItems: "center",
                        fontSize: "16px",
                        fontFamily: "Poppins",
                      }}
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                      loading={loading}
                    >
                      LOG IN
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default AdminLogin
