import React, { useState } from 'react';
import styled from 'styled-components';

import { BREAKPOINTS, FONTS, SPACING } from '../../constants';

import logoIcon from '../../assets/images/logo-horizontal.svg';
import githubIcon from '../../assets/images/github.svg';
import twitterIcon from '../../assets/images/twitter.svg';
import linkedinIcon from '../../assets/images/linkedin.svg';

import { ReactComponent as MenuIcon } from '../../assets/images/menu.svg';
import { ReactComponent as XIcon } from '../../assets/images/x.svg';
import { ReactComponent as MailIcon } from '../../assets/images/mail.svg';

const MenuButton = styled.button`
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.lg}`};
  cursor: pointer;
  display: inline-block;
  font-size: ${({ theme }) => theme.fonts.sm};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 3px 6px #00000029;
  transition: ease-in 100ms;

  :hover {
    box-shadow: 0 1.5px 3px #00000029;
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

  .mobile-view {
    display: none;
  }

  @media only screen and (max-width: ${BREAKPOINTS.xs}) {
    .mobile-view {
      display: block;
      margin-top: ${({ theme }) => theme.spacing.xl};
      margin-bottom: ${({ theme }) => theme.spacing.md};
    }
  }
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
  }

  .hamburger {
    display: none;
  }

  @media screen and (max-width: ${BREAKPOINTS.xs}) {
    .menu {
      display: none;
    }
    .hamburger {
      display: flex;
    }
  }
`;

const ContactCardDiv = styled.div`
  position: absolute;
  right: 0;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 3px 6px #00000066;
  top: 50px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};

  a {
    display: flex;
    padding: ${({ theme }) => theme.spacing.xl};
  }

  @media screen and (max-width: ${BREAKPOINTS.xs}) {
    top: initial;
    right: initial;
    bottom: -80px;

    a {
      padding: 27px;
    }
  }
`;

const Navbar: React.FC = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const [isOpenContact, setIsOpenContact] = useState<boolean>(false);

  const navigations = [{
    name: 'Twitter',
    icon: twitterIcon,
    link: 'https://twitter.com/aibrahim3546',
  }, {
    name: 'GitHub',
    icon: githubIcon,
    link: 'https://github.com/aibrahim3546',
  }, {
    name: 'LinkedIn',
    icon: linkedinIcon,
    link: 'https://www.linkedin.com/in/aibrahim3546/',
  }];

  const toggleIsOpenContact = () => {
    setIsOpenContact(!isOpenContact);
  };

  const renderContactCard = () => isOpenContact && (
    <ContactCardDiv>
      <a href="mailto: contact@ahmadibrahim.io">
        <div style={{ display: 'flex' }}>
          <div>
            <MailIcon style={{ width: FONTS.md, marginRight: SPACING.sm }} />
          </div>
          <div>
            contact@ahmadibrahim.io
          </div>
        </div>
      </a>
    </ContactCardDiv>
  );

  return (
    <>
      <MainContainerDiv>
        <ContainerDiv>
          <div className="logo" style={{ width: 100, display: 'flex' }}>
            <div>
              <img alt="logo" style={{ width: '100%' }} src={logoIcon} />
            </div>
          </div>
          <div style={{ flex: 1 }} />
          {navigations.map((each) => (
            <div className="menu" key={each.name}>
              <a href={each.link} target="_blank" rel="noreferrer">
                <img alt={each.name} width={25} style={{ display: 'flex' }} src={each.icon} />
              </a>
            </div>
          ))}
          <div className="menu" style={{ position: 'relative' }}>
            <MenuButton onClick={toggleIsOpenContact}>
              Work with me
            </MenuButton>
            {renderContactCard()}
          </div>

          <div className="hamburger">
            <div>
              {isOpenMenu
                ? (
                  <XIcon
                    onClick={() => {
                      setIsOpenMenu(false);
                      setIsOpenContact(false);
                    }}
                    style={{ width: 35 }}
                  />
                ) : (
                  <MenuIcon onClick={() => { setIsOpenMenu(true); }} style={{ width: 35 }} />
                )}
            </div>
          </div>
        </ContainerDiv>

        {isOpenMenu
          && (
            <div className="mobile-view">
              {navigations.map((each) => (
                <a key={each.name} href={each.link} target="_blank" rel="noreferrer">
                  <div style={{ marginBottom: SPACING.md, display: 'flex' }}>
                    <div>
                      <img alt={each.name} width={25} src={each.icon} />
                    </div>
                    <div style={{ paddingLeft: SPACING.lg }}>
                      {each.name}
                    </div>
                  </div>
                </a>
              ))}
              <div className="menu">
                <MenuButton onClick={toggleIsOpenContact}>
                  Work with me
                </MenuButton>
                {renderContactCard()}
              </div>
            </div>
          )}
      </MainContainerDiv>
      <div style={{ height: 80 }} />
    </>
  );
};

export default Navbar;
