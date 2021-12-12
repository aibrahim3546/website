import React from 'react';
import styled from 'styled-components';

import wetixLogo from '../../../assets/images/wetix-logo.png';
import moneylionLogo from '../../../assets/images/ml-logo.png';
import vettonsLogo from '../../../assets/images/vettons-logo.svg';

import { BREAKPOINTS, SPACING } from '../../../constants';

const PORTFOLIO = [{
  link: 'https://www.moneylion.com/',
  img: moneylionLogo,
  name: 'MoneyLion (ReactJS)',
  description: 'https://www.moneylion.com/',
  points: ['Digital Bank', '> 7 million users and counting'],
}, {
  link: 'https://www.wetix.my/',
  img: wetixLogo,
  name: 'WeTix (ReactJS)',
  description: 'Available in MAE, Boost, WeChat, Presto & TnG e-wallet',
  points: ['Movie ticketing service', '> 50,000 users (as per March 2019)'],
}, {
  link: 'https://www.vettons.com/',
  img: vettonsLogo,
  name: 'Vettons App (React Native)',
  description: 'Available in Play store and App store',
  points: ['E-Commerce / Online Shopping', '> 50,000 downloads (as per Nov 2020)'],
}];

const ContainerDiv = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: ${BREAKPOINTS.sm}) {
    display: block;
    margin-bottom: 32px;
  }
`;

const ImgContainerDiv = styled.div`
  flex: 0.5;
  padding: 32px 40px 32px 16px;

  @media screen and (max-width: ${BREAKPOINTS.sm}) {
    width: 100px;
    margin-bottom: 16px;
    padding: 0;
  }
`;

const Portfolio: React.FC = () => (
  <>
    {PORTFOLIO.map((each) => (
      <ContainerDiv key={each.link}>
        <ImgContainerDiv>
          <img src={each.img} style={{ width: '100%' }} alt={each.link} />
        </ImgContainerDiv>
        <div style={{ flex: 4 }}>
          <div style={{ fontSize: 24, fontWeight: 'bold', paddingBottom: SPACING.sm }}>
            {each.name}
          </div>
          <div style={{ fontSize: 18, paddingBottom: SPACING.sm }}>
            {each.description}
          </div>
          <ul style={{ marginLeft: 18 }}>
            {each.points.map((point) => (
              <li key={point}>
                <div style={{ fontSize: 16 }}>
                  {point}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </ContainerDiv>
    ))}
  </>
);

export default Portfolio;
