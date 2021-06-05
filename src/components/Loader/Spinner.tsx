import React from 'react';
import styled, { keyframes } from 'styled-components';

const ContainerDiv = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  margin: auto;
  width: 100%;
  height: 100%;
  z-index: 999999;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SpinnerDiv = styled.div`
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #1ebaba; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: ${spinAnimation} 2s linear infinite;
`;

const Spinner: React.FC = () => (
  <ContainerDiv>
    <SpinnerDiv />
  </ContainerDiv>
);

export default Spinner;
