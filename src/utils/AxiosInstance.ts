import axios from 'axios';
import {BASE_URL} from '../config/AppUrls';

const AxiosInstance = axios.create({
  baseURL: BASE_URL,
  responseType: 'json',
  withCredentials: true,
  timeout: 20000,
});

export default AxiosInstance;
