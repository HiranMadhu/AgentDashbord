import axios from "axios";
import apiRoutesConst from "../../../constants/api-routes-const";

/**
 * @author Eshan
 * @Des
 * @param article
 */
 export const appointmentDetails = (article) => {
    return axios.post(`${process.env.REACT_APP_API_ENDPOINT}/${apiRoutesConst.VERSION}/${apiRoutesConst.APPOINTMENT_DETAILS}`, article);
    // return axios.get('https://run.mocky.io/v3/0f486275-8e8c-4e44-a8f3-836d0c175c54');
    // return axios.post(`${apiRoutesConst.MOCK}/${apiRoutesConst.VERSION}/${apiRoutesConst.APPOINTMENT_DETAILS}`, article);
}

export const getSummery = (article) => {
    return axios.post(`${process.env.REACT_APP_API_ENDPOINT}/${apiRoutesConst.VERSION}/${apiRoutesConst.APPOINTMENT_SUMMARY}`, article);
    // return axios.post(`${apiRoutesConst.MOCK}/${apiRoutesConst.VERSION}/${apiRoutesConst.APPOINTMENT_SUMMARY}`, article);
}
