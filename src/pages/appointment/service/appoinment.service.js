import axios from "axios";
import apiRoutesConst from "../../../constants/api-routes-const";

export const queryCustomer = (article) => axios.post(`${process.env.REACT_APP_API_ENDPOINT}/adl/et/telco/dte/ekycvkyc/api/v1.0/usermgt/query/customer`, article);
export const appointmentStatusChange = (body) => axios.post(`${process.env.REACT_APP_API_ENDPOINT}/adl/et/telco/dte/ekycvkyc/api/v1.0/appointmentmgt/agent/submit/final-status`, body);
// export const queryCustomer = (article) => axios.post(`${apiRoutesConst.MOCK}/adl/et/telco/dte/ekycvkyc/api/v1.0/usermgt/query/customer`, article);
// export const appointmentStatusChange = (body) => axios.post(`${apiRoutesConst.MOCK}/adl/et/telco/dte/ekycvkyc/api/v1.0/appointmentmgt/agent/submit/final-status`, body);
