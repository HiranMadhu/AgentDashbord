import React from "react"
import '../appCard/detailsCard/index.css'
import { Button, Table , Row, Col} from "antd";
import { Link } from "react-router-dom";
import moment from 'moment';

function AppCardBody(props) {

  const columns = [
    {
      title: 'Customer Name',
      dataIndex: 'name',
      width: '12%',
    },
    {
      title: 'Note',
      dataIndex: 'note',
      width: '12%',
    },
    {
      title: 'Time',
      dataIndex: 'time',
      width: '5%',
      sorter: (a,b) => a.time - b.time
    },
    {
      title: 'Date',
      dataIndex: 'date',
      width: '6%',
      sorter: (c, d) => moment(c.date).unix() - moment(d.date).unix(),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      filters: [
        {
          text: 'Completed',
          value: 'COMPLETE',
        },
        {
          text: 'Incompleted',
          value: 'INCOMPLETE',
        },
        {
          text: 'Successful',
          value: 'SUCCESSFUL',
        },
        {
          text: 'Rejected',
          value: 'REJECT',
        },
      ],
      onFilter: (value, record) => record.status.startsWith(value),
      filterSearch: true,
      width: '6%',
      render(text, record) {
        return {
          props: {
            style: {
              color: record.status === "ACTIVE" ? "#00B91F" :
                record.status === "REJECT" ? "#FC6655" :
                  record.status === "INCOMPLETE" ? "#F9CB61" : "#6FC4AC"
            }
          },
          children: <div>
            <Row>
              <Col
                style={{
                  width: "8px",
                  height: "8px",
                  backgroundColor: record.status === "ACTIVE" ? "#00B91F" :
                    record.status === "REJECT" ? "#FC6655" :
                      record.status === "INCOMPLETE" ? "#F9CB61" : "#6FC4AC",
                  borderRadius: "50%",
                  marginTop: "7px",
                  marginRight: "10px",

                }}>
              </Col>
              <Col>{text}</Col>
            </Row>
            </div>
        };
      }
    },
    {
      title: 'Action',
      dataIndex: 'action',
      width: '5%',
    },
  ];

  const dataSource = () => {
    return props.listOfAppointments.map((val) => ({
      name: (
        <div
          style={{
            textAlign: "left",
          }}
        >
          {" "}
          {val.firstName + " " + val.lastName}
        </div>
      ),
      note: val.note,
      time: val.startTime.time + " " + val.startTime.unit,
      date: val.date,
      appointmentId: val.appointmentId,
      status: val.appointmentStatus,
      action:
        val.appointmentStatus === "ACTIVE" ? (
          <Link
            to={
              "/appointment" +
              "?" +
              "userToken" +
              "=" +
              val.userToken +
              // "163361771073000d6fb77-871b-4d6a-845b-7c9efa318983"+
              "&" +
              "userId" +
              "=" +
              val.userId+
              // "5"}
              "&" +
              "appointmentId" +
              "=" +
              val.appointmentId
            }
          >
            <Button
              type="primary"
              style={{
                backgroundColor: "#4FBA9C",
                border: "#4FBA9C",
                height: "32px",
                width: "119px",
                fontSize: "14px",
                alignContent: "center",
                fontFamily: "Poppins",
              }}
            >
              Join
            </Button>
          </Link>
        ) : (
          <Link
            to={
              "/appointment" +
              "?" +
              "userToken" +
              "=" +
              val.userToken +
              // "163361771073000d6fb77-871b-4d6a-845b-7c9efa318983"+
              "&" +
              "userId" +
              "=" +
              val.userId+
              // "5"}
              "&" +
              "appointmentId" +
              "=" +
              val.appointmentId
            }
          >
            <Button
              type="primary"
              style={{
                backgroundColor: "#4FBA9C33",
                borderColor: "#4FBA9C",
                height: "32px",
                width: "119px",
                fontSize: "14px",
                alignContent: "center",
                fontFamily: "Poppins",
                color: "#4FBA9C",
              }}
            >
              View
            </Button>
          </Link>
        ),
    }));
  };

  function onChange(filters, sorter, extra ) {
    console.log('params', filters, sorter, extra );
  }

  return (
    <div>
      {/* <pre>{JSON.stringify(props.listOfAppointments,null,2)}</pre> */}
      <Table
        dataSource={dataSource()}
        columns={columns}
        pagination={false}
        scroll={{ y: 360 }}
        onChange={onChange}
        showSorterTooltip={false}
        style={{ fontWeight:"bold", fontFamily: "Poppins" }}
        rowClassName={(record, index) => (record.status === "ACTIVE" ? "green" : "white")}
      />

    </div>
  )
}

export default AppCardBody