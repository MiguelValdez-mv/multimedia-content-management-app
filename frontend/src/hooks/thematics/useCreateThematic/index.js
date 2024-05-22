import { useQueryClient, useMutation } from "react-query";

import { API_URLS, QUERY_KEYS } from "../../../constants";
import { axiosInstance } from "../../../utils/axios";

function mutationFn(data) {
  return axiosInstance.post(API_URLS.THEMATICS, data);
}

export function useCreateThematic(opts) {
  const queryClient = useQueryClient();

  return useMutation({
    ...opts,
    mutationFn,
    onSuccess: (res) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.THEMATICS] });
      opts?.onSuccess?.(res);
    },
  });
}
