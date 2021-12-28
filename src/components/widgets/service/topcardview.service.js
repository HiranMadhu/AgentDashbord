import axios from "axios"

export const summery = (article) => {
    return axios
        .post(
    `http://192.168.0.108:30509/adl/et/telco/dte/ekycvkyc/api/v1.0/appointmentmgt/agent/query/summary`,
    article
  )
}
