import { axiosInstance } from "../../../utils/axios";
import { useMutation, useQueryClient } from "react-query";

import { API_URLS, QUERY_KEYS } from "../../../constants";

function mutationFn(id) {
  console.log(API_URLS.THEMATIC_BY_ID(id));

  return axiosInstance.delete(API_URLS.THEMATIC_BY_ID(id));
}

export function useDeleteThematicById(opts) {
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
