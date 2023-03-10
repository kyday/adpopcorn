import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { instance } from "../../../libs/client";

export type AdvertisingDataMutationResponse = {
  search_year: number;
  search_month?: number;
};

export const useAdvertisingData = () => {
  return useMutation({
    mutationFn: async (payload: AdvertisingDataMutationResponse) => {
      const { data } = await instance.post(
        "/ap/v1/partners/demoreport/GetDemoData",
        payload
      );

      return data;
    },
  });
};
