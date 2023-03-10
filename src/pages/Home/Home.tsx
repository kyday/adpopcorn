import React from "react";
import styled from "styled-components";

export default function Home() {
  return (
    <DashboardContainer>
      <Sidebar>
        <SidebarList>
          <SidebarListItem>Home</SidebarListItem>
          <SidebarListItem>Dashboard</SidebarListItem>
          <SidebarListItem>Settings</SidebarListItem>
        </SidebarList>
      </Sidebar>
      <MainContent>
        <h1>Welcome to your dashboard</h1>
        <p>Here's some content for your dashboard</p>
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
