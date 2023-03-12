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
