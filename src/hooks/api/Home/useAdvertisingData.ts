import { useMutation } from "@tanstack/react-query";

import { instance } from "../../../libs/client";
import { PaymentType } from "../../../types/paymentType";

export type AdvertisingDataMutationResponse = {
  search_year: number;
  search_month?: number;
};

export const useAdvertisingData = () => {
  return useMutation<PaymentType, unknown, AdvertisingDataMutationResponse>({
    mutationFn: async (payload: AdvertisingDataMutationResponse) => {
      const { data } = await instance.post(
        "/ap/v1/partners/demoreport/GetDemoData",
        payload
      );

      return data?.Payment;
    },

    mutationKey: ["advertisingData"],
  });
};
