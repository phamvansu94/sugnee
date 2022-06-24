import styled from 'styled-components';
import { STATE } from '../../constants/dataTypes';
import { ButtonProps } from '../../constants/propTypes';

export const ButtonStyled = styled.button<ButtonProps>`
  height: 80px;
  width: 640px;
  border-radius: 16px;
  padding: 0px, 24px, 0px, 24px;
  font-weight: 800;

  ${(props) => {
    switch (props.state) {
      case STATE.ENAVLED:
        return `
        background: #59b9c6;
        color: #ffffff;
        cursor: pointer;
        `;
      case STATE.HOVERE:
        return `
        background: #66d8e8;
        color: #ffffff;
        cursor: pointer;
        `;
      case STATE.PRESSED:
        return `
        background: #59b9c6;
        color: #ffffff;
        cursor: pointer;
          `;
      case STATE.DISABLED:
        return `
        background: #d0d0d0;
        color: #b7b7b7;
        cursor: not-allowed;
          `;
      default:
        return `
        background: #59b9c6;
        color: #ffffff;
        cursor: pointer;
        `;
    }
  }}
`;
