import { Select, Typography } from "antd"
import "./popupModel.css"
const { Title } = Typography
const { Option } = Select

const KycInformationForm = (
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
        <Select
          className="inputDropdown"
          defaultValue={formData.purposeOfOpeningTheAccount}
          onChange={onFinish}
        >
          <Option value="Savings">Savings</Option>
          <Option value="Utility Bill Payment">Utility Bill Payment</Option>
          <Option value="Salary Remittance">Salary Remittance</Option>
          <Option value="Education purpose">Education purpose</Option>
          <Option value="Other">Other</Option>
        </Select>
      )}
      {showItem === 2 && (
        <Select
          className="inputDropdown"
          defaultValue={formData.sourceOfCreditsToAC}
          onChange={onFinish}
        >
          <Option value="Salary Income">Salary Income</Option>
          <Option value="Rental Income">Rental Income</Option>
          <Option value="Remittances">Remittances</Option>
        </Select>
      )}
      {showItem === 3 && (
        <Select
          className="inputDropdown"
          defaultValue={formData.expectedModeOfTransaction}
          onChange={onFinish}
        >
          <Option value="Cash Deposits">Cash Deposits</Option>
          <Option value="Cash withdrawals">Cash withdrawals</Option>
          <Option value="All of above">All of above</Option>
        </Select>
      )}
      {showItem === 4 && (
        <Select
          className="inputDropdown"
          defaultValue={formData.wealthGeneratedFrom}
          onChange={onFinish}
        >
          <Option value="Profession or employement">
            Profession or employement
          </Option>
          <Option value="Business Ownership">Business Ownership</Option>
          <Option value="Invesments">Invesments</Option>
          <Option value="Other">Other</Option>
        </Select>
      )}
      {showItem === 5 && (
        <Select
          className="inputDropdown"
          defaultValue={formData.politicallyExposedPerson}
          onChange={onFinish}
        >
          <Option value="Yes">Yes</Option>
          <Option value="No">No</Option>
        </Select>
      )}
    </>
  )
}

export default KycInformationForm
