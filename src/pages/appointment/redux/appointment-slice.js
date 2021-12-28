import {createSlice} from '@reduxjs/toolkit';

const AppointmentSlice = createSlice({
  name: "AppointmentSlice",
  initialState: {
    loading: false,
    personalInfo: null,
    contactInfo: null,
    kycInfo: null,
    personalId: null,
    fullInfo:null,
    appointmentId:null,
  },
  reducers: {
    loading: (state) => ({
      ...state,
      loading: true,
    }),
    stopLoading: (state) => ({
      ...state,
      loading: false,
    }),
    setPersonalInfo: (state, { payload }) => ({
      ...state,
      personalId: payload.id,
      appointmentId:payload.appointmentId,
      fullInfo:payload.data,
      personalInfo: [
        {
          key: 1,
          title: "NIC Number",
          value: payload.data.userInfo.nicNo,
          edited: false,
          confirmed: false,
        },
        {
          key: 2,
          title: "Title",
          value: payload.data.userInfo.title,
          edited: false,
          confirmed: false,
        },
        {
          key: 3,
          title: "First Name",
          value: payload.data.userInfo.firstName,
          edited: false,
          confirmed: false,
        },
        {
          key: 4,
          title: "Last Name",
          value: payload.data.userInfo.lastName,
          edited: false,
          confirmed: false,
        },
        {
          key: 5,
          title: "Gender",
          value: payload.data.userInfo.gender,
          edited: false,
          confirmed: false,
        },
        {
          key: 6,
          title: "DOB",
          value: payload.data.userInfo.birthDay,
          edited: false,
          confirmed: false,
        },
        {
          key: 7,
          title: "Marital Status",
          value: payload.data.userInfo.maritalStatus,
          edited: false,
          confirmed: false,
        },
      ],
      contactInfo: [
        {
          key: 1,
          title: "Address Line 1",
          value: payload.data.userInfo.addressInfo.addressList[0].addressLine1,
          edited: false,
          confirmed: false,
        },
        {
          key: 2,
          title: "Address Line 2",
          value: payload.data.userInfo.addressInfo.addressList[0].addressLine2,
          edited: false,
          confirmed: false,
        },
        {
          key: 3,
          title: "City",
          value: payload.data.userInfo.addressInfo.addressList[0].city,
          edited: false,
          confirmed: false,
        },
        {
          key: 4,
          title: "District",
          value: payload.data.userInfo.addressInfo.addressList[0].district,
          edited: false,
          confirmed: false,
        },
        {
          key: 5,
          title: "Same as perment Address",
          value: payload.data.userInfo.addressInfo.sameAsPermanent,
          edited: false,
          confirmed: false,
        },
        {
          key: 6,
          title: "Residence",
          value: payload.data.userInfo.residence,
          edited: false,
          confirmed: false,
        },
        {
          key: 7,
          title: "Mobile",
          value: payload.data.userInfo.mobile,
          edited: false,
          confirmed: false,
        },
        {
          key: 8,
          title: "Office",
          value: payload.data.userInfo.office,
          edited: false,
          confirmed: false,
        },
        {
          key: 9,
          title: "E-mail",
          value: payload.data.userInfo.email,
          edited: false,
          confirmed: false,
        },
      ],
      kycInfo: [
        {
          key: 1,
          title: "Purpose of opening the account",
          value: payload.data.bankQuestionInfo.purposeOfOpeningTheAccount,
          edited: false,
          confirmed: false,
        },
        {
          key: 2,
          title: "Source of credits to A/C",
          value: payload.data.bankQuestionInfo.sourceOfCreditsToAC,
          edited: false,
          confirmed: false,
        },
        {
          key: 3,
          title: "Expected mode of transaction",
          value: payload.data.bankQuestionInfo.expectedModeOfTransaction,
          edited: false,
          confirmed: false,
        },
        {
          key: 4,
          title: "Wealth generated from",
          value: payload.data.bankQuestionInfo.wealthGeneratedFrom,
          edited: false,
          confirmed: false,
        },
        {
          key: 5,
          title: "Politically exposed person",
          value: payload.data.bankQuestionInfo.politicallyExposedPerson,
          edited: false,
          confirmed: false,
        },
      ],
    }),
    updatePersonalInfoConfirm: (state, { payload }) => {
      state.personalInfo[payload.key - 1].confirmed = payload.confirmation;
    },

    updatePersonalInfo: (state, { payload }) => {
      state.personalInfo[payload.key - 1].value = payload.value;
      state.personalInfo[payload.key - 1].edited = payload.edited;
      state.personalInfo[payload.key - 1].confirmed = payload.confirmed;
    },

    updateContactInfoConfirm: (state, { payload }) => {
      state.contactInfo[payload.key - 1].confirmed = payload.confirmation;
    },

    updateContactInfo: (state, { payload }) => {
      state.contactInfo[payload.key - 1].value = payload.value;
      state.contactInfo[payload.key - 1].edited = payload.edited;
      state.contactInfo[payload.key - 1].confirmed = payload.confirmed;
    },

    updateKycInfoConfirm: (state, { payload }) => {
      state.kycInfo[payload.key - 1].confirmed = payload.confirmation;
    },

    updateKycInfo: (state, { payload }) => {
      state.kycInfo[payload.key - 1].value = payload.value;
      state.kycInfo[payload.key - 1].edited = payload.edited;
      state.kycInfo[payload.key - 1].confirmed = payload.confirmed;
    },
  },
});

export default AppointmentSlice;
