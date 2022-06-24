import styled from 'styled-components';
import { STATE } from '../../constants/dataTypes';
import { ButtonProps } from '../../constants/propTypes';

export const ButtonStyled = styled.button<ButtonProps>`
  height: 80px;
  width: 640px;
  border-radius: 16px;
  padding: 0px, 24px, 0px, 24px;
  font-weight: 800;
  background: ${(props) => (props.state === STATE.DISABLED ? '#d0d0d0' : '#59b9c6')};
  cursor: ${(props) => (props.state === STATE.DISABLED ? 'not-allowed' : 'pointer')};
  color: ${(props) => (props.state === STATE.DISABLED ? '#b7b7b7' : '#ffffff')};

  &:hover:not([disabled]) {
    background: #66d8e8;
  }
`;
