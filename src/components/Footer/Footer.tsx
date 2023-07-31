import React from 'react';
import styled from 'styled-components';

const ContainerDiv = styled.div`
  height: 120px;
  margin-top: -120px;
  position: relative;
  clear: both;
  color: white;
  background-color: #004aad;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Footer: React.FC = () => (
  <footer>
    <ContainerDiv>
      <div>
        Icons made by
        {' '}
        <a href="https://www.freepik.com" title="Freepik">Freepik</a>
        {' '}
        from
        {' '}
        <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
      </div>
      <div>
        #aibrahim3546
      </div>
      <div>
        © copyrights Ahmad Ibrahim 2023
      </div>
    </ContainerDiv>
  </footer>
);

export default Footer;
