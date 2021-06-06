import React from 'react';
import styled from 'styled-components';

const ContainerDiv = styled.div`
  height: 80px;
  margin-top: -80px;
  position: relative;
  clear: both;
  color: white;
  background-color: #004aad;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Footer: React.FC = () => (
  <footer>
    <ContainerDiv>
      © copyrights Ahmad Ibrahim 2021
    </ContainerDiv>
  </footer>
);

export default Footer;
