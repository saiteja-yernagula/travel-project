import axios from "axios";

const api = axios.create({
 baseURL: "https://travelbackendapi-04zn.onrender.com"
});

export default api;
