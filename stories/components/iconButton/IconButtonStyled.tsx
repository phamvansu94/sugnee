import add from '../../assets/add.svg';
import call from '../../assets/call.svg';
import before from '../../assets/before.svg';
import close from '../../assets/close.svg';
import next from '../../assets/next.svg';
import edit from '../../assets/edit.svg';
import styled from 'styled-components';
import { IconButtonProps } from '../../constants/propTypes';
import { SIZE, STATE } from '../../constants/dataTypes';

const icons = {
  close: close,
  add: add,
  call: call,
  edit: edit,
  before: before,
  next: next,
};

export const IconButtonStyled = styled.button<IconButtonProps>`
  border-radius: 16px;
  border: 2px solid #dadada;
  background: ${(props) => props.state !== STATE.DISABLED && '#ffffff'};
  width: ${(props) => (props.size === SIZE.SMALL ? '96px' : '160px')};
  height: ${(props) => (props.size === SIZE.SMALL ? '96px' : '160px')};
  background-image: url(${(props) => icons[props.icon]});
  background-repeat: no-repeat;
  background-size: ${(props) => (props.size === SIZE.SMALL ? '96px' : '160px')};
  mix-blend-mode: hard-light;
`;
