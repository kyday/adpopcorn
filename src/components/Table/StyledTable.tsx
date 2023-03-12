import React from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { AppType } from "../../types/paymentType";
import styled from "styled-components";
import { tableColumns } from "./columns/data";

export type DataType = {
  key: React.Key;
  name: string;
  revenue: number;
  commission: string;
  complete: string;
  Datetime: string;
  App?: AppType[];
};

const ExpandedRowRender = (record: DataType) => {
  const columns = [
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

  return (
    <RowContainer>
      {record.App?.map((item) => {
        console.log(item.AppKey);
        return (
          <div key={item.AppKey}>
            <AppTextTitle>[{item.AppName}]</AppTextTitle>

            <Table
              style={{ marginBottom: "1rem" }}
              rowKey={(record) => record.CampaignKey}
              pagination={false}
              columns={columns}
              dataSource={item.Campaign}
            />
            {/* <ItemList>
              {item.Campaign.map((item) => {
                console.log(item);
                return (
                  <React.Fragment key={item.CampaignKey}>
                    <li key={item.CampaignKey}>
                      <span>{item.CampaignName}</span>
                      <span>{item.Revenue}</span>
                    </li>
                    <li></li>
                  </React.Fragment>
                );
              })}
            </ItemList> */}
          </div>
        );
      })}
    </RowContainer>
  );
};

type StyledTableProps = {
  tableData: DataType[] | undefined;
};

const StyledTable = ({ tableData }: StyledTableProps) => {
  return (
    <Table
      rowKey={(record) => record.Datetime}
      pagination={{ pageSize: 12 }}
      style={{ width: "100%", marginTop: "3rem" }}
      columns={tableColumns}
      expandedRowRender={(record) => ExpandedRowRender(record)}
      // expandable={{
      //   expandedRowRender: (record) => {
      //     return (

      // <RowContainer>
      //   {record.App?.map((item) => {
      //     return (
      //       <div key={item.AppKey}>
      //         <AppTextTitle>[{item.AppName}]</AppTextTitle>

      //         <ItemList>
      //           {item.Campaign.map((item) => {
      //             console.log(item);
      //             return (
      //               <React.Fragment key={item.CampaignKey}>
      //                 <li key={item.CampaignKey}>
      //                   <span>{item.CampaignName}</span>
      //                   <span>{item.Revenue}</span>
      //                 </li>
      //                 <li></li>
      //               </React.Fragment>
      //             );
      //           })}
      //         </ItemList>
      //       </div>
      //     );
      //   })}
      // </RowContainer>
      //     );
      //   },
      //   rowExpandable: (record) => {
      //     return record.Datetime !== "Not Expandable";
      //   },
      // }}
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

const ItemList = styled.ul`
  li {
    padding-right: 5rem;
    span {
      width: 30%;
      background-color: red;
    }
  }
`;
