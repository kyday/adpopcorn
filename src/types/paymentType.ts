import { DataType } from "../components/Table/StyledTable";

export type PaymentType =
  | {
      [key: string]: string | number | Array<MonthType>;
      Revenue: number;
      Commission: number;
      Complete: number;
      Monthly: Array<MonthType>;
    }
  | undefined;

export type MonthType = {
  Status: number;
  Datetime: string;
  Revenue: number;
  Commission: number;
  Complete: number;
  AppKey: number;
  App: AppType[];
} & DataType;

export type AppType = MonthType & {
  AppName: number;
  Campaign: CampaignType[];
};

export type CampaignType = {
  CampaignName: string;
  Datetime: string;
  Revenue: number;
  Commission: number;
  Complete: number;
  CampaignKey: string;
  AppKey: number;
};
