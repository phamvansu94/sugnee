import React, { ReactNode, useState } from 'react';
import Menuitem from '../MenuItem/MenuItem';
import { MenuProps } from '../../constants/propTypes';
import { ICON_MENU } from '../../constants/dataTypes';
import { MenuStyled, TitleText, TitleImg } from './MenuStyled';
export default function Menu({ hastext = true }: MenuProps) {
  const [contentMenu, setContentMenu] = useState([
    { icon: ICON_MENU.GROUP, label: 'つなぐ', active: false },
    { icon: ICON_MENU.DEVICE, label: '端末', active: true },
    { icon: ICON_MENU.CONNECT, label: 'グループ', active: false },
    { icon: ICON_MENU.MANAGE_ACCOUNTS, label: '管理者', active: false },
    { icon: ICON_MENU.LOGOUT, label: 'ログアウト', active: false },
  ]);
  const setActice = ({ index }: { index: number }) => {
    const newContent = contentMenu.map((item, indexItem) =>
      index === indexItem ? { ...item, active: true } : { ...item, active: false }
    );
    setContentMenu(newContent);
  };
  return (
    <MenuStyled hastex={hastext}>
      {hastext ? <TitleText> スグニー</TitleText> : <TitleImg src="/assets/Sugnee.svg" alt="Image" />}
      {contentMenu.map((item, index) => (
        <Menuitem
          label={item.label}
          hastext={hastext}
          key={item.label}
          icon={item.icon}
          onClick={() => setActice({ index })}
          active={item.active}
        />
      ))}
    </MenuStyled>
  );
}
