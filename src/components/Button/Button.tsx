import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  type: 'primary' | 'secondary'
  children: React.ReactNode
  onClick: () => void
}

const BUTTON_THEME = {
  primary: '#000000',
  secondary: '#0000ff',
};

const ButtonDiv = styled.div<{ type: 'primary' | 'secondary' }>`
  background-color: ${(props) => BUTTON_THEME[props.type] || '#000000'};
  border-radius: 5px;
  color: #ffffff;
  display: inline-block;
  padding: 10px 20px;
  font-size: 18px;
  margin-top: 20px;
  cursor: pointer;
  opacity: 1;

  :hover {
    opacity: 0.75;
  }
`;

const Button: React.FC<ButtonProps> = (props) => {
  const { type, children, onClick } = props;

  return (
    <ButtonDiv type={type} onClick={onClick}>
      {children}
    </ButtonDiv>
  );
};

export default Button;
