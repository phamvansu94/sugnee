import React, { useState } from 'react';
import MenuItem from '../menuItem/MenuItem';
import { MenuProps } from '../../constants/propTypes';
import { MenuStyled, TitleText, TitleImg } from './MenuStyled';
import Sugnee from '../../assets/Sugnee.svg';

export default function Menu({ hasText = true, content }: MenuProps) {
  const [contentMenu, setContentMenu] = useState(content);
  const setActive = (indexActive: number) => {
    const newContent = contentMenu.map((item, indexItem) => ({ ...item, active: indexActive === indexItem }));
    setContentMenu(newContent);
  };
  return (
    <MenuStyled hasText={hasText}>
      {hasText ? <TitleText> スグニー</TitleText> : <TitleImg src={Sugnee} alt="Image" />}
      {contentMenu.map((item, index) => (
        <MenuItem
          label={item.label}
          hasText={hasText}
          key={item.label}
          icon={item.icon}
          onClick={() => setActive(index)}
          active={item.active}
        />
      ))}
    </MenuStyled>
  );
}
