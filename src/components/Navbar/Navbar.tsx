import React from 'react';
import styled from 'styled-components';

import { BREAKPOINTS } from '../../constants';

import logo from '../../assets/images/logo-2.png';

const MenuButton = styled.button`
  background-color: #ffffff;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.lg}`};
  cursor: pointer;
  display: inline-block;
  font-size: ${({ theme }) => theme.fonts.sm};
  color: ${({ theme }) => theme.colors.primary};

  :hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const MainContainerDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 1px 4px rgb(64 87 109 / 7%);
  padding: ${({ theme }) => theme.spacing.md};
`;

const ContainerDiv = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  max-width: ${BREAKPOINTS.md};
  margin: auto;

  .menu {
    padding-left: ${({ theme }) => theme.spacing.lg};

    :last-child {
      ${MenuButton} {
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }
`;

const Logo = styled.img`
  width: 100px;
`;

const Navbar: React.FC = () => {
  const navigations: string[] = ['Home', 'About', 'Contact', 'LinkedIn'];

  return (
    <>
      <MainContainerDiv>
        <ContainerDiv>
          <div>
            <Logo src={logo} />
          </div>
          <div style={{ flex: 1 }} />
          {navigations.map((each) => (
            <div className="menu" key={each}>
              <MenuButton>
                {each}
              </MenuButton>
            </div>
          ))}
        </ContainerDiv>
      </MainContainerDiv>
      <div style={{ height: 80 }} />
    </>
  );
};

export default Navbar;
