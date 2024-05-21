import { useQuery } from "react-query";

import { API_URLS, QUERY_KEYS } from "../../constants";
import { axiosInstance } from "../../utils/axios";

function queryFn() {
  return axiosInstance.get(API_URLS.ME);
}

export function useDoesSessionExist(opts) {
  return useQuery({
    ...opts,
    queryKey: [QUERY_KEYS.DOES_SESSION_EXIST],
    queryFn,
  });
}
