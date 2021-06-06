import React from 'react';
import styled from 'styled-components';

import { BREAKPOINTS } from '../../constants';

import logo100 from '../../assets/images/logo-100.png';
import githubIcon from '../../assets/images/github.svg';
import twitterIcon from '../../assets/images/twitter.svg';
import linkedinIcon from '../../assets/images/linkedin.svg';

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
  z-index: 999;
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
    display: flex;
    padding-left: ${({ theme }) => theme.spacing.xl};
    cursor: pointer;

    :last-child {
      ${MenuButton} {
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.white};
        box-shadow: 0 3px 6px #00000029;
        transition: ease-in 100ms;
        :hover {
          box-shadow: 0 1.5px 3px #00000029;
        }
      }
    }
  }
`;

const Navbar: React.FC = () => {
  const navigations = [{
    name: 'twitter',
    icon: twitterIcon,
    link: 'https://twitter.com/aibrahim3546',
  }, {
    name: 'github',
    icon: githubIcon,
    link: 'https://github.com/aibrahim3546',
  }, {
    name: 'linkedin',
    icon: linkedinIcon,
    link: 'https://www.linkedin.com/in/aibrahim3546/',
  }];

  return (
    <>
      <MainContainerDiv>
        <ContainerDiv>
          <div style={{ width: 100, display: 'flex' }}>
            <img alt="logo" style={{ width: '100%' }} src={logo100} />
          </div>
          <div style={{ flex: 1 }} />
          {navigations.map((each) => (
            <div className="menu" key={each.name}>
              <a href={each.link} target="_blank" rel="noreferrer">
                <img alt={each.name} width={25} src={each.icon} />
              </a>
            </div>
          ))}
          <div className="menu">
            <MenuButton>
              Work with me
            </MenuButton>
          </div>
        </ContainerDiv>
      </MainContainerDiv>
      <div style={{ height: 80 }} />
    </>
  );
};

export default Navbar;
