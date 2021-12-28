import AppointmentSlice from "./appointment-slice";
import {queryCustomer} from "../service/appoinment.service";

export const loading = (body) => (dispatch) => {
    dispatch(AppointmentSlice.actions.loading());
};

export const setPersonalInfo = (article) => (dispatch) => {
    dispatch(AppointmentSlice.actions.loading());
    queryCustomer(article).then((response) => {
        dispatch(
          AppointmentSlice.actions.setPersonalInfo({
            id: article.userId,
            appointmentId: article.appointmentId,
            data: response.data,
          })
        );       
    }).catch(error => {
        dispatch(AppointmentSlice.actions.stopLoading());
    })
};

export const updatePersonalInfoConfirm = (payload) => (dispatch) => {
    dispatch(AppointmentSlice.actions.updatePersonalInfoConfirm(payload));
};

export const updatePersonalInfo = (payload) => (dispatch) => {
    dispatch(AppointmentSlice.actions.updatePersonalInfo(payload));
};

export const updateContactInfoConfirm = (payload) => (dispatch) => {
    dispatch(AppointmentSlice.actions.updateContactInfoConfirm(payload));
};

export const updateContactInfo = (payload) => (dispatch) => {
    dispatch(AppointmentSlice.actions.updateContactInfo(payload));
};

export const updateKycInfoConfirm = (payload) => (dispatch) => {
    dispatch(AppointmentSlice.actions.updateKycInfoConfirm(payload));
};

export const updateKycInfo = (payload) => (dispatch) => {
    dispatch(AppointmentSlice.actions.updateKycInfo(payload));
};

