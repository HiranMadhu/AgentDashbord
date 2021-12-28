import DashboardSlice from "./dashboard-slice";
import {getSummery} from "../services/dashboard.service";

export const fetchSummary = (article) => (dispatch) => {
    debugger
    dispatch(DashboardSlice.actions.loading());
    getSummery(article).then((response) => {
        dispatch(DashboardSlice.actions.setSummary(response.data));
        // response.data.userInfo
    }).catch(error => {
        dispatch(DashboardSlice.actions.stopLoading());
    })
};

