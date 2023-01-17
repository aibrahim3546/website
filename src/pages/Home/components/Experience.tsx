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
      'Finance App based in US',
      'Introduced new architecture for frontend development',
      'Developed UI framework (for internal use) according to our design system. Hosted using private GitHub packages.',
      'Lead the initiative to refactor and improve existing and legacy system.',
      'Worked on improving Developer Experience (DX) by enhancing the development workflow. Such as web preview for each pull request made.',
      'Improved core web vitals for all of all of our web projects.',
    ],
  },
  {
    companyName: 'TNG Digital',
    industry: 'FinTech - TnG ewallet',
    position: 'Frontend Developer',
    date: 'November 2020 - March 2021',
    points: [
      'One of the top e-wallet in Malaysia.',
      'Main developer for one of the new products.',
      'Worked with the team to implement best practices and best UI/UX to serve the user better.',
      'Involved in peer to peer code review on daily basis.',
    ],
  },
  {
    companyName: 'Vettons',
    industry: 'Technology - Ecommerce',
    position: 'Frontend Developer',
    date: 'June 2019 - October 2020',
    points: [
      'Lead developer for main product (Vettons App).',
      'Collaborated with the designers and product owner to share idea and come up with best user experience.',
      'Involved in meeting on weekly basis to update about the progress and how can the product be improved.',
      'Handle code review for Junior Developer on daily basis.',
      'Collaborated with the team and senior developer to design and implement new architecture for upcoming and existing project.',
    ],
  },
  {
    companyName: 'Revenue Monster ',
    industry: 'FinTech - Payment Gateway',
    position: 'Associate Fullstack Developer',
    date: 'December 2017 - March 2019',
    points: [
      'Main developer for WeTix. A movie ticketing platform.',
      'Maintaining and enhancing existing products',
      'Collaborated with the team to standardize  best practices in every projects.',
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
