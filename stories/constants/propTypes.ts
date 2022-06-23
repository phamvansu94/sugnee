import { STATE } from './dataTypes';

export interface ButtonProps {
  state: STATE;

  label: string;

  onClick?: () => void;
}
