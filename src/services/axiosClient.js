import axios from "axios";
import { baseUrl } from "./apiConfig";
const AxiosClient = axios.create({
  baseURL: baseUrl,
});

export default AxiosClient;
