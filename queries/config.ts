import axios, { AxiosInstance } from "axios";

const CONFIG_API = () => {
  const config: AxiosInstance = axios.create({
    baseURL: process.env.API_URL,
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
    },
  });

  config.interceptors.response.use(
    (response) => {
      if (response.data) {
        // return success
        if (response.status === 200 || response.status === 201) {
          return response.data;
        }
        // reject errors & warnings
        return Promise.reject(response);
      }

      // default fallback
      return Promise.reject(response);
    },
    (error) => {
      return Promise.reject(error.response.data);
    }
  );

  return config;
};

export default CONFIG_API;
