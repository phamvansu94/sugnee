import React from 'react';
import styled from 'styled-components';
import { STATE } from '../../constants/dataTypes';
import { ButtonProps } from '../../constants/propTypes';

const StyledButton = styled.button`
  height: 80px;
  width: 640px;
  border-radius: 16px;
  padding: 0px, 24px, 0px, 24px;
  font-weight: 800;
`;

const EnabledButton = styled(StyledButton)`
  background: #59b9c6;
  color: #ffffff;
  cursor: pointer;
`;

const HovereButton = styled(StyledButton)`
  background: #66d8e8;
  color: #ffffff;
  cursor: pointer;
`;

const PressedButton = styled(StyledButton)`
  background: #59b9c6;
  color: #ffffff;
  cursor: pointer;
`;

const DisabledButton = styled(StyledButton)`
  background: #d0d0d0;
  color: #b7b7b7;
  cursor: not-allowed;
`;

const buttons = {
  enabled: EnabledButton,
  hovere: HovereButton,
  pressed: PressedButton,
  disabled: DisabledButton,
};

export const Button = ({ state, label, onClick }: ButtonProps) => {
  const ButtonComponent = buttons[state];
  return (
    <ButtonComponent onClick={onClick} disabled={state === STATE.DISABLED}>
      {label}
    </ButtonComponent>
  );
};
