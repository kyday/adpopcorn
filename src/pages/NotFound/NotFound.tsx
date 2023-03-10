import styled from "styled-components";

export default function NotFound() {
  return (
    <NotFoundContainer>
      <Heading>404: Page not found</Heading>
    </NotFoundContainer>
  );
}

const NotFoundContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;
