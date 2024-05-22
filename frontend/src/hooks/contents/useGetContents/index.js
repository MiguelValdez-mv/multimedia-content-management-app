import { useQuery } from "react-query";

import { API_URLS, QUERY_KEYS } from "../../../constants";
import { axiosInstance } from "../../../utils/axios";

function queryFn() {
  return axiosInstance.get(API_URLS.CONTENTS);
}

export function useGetContents(opts) {
  return useQuery({
    ...opts,
    queryFn,
    queryKey: [QUERY_KEYS.CONTENTS, ...(opts?.queryKey ?? [])],
  });
}
