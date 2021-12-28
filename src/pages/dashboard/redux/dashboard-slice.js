import {createSlice} from '@reduxjs/toolkit';

const DashboardSlice = createSlice({
    name: 'DashboardSlice',
    initialState: {
        loading: false,
        summary: null,
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
        setSummary: (state, {payload}) => ({
            ...state,
            summary: payload,
        }),
    },
});

export default DashboardSlice;
