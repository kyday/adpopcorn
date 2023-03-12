import styled, { keyframes } from "styled-components";

export default function Loading() {
  return (
    <LoadingWrapper>
      <LoadingSpinner>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
      </LoadingSpinner>
      <LoadingText>Loading...</LoadingText>
    </LoadingWrapper>
  );
}

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoadingSpinner = styled.div`
  display: inline-block;
  position: relative;
  width: 4rem;
  height: 4rem;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 3.1875rem;
    height: 3.1875rem;
    margin: 0.375rem;
    border: 0.375rem solid #fff;
    border-radius: 50%;
    animation: ${spin} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fff transparent transparent transparent;

    &:nth-child(1) {
      animation-delay: -0.45s;
    }
    &:nth-child(2) {
      animation-delay: -0.3s;
    }
    &:nth-child(3) {
      animation-delay: -0.15s;
    }
  }
`;

const LoadingText = styled.p`
  margin-top: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
`;

const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
