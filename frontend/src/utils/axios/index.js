import axios from "axios";

import { getAuthToken } from "../authToken";

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use((config) => {
  const authToken = getAuthToken();

  return {
    ...config,
    headers: {
      ...config.headers,
      ...(authToken && { authorization: `Bearer ${authToken}` }),
    },
  };
});

export { axiosInstance };
