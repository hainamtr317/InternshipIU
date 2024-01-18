import axios from "axios";

const AxiosUploadFile = axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    "Content-Type": "multipart/form-data",
  },
});
export default AxiosUploadFile;
