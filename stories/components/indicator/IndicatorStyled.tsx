import styled from 'styled-components';
import { IndicatorProps } from '../../constants/propTypes';

export const IndicatorStyled = styled.div<IndicatorProps>`
  height: 24px;
  width: 24px;
  border-radius: 50%;
  background: ${(props) => (props.state ? '#59b9c6' : '#dfdfdf')};
`;
