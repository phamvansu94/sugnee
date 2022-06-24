import React from 'react';
import { AvatarProps } from '../../constants/propTypes';
import { AvatarStyled } from './AvatarStyled';

export const Avatar = ({ state, size, image }: AvatarProps) => {
  return <AvatarStyled state={state} size={size} image={image} />;
};
