import React from "react";
import { Table } from "antd";

import { AppType } from "../../types/paymentType";
import styled from "styled-components";
import { expandedRowColumns, tableColumns } from "./columns/data";

export type DataType = {
  key: React.Key;
  name: string;
  revenue: number;
  commission: string;
  complete: string;
  Datetime: string;
  App?: AppType[];
};

type StyledTableProps = {
  tableData: DataType[] | undefined;
};

const ExpandedRowRender = (record: DataType) => {
  return (
    <RowContainer>
      {record.App?.map((item) => {
        return (
          <div key={item.AppKey}>
            <AppTextTitle>[{item.AppName}]</AppTextTitle>
            <Table
              style={{ marginBottom: "1rem" }}
              rowKey={(record) => record.CampaignKey}
              pagination={false}
              columns={expandedRowColumns}
              dataSource={item.Campaign}
            />
          </div>
        );
      })}
    </RowContainer>
  );
};

const StyledTable = ({ tableData }: StyledTableProps) => {
  return (
    <Table
      rowKey={(record) => record.Datetime}
      pagination={{ pageSize: 12 }}
      style={{ width: "100%", marginTop: "3rem" }}
      columns={tableColumns}
      expandedRowRender={(record) => ExpandedRowRender(record)}
      dataSource={tableData}
    />
  );
};
export default StyledTable;

const RowContainer = styled.div`
  padding-left: 3.0625rem;
`;

const AppTextTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;
