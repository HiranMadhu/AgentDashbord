import { Input, Select, Typography } from "antd"
import "./popupModel.css"

const { Title } = Typography
const { Option } = Select

const PersonalInfoForm = (
  { showItem, formData, onChange, inputTtile },
  ...props
) => {
  const onFinish = (values) => {
    onChange(values)
  }

  return (
    <>
      <Title level={5} className="popupTitle">
        {inputTtile}
      </Title>
      {showItem === 1 && (
        <Input
          className="inputForms"
          placeholder="NIC Number"
          defaultValue={formData.nicNo}
          onChange={(e) => onFinish(e.target.value)}
        />
      )}
      {showItem === 2 && (
        <Select
          className="inputDropdown"
          defaultValue={formData.title}
          onChange={onFinish}
        >
          <Option value="Mr">Mr</Option>
          <Option value="Miss">Miss</Option>
          <Option value="Other">Other</Option>
        </Select>
      )}
      {showItem === 3 && (
        <Input
          className="inputForms"
          placeholder="First Name"
          defaultValue={formData.firstName}
          onChange={(e) => onFinish(e.target.value)}
        />
      )}
      {showItem === 4 && (
        <Input
          className="inputForms"
          placeholder="Last Name"
          defaultValue={formData.lastName}
          onChange={(e) => onFinish(e.target.value)}
        />
      )}
      {showItem === 5 && (
        <Select
          defaultValue={formData.gender}
          className="inputDropdown"
          onChange={onFinish}
        >
          <Option value="Male">Male</Option>
          <Option value="Female">Female</Option>
          <Option value="Other">Other</Option>
        </Select>
      )}
      {showItem === 6 && (
        <Input
          placeholder="DOB"
          defaultValue={formData.birthDay}
          onChange={(e) => onFinish(e.target.value)}
        />
      )}
      {showItem === 7 && (
        <Select
          defaultValue={formData.maritalStatus}
          className="inputDropdown"
          onChange={onFinish}
        >
          <Option value="Single">Single</Option>
          <Option value="Married">Married</Option>
        </Select>
      )}
    </>
  )
}
export default PersonalInfoForm
