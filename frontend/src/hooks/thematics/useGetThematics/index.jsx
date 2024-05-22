import { useQuery } from "react-query";

import { API_URLS, QUERY_KEYS } from "../../../constants";
import { axiosInstance } from "../../../utils/axios";

function queryFn() {
  return axiosInstance.get(API_URLS.THEMATICS);
}

export function useGetThematics(opts) {
  return useQuery({
    ...opts,
    queryFn,
    queryKey: [QUERY_KEYS.THEMATICS, ...(opts?.queryKey ?? [])],
  });
}
