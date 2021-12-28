import React, { useState } from "react"
import { Table, Modal } from "antd"
import {
  IBsCheckCircleFill,
  IBsCircle,
  IAiOutlineEdit,
} from "./../../components/icons"
import KycInformationForm from "./kycInformationForm"
import {useDispatch, useSelector} from "react-redux";
import { updateKycInfo , updateKycInfoConfirm } from "./redux/appointment-action"

const KycInformation = ({ appointment, getKycInformation }, ...props) => {
  const dispatch = useDispatch();
  const { kycInfo } = useSelector(({ appointmentSlice }) => appointmentSlice);
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
    dispatch(updateKycInfoConfirm({
      key: key,
      confirmation: confirmation
    }))
  }

  const onChange = (value) => {
    dispatch(updateKycInfo({
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
      width: "40%",
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
                getKycInformation(kycInfo)
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
        dataSource={kycInfo}
        pagination={false}
        showHeader={false}
        style={{ fontFamily: "Poppins", fontSize: "12px" }}
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
        <KycInformationForm
          inputTtile={kycInfo[currentKey - 1].title}
          showItem={currentKey}
          formData={appointment.bankQuestionInfo}
          onChange={onChange}
        />
      </Modal>
    </div>
  )
}

export default KycInformation
