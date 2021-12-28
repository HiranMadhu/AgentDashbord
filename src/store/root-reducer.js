import {combineReducers} from 'redux';
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';
import AppointmentSlice from "../pages/appointment/redux/appointment-slice";
import DashboardSlice from "../pages/dashboard/redux/dashboard-slice";

const persistConfig = {
    key: 'root',
    storage,
};

// eslint-disable-next-line import/prefer-default-export
export const rootReducer = combineReducers({
    appointmentSlice: persistReducer(persistConfig, AppointmentSlice.reducer),
    dashboardSlice: DashboardSlice.reducer,
});
