import React from 'react';
import { STATE } from '../../constants/dataTypes';

import { IconButtonProps } from '../../constants/propTypes';
import { IconButtonStyled } from './IconButtonStyled';

export const IconButton = ({ state, size, icon, onClick }: IconButtonProps) => {
  return (
    <IconButtonStyled onClick={onClick} state={state} size={size} icon={icon} disabled={state === STATE.DISABLED} />
  );
};
