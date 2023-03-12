import { MonthType, PaymentType } from "../../types/paymentType";

export type GraphData = {
  name: string;
  Revenue: number;
  Complete: number;
};

export const extractChartData = (data: PaymentType) => {
  const chartData: GraphData[] = [];

  data?.Monthly.forEach((month) => {
    const revenueData = {
      name: new Date(parseInt(month.Datetime.substring(6))).toLocaleDateString(
        "en-US",
        { month: "short", year: "numeric" }
      ),
      Revenue: month.Revenue,
      Complete: month.Complete,
    };
    chartData.push(revenueData);
  });

  return chartData;
};
