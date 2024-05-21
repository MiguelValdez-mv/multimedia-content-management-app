import { useQueryClient, useMutation } from "react-query";

import { axiosInstance } from "../../utils/axios";
import { API_URLS, QUERY_KEYS } from "../../constants";

function mutationFn(data) {
  return axiosInstance.post(API_URLS.SIGN_UP, data);
}

export function useSignUp(opts) {
  const queryClient = useQueryClient();

  return useMutation({
    ...opts,
    mutationFn,
    onSuccess: (res) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.USERS] });
      opts?.onSuccess?.(res);
    },
  });
}
