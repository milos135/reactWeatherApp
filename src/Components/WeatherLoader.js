import React from "react";
import styled, { keyframes } from "styled-components";
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Loader = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 1s linear infinite;
`;

const LoadingText = styled.p`
  margin-top: 16px;
  font-size: 18px;
`;

const WeatherLoader = () => {
  return (
    <LoaderWrapper>
      <Loader />
      <LoadingText>Loading...</LoadingText>
    </LoaderWrapper>
  );
};

export default WeatherLoader;
