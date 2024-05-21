import { useQueryClient, useMutation } from "react-query";

import { API_URLS, QUERY_KEYS } from "../../constants";
import { setAuthToken } from "../../utils/authToken";
import { axiosInstance } from "../../utils/axios";
import { useAuth } from "../useAuth";

function mutationFn(data) {
  return axiosInstance.post(API_URLS.LOGIN, data);
}

export function useLogin(opts) {
  const queryClient = useQueryClient();
  const authCtx = useAuth();

  return useMutation({
    ...opts,
    mutationFn,
    onSuccess: (res) => {
      queryClient.invalidateQueries([QUERY_KEYS.DOES_SESSION_EXIST]);
      authCtx.login(res.data.user);
      setAuthToken(res.data.token);
      opts?.onSuccess?.(res);
    },
  });
}
