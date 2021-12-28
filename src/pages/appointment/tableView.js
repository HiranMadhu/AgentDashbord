import React, { useState } from "react"
import { Table, Typography, Form, Input, Popover, Button } from "antd"
import CheckBox from "../../components/checkBox"
import Edit from "../../components/assets/icons/PNG/drawable-xxhdpi/Group 1500.png"
import ContactInfoForm from "./contactInfoForm"

const { Title } = Typography

const TableView = ({ appointment }, ...props) => {
  const [tableUpdated, setTableUpdated] = useState(false)
  const [currentPersonalInfo, setCurrentPersonalInfo] = useState({
    nicNo: {
      edited: false,
      value: appointment.userInfo.nicNo,
      confirmed: false,
    },
    title: {
      edited: false,
      value: appointment.userInfo.title,
      confirmed: false,
    },
  })

  function onChange(values) {
    setTableUpdated(false)
    var currentData = currentPersonalInfo
    console.log(currentData[Object.keys(values)].value)
    currentData[Object.keys(values)].value = Object.values(values)
    currentData[Object.keys(values)].edited = true
    setCurrentPersonalInfo(currentData)
    setTableUpdated(true)
  }

  const personalInfo = [
    {
      key: "1",
      name: "NIC Number",
      value: appointment.userInfo.nicNo,
      edited: currentPersonalInfo.nicNo.edited,
      confirmed: currentPersonalInfo.nicNo.confirmed,
    },
    {
      key: "2",
      name: "Title",
      value: appointment.userInfo.title,
      edited: currentPersonalInfo.title.edited,
      confirmed: currentPersonalInfo.title.confirmed,
    },
    {
      key: "3",
      name: "Surname",
      value: "Dissanayake Mudiyanselage",
    },
    {
      key: "4",
      name: "Other Name",
      value: "Aruna Prasanna",
    },
    {
      key: "5",
      name: "Gender",
      value: "Male",
    },
    {
      key: "6",
      name: "DOB",
      value: "13 July 1990",
    },
    {
      key: "7",
      name: "Marital Status",
      value: "Single",
    },
  ]

  const content = (
    <div
      style={{
        width: "266px",
        height: "122px",
        backgroundColor: "#FFFFFF",
        borderRadius: "4px",
      }}
    >
      <Title level={5}>NIC Number</Title>
      <p>
        <Form.Item>
          <Input
            style={{
              backgroundColor: "#F1EFEF",
              height: "32px",
              align: "center",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            placeholder="NIC Number"
          />
        </Form.Item>
      </p>
      <Button
        type="primary"
        style={{
          backgroundColor: "#FFFFFF",
          border: "1px solid",
          borderColor: "#4FBA9CC",
          color: "#4FBA9C",
          fontSize: "12px",
          width: "76px",
          height: "32px",
          borderRadius: "5px",
          float: "right",
        }}
      >
        Save
      </Button>
    </div>
  )

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "20%",
    },
    {
      title: "Value",
      dataIndex: "value",
      key: "value",
      width: "40%",
    },
    {
      title: "Edited",
      dataIndex: "edited",
      key: "edited",
      width: "20%",
      render: (text, record) => (
        <div>{record.edited ? <div>Edited</div> : null}</div>
      ),
    },

    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Popover
          content={
            <ContactInfoForm
              showItem={record.key}
              formData={appointment.userInfo}
              onChange={onChange}
            />
          }
          trigger="click"
          style={{
            width: "266px",
            height: "122px",
            border: "1px solid #E8E8E8",
          }}
        >
          <img src={Edit} style={{ width: "16px", height: "16px" }} alt=""/>
        </Popover>
      ),
      width: "10%",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => <CheckBox id={record.key}></CheckBox>,
      width: "10%",
    },
  ]

  return (
    <div>
      {tableUpdated ? (
        <Table
          size="small"
          columns={columns}
          dataSource={personalInfo}
          pagination={false}
        />
      ) : (
        <Table
          size="small"
          columns={columns}
          dataSource={personalInfo}
          pagination={false}
        />
      )}
    </div>
  )
}

export default TableView
