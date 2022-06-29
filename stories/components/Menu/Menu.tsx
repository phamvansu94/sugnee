import React, { useState } from 'react';
import MenuItem from '../MenuItem/MenuItem';
import { MenuProps } from '../../constants/propTypes';
import { MenuStyled, TitleText, TitleImg } from './MenuStyled';
import Sugnee from '../../assets/Sugnee.svg';

export default function Menu({ hasText = true, content }: MenuProps) {
  const [contentMenu, setContentMenu] = useState(content);
  const setAction = ({ index }: { index: number }) => {
    const newContent = contentMenu.map((item, indexItem) =>
      index === indexItem ? { ...item, active: true } : { ...item, active: false }
    );
    console.log(newContent);
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
          onClick={() => setAction({ index: index })}
          action={item.action}
        />
      ))}
    </MenuStyled>
  );
}
