import React, { ReactNode, useState } from 'react';
import Menuitem from '../MenuItem/MenuItem';
import { MenuProps } from '../../constants/propTypes';
import { ICON_MENU } from '../../constants/dataTypes';
import { MenuStyled, TitleText, TitleImg } from './MenuStyled';
export default function Menu({ hasText = true }: MenuProps) {
  const [contentMenu, setContentMenu] = useState([
    { icon: ICON_MENU.GROUP, label: 'つなぐ', action: false },
    { icon: ICON_MENU.DEVICE, label: '端末', action: true },
    { icon: ICON_MENU.CONNECT, label: 'グループ', action: false },
    { icon: ICON_MENU.MANAGE_ACCOUNTS, label: '管理者', action: false },
    { icon: ICON_MENU.LOGOUT, label: 'ログアウト', action: false },
  ]);
  const setAction = ({ index }: { index: number }) => {
    const newContent = contentMenu.map((item, indexItem) =>
      index === indexItem ? { ...item, active: true } : { ...item, active: false }
    );
    setContentMenu(newContent);
  };
  return (
    <MenuStyled hasText={hasText}>
      {hasText ? <TitleText> スグニー</TitleText> : <TitleImg src="/assets/Sugnee.svg" alt="Image" />}
      {contentMenu.map((item, index) => (
        <Menuitem
          label={item.label}
          hasText={hasText}
          key={item.label}
          icon={item.icon}
          onClick={() => setAction({ index })}
          action={item.action}
        />
      ))}
    </MenuStyled>
  );
}
