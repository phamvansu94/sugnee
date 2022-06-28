import React from 'react';
import { IndicatorProps } from '../../constants/propTypes';
import { IndicatorStyled } from './IndicatorStyled';

export const Indicator = ({ state, onClick }: IndicatorProps) => {
  return <IndicatorStyled onClick={onClick} state={state}></IndicatorStyled>;
};
