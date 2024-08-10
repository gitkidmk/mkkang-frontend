import axios from "axios";
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;
axios.defaults.xsrfCookieName = 'XSRF-TOKEN';
axios.defaults.xsrfHeaderName = 'X-XSRF-TOKEN';

process.env.NODE_ENV === "production" && (axios.defaults.baseURL = process.env.REACT_APP_PRD_BASE_URL);

export default axios;