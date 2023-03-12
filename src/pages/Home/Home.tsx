import React, { useCallback, useEffect, useMemo } from "react";
import styled from "styled-components";
import Loading from "../../components/Loading/Loading";
import StyledTable from "../../components/Table/StyledTable";
import StyledComposedChart from "../../components/StyledComposedChart/StyledComposedChart";
import Box from "../../components/Box/Box";
import { theme } from "../../styles/theme";
import { useAdvertisingData } from "../../hooks/api/Home/useAdvertisingData";
import { extractChartData } from "../../utils/charData/data";
import { TitleData } from "./TotalData/data";
import { useAdvertisingStore } from "../../store/useAdvertisingStore";

export default function Home() {
  const { data, mutate, isLoading } = useAdvertisingData();

  const nowYear = useAdvertisingStore((state) => state);

  const charData = extractChartData(data);

  const handleMutate = useCallback(() => {
    mutate({
      search_year: nowYear.date,
    });
  }, [nowYear.date]);

  //2018 ~ 2021
  useEffect(() => {
    handleMutate();
  }, [mutate, nowYear.date]);

  return (
    <DashboardContainer>
      <MainContent>
        <BoxContainer>
          <Arrow onClick={() => nowYear.decreaseDate()}>&#8826;</Arrow>
          <DateTitle>{nowYear.date}년</DateTitle>
          <Arrow onClick={() => nowYear.increaseDate()}>&#8827;</Arrow>
        </BoxContainer>

        <BoxContainer>
          {TitleData.map((item) => {
            return (
              <Box
                key={item.id}
                width="auto"
                height="auto"
                padding="1.25rem"
                backgroundColor={theme.colors.lightGray}
              >
                {item.title} :{" "}
                {data ? `${data[item?.data].toLocaleString()}원` : `${" "}-`}
              </Box>
            );
          })}
        </BoxContainer>

        {isLoading ? (
          <LoadingContainer>
            <Loading />
          </LoadingContainer>
        ) : (
          <>
            <TotalTitle>[1-12월 광고 수익 / 캠페인 완료 수]</TotalTitle>
            <StyledComposedChart nowYear={nowYear.date} chartData={charData} />

            <SubContent>
              <StyledTable tableData={data?.Monthly} />
            </SubContent>
          </>
        )}
      </MainContent>
    </DashboardContainer>
  );
}

const Arrow = styled.button`
  font-size: 8rem;
  cursor: pointer;
`;

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  padding: 2rem 6rem 2rem 12rem;
`;

const SubContent = styled.section`
  width: 100%;
  height: 20rem;
  display: flex;
  gap: 1.25rem;

  flex-wrap: wrap;
  justify-content: space-between;
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 18rem;

  height: 100%;
`;

const DateTitle = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 4rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const TotalTitle = styled.p`
  width: 100%;
  text-align: center;
`;

const BoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
`;
