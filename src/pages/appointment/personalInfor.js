import React, { useState } from "react"
import { Table, Modal } from "antd"
import { IdModel } from "./idModel"
import {
  IBsCheckCircleFill,
  IBsCircle,
  IAiOutlineEdit,
  IAiOutlineEye,
} from "./../../components/icons"
import PersonalInfoForm from "./personalInfoForm"
import {useDispatch, useSelector} from "react-redux";
import {updatePersonalInfo, updatePersonalInfoConfirm} from "./redux/appointment-action";

const TableView = ({ appointment, getCurrentPersonalInfo }, ...props) => {
  const dispatch = useDispatch();
  const { personalInfo } = useSelector(({ appointmentSlice }) => appointmentSlice);
  const [isIdModalVisible, setIsIdModalVisible] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [currentKey, setCurrentKey] = useState(1)

  const showModal = (key) => {
    setIsModalVisible(true)
    setCurrentKey(key)
  }
  const handleOk = () => {
    setIsModalVisible(false)
  }
  const showIdModel = () => {
    setIsIdModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onclickConfirm = (key, confirmation) => {
    dispatch(updatePersonalInfoConfirm({
      key: key,
      confirmation: confirmation
    }))

  }

  const onChange = (value) => {
    dispatch(updatePersonalInfo({
      value: value,
      edited: true,
      confirmed: false,
      key: currentKey
    }))
  }

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
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
      width: "30%",
      render: (text, record) => (
        <div>
          {record.edited ? (
            <div
              style={{
                color: "#FCC236",
                fontSize: "12px",
                fontFamily: "Poppins",
                fontWeight: "normal",
              }}
            >
              Edited
            </div>
          ) : null}
        </div>
      ),
    },
    {
      title: "NIC Number",
      key: "action",
      render: (text, record) => (
        <div>
          {record.key === 1 ? (
            <a
              href="javasript:void(0)"
              onClick={() => {
                showIdModel()
              }}
            >
              <IAiOutlineEye />
            </a>
          ) : null}
        </div>
      ),
      width: "5%",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <a
          href="javasript:void(0)"
          onClick={() => {
            showModal(record.key)
          }}
        >
          <IAiOutlineEdit />
        </a>
      ),
      width: "5%",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <>
          {record.confirmed ? (
            <a
              href="javasript:void(0)"
              onClick={() => {
                onclickConfirm(record.key, false)
              }}
            >
              <IBsCheckCircleFill />
            </a>
          ) : (
            <a
              href="javasript:void(0)"
              onClick={() => {
                onclickConfirm(record.key, true)
                getCurrentPersonalInfo(personalInfo)
              }}
            >
              <IBsCircle />
            </a>
          )}
        </>
      ),
      width: "5%",
    },
  ]

  return (
    <div>
      <Table
        size="small"
        columns={columns}
        dataSource={personalInfo}
        pagination={false}
        showHeader={false}
        bordered={false}
        style={{ fontFamily: "Poppins", fontSize: "12px"  }}
      />

      <Modal
        cancelButtonProps={{ style: { display: "none" } }}
        onCancel={handleCancel}
        okButtonProps={{
          style: {
            backgroundColor: "#4FBA9C",
            borderRadius: "5px",
            color: "white",
            width: "100px",
            height: "32px",
            fontSize: "14px",
            fontFamily: "Poppins",
          },
        }}
        title=""
        visible={isModalVisible}
        okText="Save"
        onOk={handleOk}
      >
        <PersonalInfoForm
          inputTtile={personalInfo[currentKey - 1].title}
          showItem={currentKey}
          formData={appointment.userInfo}
          onChange={onChange}
        />
      </Modal>
      <IdModel
        appointment={appointment}
        isIdModalVisible={isIdModalVisible}
        setIsIdModalVisible={setIsIdModalVisible}
      />
    </div>
  )
}

export default TableView
