import { useQuery } from "react-query";

import { API_URLS, QUERY_KEYS } from "../../../constants";
import { axiosInstance } from "../../../utils/axios";

async function queryFn() {
  try {
    const { data: user } = await axiosInstance.get(API_URLS.ME);

    return { sessionExist: !!user, user };
  } catch (e) {
    return { sessionExist: false };
  }
}

export function useDoesSessionExist(opts) {
  return useQuery({
    ...opts,
    queryKey: [QUERY_KEYS.DOES_SESSION_EXIST],
    queryFn,
  });
}
