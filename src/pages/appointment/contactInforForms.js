import { Input, Typography } from "antd"
import "./popupModel.css"
const { Title } = Typography

const ContactInforForms = (
  { showItem, formData, onChange, inputTtile },
  ...props
) => {
  const onFinish = (value) => {
    onChange(value)
  }

  return (
    <>
      <Title level={5} className="popupTitle">
        {inputTtile}
      </Title>
      {showItem === 1 && (
        <Input
          className="inputForms"
          placeholder="Basic usage"
          defaultValue={formData.addressInfo.addressList[0].addressLine1}
          onChange={(e) => onFinish(e.target.value)}
        />
      )}
      {showItem === 2 && (
        <Input
          className="inputForms"
          placeholder="Basic usage"
          defaultValue={formData.addressInfo.addressList[0].addressLine2}
          onChange={(e) => onFinish(e.target.value)}
        />
      )}
      {showItem === 3 && (
        <Input
          className="inputForms"
          placeholder="Basic usage"
          defaultValue={formData.addressInfo.addressList[0].city}
          onChange={(e) => onFinish(e.target.value)}
        />
      )}
      {showItem === 4 && (
        <Input
          className="inputForms"
          placeholder="Basic usage"
          defaultValue={formData.addressInfo.addressList[0].district}
          onChange={(e) => onFinish(e.target.value)}
        />
      )}
      {showItem === 5 && (
        <Input
          className="inputForms"
          placeholder="Basic usage"
          defaultValue={formData.addressInfo.sameAsPermanent}
          onChange={(e) => onFinish(e.target.value)}
        />
      )}
      {showItem === 6 && (
        <Input
          className="inputForms"
          placeholder="Basic usage"
          defaultValue={formData.residence}
          onChange={(e) => onFinish(e.target.value)}
        />
      )}
      {showItem === 7 && (
        <Input
          className="inputForms"
          placeholder="Basic usage"
          defaultValue={formData.mobile}
          onChange={(e) => onFinish(e.target.value)}
        />
      )}
      {showItem === 8 && (
        <Input
          className="inputForms"
          placeholder="Basic usage"
          defaultValue={formData.office}
          onChange={(e) => onFinish(e.target.value)}
        />
      )}
      {showItem === 9 && (
        <Input
          className="inputForms"
          placeholder="Basic usage"
          defaultValue={formData.email}
          onChange={(e) => onFinish(e.target.value)}
        />
      )}
    </>
  )
}

export default ContactInforForms
