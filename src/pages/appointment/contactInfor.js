import React, { useState } from "react"
import { Table, Modal } from "antd"
import {
  IBsCheckCircleFill,
  IBsCircle,
  IAiOutlineEdit,
} from "./../../components/icons"
import ContactInforForms from "./contactInforForms"
import {useDispatch, useSelector} from "react-redux";
import { updateContactInfo , updateContactInfoConfirm } from "./redux/appointment-action"

const ContactInfor = ({ appointment, getCurrentContactInfo }, ...props) => {
  const dispatch = useDispatch();
  const { contactInfo } = useSelector(({ appointmentSlice }) => appointmentSlice);
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [currentKey, setCurrentKey] = useState(1)

  const showModal = (key) => {
    setIsModalVisible(true)
    setCurrentKey(key)
  }
  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false);
};

  const onclickConfirm = (key, confirmation) => {
    dispatch(updateContactInfoConfirm({
      key: key,
      confirmation: confirmation
    }))
  }

  const onChange = (value) => {
    dispatch(updateContactInfo({
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
      width: "30%",
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
      title: "Action",
      key: "action",
      render: (text, record) => (
        <a
          href="javasript:void(0)"
          onClick={() => {
            console.log(record.key)
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
                getCurrentContactInfo(contactInfo)
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
      <h4
        style={{ fontFamily: "Poppins", fontSize: "14px", fontWeight: "600", paddingLeft:"8px" }}
      >
        Permanent Resident Address
      </h4>
      <Table
        size="small"
        columns={columns}
        dataSource={contactInfo.slice(0, 4)}
        pagination={false}
        showHeader={false}
        style={{ fontFamily: "Poppins", fontSize: "12px"}}
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
        okText="save"
        onOk={handleOk}
      >
        <ContactInforForms
          inputTtile={contactInfo[currentKey - 1].title}
          showItem={currentKey}
          formData={appointment.userInfo}
          onChange={onChange}
        />
      </Modal>
      <h4
        style={{ fontFamily: "Poppins", fontSize: "14px", fontWeight: "600", paddingLeft:"8px" }}
      >
        Correspondance Address
      </h4>
      <Table
        size="small"
        columns={columns}
        dataSource={contactInfo.slice(4, 5)}
        pagination={false}
        showHeader={false}
        style={{ fontFamily: "Poppins", fontSize: "12px"}}
      />

      <h4
        style={{ fontFamily: "Poppins", fontSize: "14px", fontWeight: "600", paddingLeft:"8px" }}
      >
        Contact No and Email
      </h4>
      <Table
        size="small"
        columns={columns}
        dataSource={contactInfo.slice(5, 9)}
        pagination={false}
        showHeader={false}
        style={{ fontFamily: "Poppins", fontSize: "12px"}}
      />
    </div>
  )
}

export default ContactInfor
