import React from 'react';

import { IconButtonProps } from '../../constants/propTypes';
import { IconButtonStyled } from './IconButtonStyled';

export const IconButton = ({ state, size, icon, onClick }: IconButtonProps) => {
  return <IconButtonStyled onClick={onClick} state={state} size={size} icon={icon} />;
};
