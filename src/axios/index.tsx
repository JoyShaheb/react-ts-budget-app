import axios, { AxiosRequestConfig } from "axios";

const settings: AxiosRequestConfig = {
  baseURL: "http://localhost:3005/",
};

export const apiSettings = axios.create(settings);
