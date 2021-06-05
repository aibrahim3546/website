import React from 'react';
import styled from 'styled-components';

import { BREAKPOINTS, COLORS } from '../../constants';

import laptopImg from '../../assets/images/laptop-2.png';
import revenueMonsterLogo from '../../assets/images/rm-logo-2.png';
import wetixLogo from '../../assets/images/wetix-logo-2.png';
import moneylionLogo from '../../assets/images/moneylion-logo.svg';
import tngLogo from '../../assets/images/tng-logo.svg';
import vettonsLogo from '../../assets/images/vettons-logo-2.svg';

const ContainerDiv = styled.div`
  width: 100%;
  max-width: ${BREAKPOINTS.md};
  margin: auto;
`;

const HeaderDiv = styled.div`
  display: flex;
  width: 100%;
  align-items: center;

  .desc {
    flex: 1;
    padding-left: ${({ theme }) => theme.spacing.lg};
    font-size: ${({ theme }) => theme.fonts.lg};

    p {
      font-size: ${({ theme }) => theme.fonts.md};
    }
  }
`;

const LOGOS = [revenueMonsterLogo, wetixLogo, moneylionLogo, tngLogo, vettonsLogo];
const LOGO_HEIGHT = {
  0: 40,
  1: 40,
  2: 55,
  3: 40,
  4: 40,
};

type HeightIndexType = 0 | 1 | 2 | 3 | 4;

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
            My name is Ahmad Ibrahim.
            <br />
            3+ years experience as a Software Engineer.
            I am currently coding to make a living.
          </p>
        </div>
      </HeaderDiv>
    </ContainerDiv>
    <div style={{ backgroundColor: COLORS.secondary }}>
      <ContainerDiv>
        <div style={{ display: 'flex', width: '100%', alignItems: 'center' }}>
          {LOGOS.map((logo, i) => (
            <div
              style={{
                padding: '32px 16px', textAlign: 'center', flex: 1,
              }}
              key={Math.random()}
            >
              <img alt="logo" style={{ height: LOGO_HEIGHT[(i as HeightIndexType)] }} src={logo} />
            </div>
          ))}
        </div>
      </ContainerDiv>
    </div>
  </div>
);

export default HomePage;
