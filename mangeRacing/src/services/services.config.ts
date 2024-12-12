import axios, { AxiosResponse } from "axios";

const BASE_URL = "http://localhost:3000/";

export const getAxios = () => {
  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 30000,
  });

  axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => response.data
  );

  return axiosInstance;
};
