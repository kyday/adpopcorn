import React, { Suspense, useEffect } from "react";
import styled from "styled-components";
import Loading from "../../components/Loading/Loading";
import { useAdvertisingData } from "../../hooks/api/Home/useAdvertisingData";

export default function Home() {
  const { data, mutate, isLoading } = useAdvertisingData();

  //2018 ~ 2021 call success
  useEffect(() => {
    mutate({
      search_year: 2019,
    });
  }, [mutate]);

  // const dateString = "/Date(1575126000000)/";
  // const timeValue = parseInt(dateString.replace(/[^0-9]/g, ""));
  // const date = new Date(timeValue);

  // const formattedDate = `${date.getFullYear()}-${(
  //   "0" +
  //   (date.getMonth() + 1)
  // ).slice(-2)}`;

  // console.log(formattedDate);

  console.log(data);

  return (
    <DashboardContainer>
      <Sidebar>
        <SidebarList>
          <SidebarListItem>Home</SidebarListItem>
        </SidebarList>
      </Sidebar>

      <MainContent>
        {isLoading ? (
          <LoadingContainer>
            <Loading />
          </LoadingContainer>
        ) : (
          <>
            <h1>Welcome to your dashboard</h1>
            <p>Here's some content for your dashboard</p>
          </>
        )}
      </MainContent>
    </DashboardContainer>
  );
}

const DashboardContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const Sidebar = styled.div`
  background-color: #333;
  color: #fff;
  padding: 1.25rem;
  width: 12.5rem;
`;

const SidebarList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const SidebarListItem = styled.li`
  padding: 0.625rem;
`;

const MainContent = styled.div`
  padding: 1.25rem;
  flex: 1;
`;

const LoadingContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
