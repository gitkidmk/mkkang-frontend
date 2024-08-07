import axios from "axios";
axios.defaults.withCredentials = true;

// const csrfToken = document.querySelector('meta[name="_csrf"]').content;

axios.defaults.withXSRFToken = true;
axios.defaults.xsrfCookieName = 'XSRF-TOKEN';
axios.defaults.xsrfHeaderName = 'X-XSRF-TOKEN';
// axios.defaults.headers = {
//     "X-CSRF-TOKEN": csrfToken
// }

export default axios;