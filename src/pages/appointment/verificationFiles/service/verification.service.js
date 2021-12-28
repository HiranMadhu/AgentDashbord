import axios from "axios";

export const compareface = (facedata) => {
    return axios
    .post(`http://13.228.45.95:9000/compare-image`,facedata);
};

export const comparefront = (frontdata) => {
    return axios
    .post(`http://13.228.45.95:9000/compare-ID`,frontdata);
};

export const compareback = (backdata) => {
    return axios
    .post(`http://13.228.45.95:9000/compare-ID`, backdata);
 
};


