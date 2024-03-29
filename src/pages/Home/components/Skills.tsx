import React from 'react';
import styled from 'styled-components';

import reactLogo from '../../../assets/images/react-logo.svg';
import reduxLogo from '../../../assets/images/redux-logo.svg';
import javascriptLogo from '../../../assets/images/javascript-logo.svg';
import typescriptLogo from '../../../assets/images/typescript-logo.svg';
import vueLogo from '../../../assets/images/vue-logo.svg';
import nodejsLogo from '../../../assets/images/nodejs-logo.svg';
import mongodbLogo from '../../../assets/images/mongodb-logo.svg';
import mysqlLogo from '../../../assets/images/mysql-logo.svg';
import awsLogo from '../../../assets/images/aws-logo.png';
import nextJsLogo from '../../../assets/images/nextjs.svg';
import { BREAKPOINTS } from '../../../constants';

const ContainerDiv = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 32px;

  .skill-box {
    flex: 1;
    text-align: left;
    padding-right: ${({ theme }) => theme.spacing.lg};
  }

  .skill-logo {
    height: 40px;

    @media screen and (max-width: ${BREAKPOINTS.sm}) {
      height: 20px;
    }
  }
`;

const allSkills = [
  {
    name: 'ReactJS',
    logo: reactLogo,
  },
  {
    name: 'NextJS',
    logo: nextJsLogo,
  },
  {
    name: 'React Native',
    logo: reactLogo,
  },
  {
    name: 'Redux',
    logo: reduxLogo,
  },
  {
    name: 'JavaScript',
    logo: javascriptLogo,
  },
  {
    name: 'TypeScript',
    logo: typescriptLogo,
  },
  {
    name: 'Vue',
    logo: vueLogo,
  },
  {
    name: 'NodeJS',
    logo: nodejsLogo,
  },
  {
    name: 'MongoDB',
    logo: mongodbLogo,
  },
  {
    name: 'MySQL',
    logo: mysqlLogo,
  },
  {
    name: 'AWS',
    logo: awsLogo,
  },
  {},
];

const length = JSON.parse(JSON.stringify(Array(allSkills.length / 3))) as Array<undefined>;

const Skills: React.FC = () => (
  <>
    {length.map((_, i) => (
      <ContainerDiv key={Math.random()}>
        {allSkills.slice(i * 3, (i + 1) * 3).map((skill) => (
          skill.name ? (
            <div className="skill-box" key={skill.name}>
              <img className="skill-logo" alt={skill.name} src={skill.logo} />
              <div>
                {skill.name}
              </div>
            </div>
          ) : <div className="skill-box" key={skill.name} />
        ))}
      </ContainerDiv>
    ))}
  </>
);

export default Skills;
