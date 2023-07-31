import React from 'react';
import styled from 'styled-components';

import Experience from './components/Experience';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';

import { BREAKPOINTS, COLORS, SPACING } from '../../constants';

import laptopImg from '../../assets/images/laptop-2.png';
import revenueMonsterLogo from '../../assets/images/rm-logo.png';
import wetixLogo from '../../assets/images/wetix-logo.png';
import moneylionLogo from '../../assets/images/ml-logo.png';
import tngLogo from '../../assets/images/tng-logo.svg';
import vettonsLogo from '../../assets/images/vettons-logo.svg';

const ContainerDiv = styled.div`
  width: 100%;
  max-width: ${BREAKPOINTS.md};
  margin: auto;

  @media screen and (max-width: ${BREAKPOINTS.sm}) {
    padding: 0 ${({ theme }) => theme.spacing.xl};
  }
`;

const TitleDiv = styled.div`
  font-size: ${({ theme }) => theme.fonts.lg};
  font-weight: bold;
  
  .line {
    height: 4px;
    width: 100px;
    background-color: ${({ theme }) => theme.colors.black};
    border-radius: ${({ theme }) => theme.borderRadius};
    margin-bottom: ${({ theme }) => theme.spacing.xl};
  }
`;

const HeaderDiv = styled.div`
  display: flex;
  width: 100%;
  align-items: center;

  @media screen and (max-width: ${BREAKPOINTS.sm}) {
    display: block;
  }

  .desc {
    flex: 1;
    padding-left: ${({ theme }) => theme.spacing.lg};
    font-size: ${({ theme }) => theme.fonts.lg};

    @media screen and (max-width: ${BREAKPOINTS.sm}) {
      margin-top: ${({ theme }) => theme.spacing.xl};
      padding-left: 0;
    }

    p {
      font-size: ${({ theme }) => theme.fonts.md};
    }
  }
`;

const CompanySectionDiv = styled.div`
  background-color: ${COLORS.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  width: 100%;

  .company-logo {
    display: flex;
    width: 100%;
    align-items: center;
  }

  .logo-container {
    padding: 32px 0;
    text-align: center;
    flex: 1;
    display: flex;
    justify-content: center;
  }
`;

const LOGOS = [{
  link: 'http://revenuemonster.my/',
  img: revenueMonsterLogo,
}, {
  link: 'https://www.wetix.my/',
  img: wetixLogo,
}, {
  link: 'https://www.moneylion.com/',
  img: moneylionLogo,
}, {
  link: 'https://www.tngdigital.com.my/',
  img: tngLogo,
}, {
  link: 'https://www.vettons.com/',
  img: vettonsLogo,
}];

const HomePage: React.FC = () => (
  <div>
    <ContainerDiv style={{ margin: '56px auto' }}>
      <HeaderDiv>
        <div style={{ flex: 1 }}>
          <img style={{ width: '100%' }} alt="laptop" src={laptopImg} />
        </div>
        <div className="desc">
          <b>Hey there!</b>
          <p>
            My name is Ibrahim.
            <br />
            a dedicated Software Engineer with 5+ years of experience
            {' '}
            specializing in frontend development.
          </p>
        </div>
      </HeaderDiv>
    </ContainerDiv>

    <CompanySectionDiv>
      <ContainerDiv>
        <div className="company-logo">
          {LOGOS.map((logo) => (
            <div className="logo-container" key={Math.random()}>
              <a href={logo.link} target="_blank" rel="noreferrer" style={{ width: '100%' }}>
                <img alt="logo" style={{ width: '50%' }} src={logo.img} />
              </a>
            </div>
          ))}
        </div>
      </ContainerDiv>
    </CompanySectionDiv>

    <ContainerDiv style={{ marginBottom: SPACING.xl }}>
      <div>
        <TitleDiv>
          Me
          <div className="line" />
        </TitleDiv>

        <div>
          I am passionated about delivering exceptional user experiences through
          {' '}
          clean, scalable code. Collaborative team player focused on crafting intuitive
          {' '}
          interfaces that exceed customer expectations. Constantly learning and staying
          {' '}
          updated with the latest industry advancements. Ready to contribute innovative
          {' '}
          ideas to your team and create world-class software.
        </div>
      </div>
    </ContainerDiv>

    <ContainerDiv style={{ marginBottom: SPACING.xl }}>
      <div>
        <TitleDiv>
          Skills
          <div className="line" />
        </TitleDiv>

        <Skills />
      </div>
    </ContainerDiv>

    <ContainerDiv>
      <div>
        <TitleDiv>
          Portfolio (Commercial Products)
          <div className="line" />
        </TitleDiv>

        <Portfolio />
      </div>
    </ContainerDiv>

    <ContainerDiv>
      <div>
        <TitleDiv>
          Experience
          <div className="line" />
        </TitleDiv>

        <Experience />
      </div>
    </ContainerDiv>
  </div>
);

export default HomePage;
