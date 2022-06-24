import React from 'react';
import { STATE } from '../../constants/dataTypes';
import { ButtonProps } from '../../constants/propTypes';
import { ButtonStyled } from './ButtonStyled';

export const Button = ({ state, label, onClick }: ButtonProps) => {
  return (
    <ButtonStyled onClick={onClick} state={state} label={label} disabled={state === STATE.DISABLED}>
      {label}
    </ButtonStyled>
  );
};
