import React from 'react';
import styled from 'styled-components';
import { SPACING } from '../../../constants';

const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  position: relative;
  z-index: 2;
  margin: auto;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const VerticalLine = styled.div`
  width: 10px;
  height: 100%;
  position: relative;
  top: -2px;
  z-index: 1;
  margin: auto;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

const ContainerDiv = styled.div`
  display: flex;

  .job-title {
    font-size: ${({ theme }) => theme.fonts.sm};
    font-weight: bold;
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }

  .company-name {
    font-size: ${({ theme }) => theme.fonts.sm};
    font-weight: bold;
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }

  .duration {
    font-size: ${({ theme }) => theme.fonts.xs};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }

  .points {
    padding-left: ${({ theme }) => theme.spacing.lg};
    padding-bottom: ${({ theme }) => theme.spacing.xl};
  }

  :last-child {
    ${VerticalLine} {
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
    }
  }
`;

const experiences = [
  {
    companyName: 'MoneyLion ',
    industry: 'FinTech - Finance',
    position: 'Software Engineer',
    date: 'March 2021 - Present',
    points: [
      'Finance App based in US (went IPO last year in NYSE).',
      'Introduced new architecture for frontend development.',
      'Developed UI framework (for internal use) according to our design system. Hosted using private GitHub packages.',
      'Lead the initiative to refactor and improve existing and legacy system.',
      'Worked on improving Developer Experience (DX) by enhancing the development workflow. Such as web preview for each pull request made.',
      'Improved core web vitals for all of all of our web projects.',
      'Implement e2e and unit test.',
      'Take initiative and execute things that improve the product or increase developer productivity.',
      'Mentor Jr. Developer.',
      'Practice high engineering standard. Ensure all code are well tested before delivered to end users.',
      'Manage CI/CD pipelines.',
    ],
  },
  {
    companyName: 'TNG Digital',
    industry: 'FinTech - TnG ewallet',
    position: 'Frontend Developer',
    date: 'November 2020 - March 2021',
    points: [
      "No 1 e-wallet in Malaysia. A joint venture between Ant Financial (Alibaba) and Touch n' Go Malaysia.",
      'Lead developer for new product (Insurance renewal)',
      'Practice Test driven development (TDD).',
      'Ensure code delivered to end users are well tested with unit testing',
    ],
  },
  {
    companyName: 'Vettons',
    industry: 'Technology - Ecommerce',
    position: 'Frontend Developer',
    date: 'June 2019 - October 2020',
    points: [
      'Lead Developer for main product (Vettons App - React Native)',
      'Setup code standard (followed Airbnb engineering guidlines) and ensure all engineers followed the practice.',
      'Manage App Store & Play Store release. For both android and iOS.',
      'Worked with Augmented Reality (AR) and Speech to text technology',
      'Mentor Jr. Developer',
    ],
  },
  {
    companyName: 'Revenue Monster ',
    industry: 'FinTech - Payment Gateway',
    position: 'Associate Fullstack Developer',
    date: 'December 2017 - March 2019',
    points: [
      'Revenue Monster is a FinTech company that focus on payment gateway.',
      'Worked on a new Project (WeTix) with minimal guidance form seniors/lead.',
      'Maintain and develop new features for WeTix.',
      'Manage production deployment for WeTix.',
    ],
  },
];

const Experience: React.FC = () => (
  <>
    {experiences.map((exp) => (
      <ContainerDiv key={exp.companyName}>
        <div style={{ width: 20 }}>
          <Circle />
          <VerticalLine />
        </div>
        <div style={{ flex: 1, paddingLeft: SPACING.lg, marginTop: -5 }}>
          <div className="job-title">
            {exp.position}
          </div>
          <div className="company-name">
            {exp.companyName}
            <span style={{ fontWeight: 'normal' }}>{` (${exp.industry})`}</span>
          </div>
          <div className="duration">{exp.date}</div>
          <div className="points">
            <ul>
              {exp.points.map((each) => (
                <li key={each}>{each}</li>
              ))}
            </ul>
          </div>
        </div>
      </ContainerDiv>
    ))}
  </>
);

export default Experience;
