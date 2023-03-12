import { ColumnsType } from "antd/es/table";
import { DataType } from "../StyledTable";

export const tableColumns: ColumnsType<DataType> = [
  {
    title: "Datetime",
    dataIndex: "Datetime",
    key: "Datetime",
    render: (text) => {
      const date = new Date(
        parseInt(text.replace("/Date(", "").replace(")/", ""))
      );
      return `${date.getFullYear()}년 ${date.getMonth() + 1}월`;
    },
  },
  {
    title: "Revenue",
    dataIndex: "Revenue",
    key: "Revenue",
    render: (text) => {
      return `${text.toLocaleString()}`;
    },
  },
  {
    title: "Commission",
    dataIndex: "Commission",
    key: "Commission",
  },
  {
    title: "Complete",
    dataIndex: "Complete",
    key: "Complete",
    render: (text) => {
      return `${text} 건`;
    },
  },
];

//ExpandedRowRender Columns
export const expandedRowColumns = [
  { title: "이름", dataIndex: "CampaignName", key: "CampaignName" },
  {
    title: "캠페인 참여 수익",
    dataIndex: "Revenue",
    key: "Revenue",
    render: (text: string) => {
      return `${text.toLocaleString()} 원`;
    },
  },

  {
    title: "캠페인 참여자 수",
    dataIndex: "Complete",
    key: "Complete",
    render: (text: string) => {
      return `${text} 건`;
    },
  },
  {
    title: "수수료",
    dataIndex: "Commission",
    key: "Commission",
  },
];
