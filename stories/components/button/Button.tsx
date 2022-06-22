import React from 'react';
import { STATE } from '../../constants/propsType';
import './button.css';

interface ButtonProps {
  state: STATE;

  label: string;

  onClick?: () => void;
}

export const Button = ({ state = STATE.ENAVLED, label = 'button' }: ButtonProps) => {
  return (
    <button type="button" className={['button', `button-${state}`].join(' ')}>
      {label}
    </button>
  );
};
