import React, { ReactNode } from 'react';
import { Star, Connect, Device, Group, Logout, ManageAccounts } from '../../icon/iconmenu';
import { MenuItemStyled, Text } from './MenuItemStyled';
import { IconMenuProps } from '../../constants/propTypes';
import { ICON_MENU } from '../../constants/dataTypes';

export default function MenuItem({
  hastext = true,
  label = 'option',
  icon = ICON_MENU.STAR,
  onClick,
  active = false,
}: IconMenuProps) {
  const iconMenu = {
    Star: <Star />,
    Connect: <Connect />,
    Device: <Device />,
    Group: <Group />,
    Logout: <Logout />,
    ManageAccounts: <ManageAccounts />,
  };

  return (
    <MenuItemStyled onClick={onClick} active={active} hastex={hastext}>
      {iconMenu[icon]}
      {hastext && <Text>{label}</Text>}
    </MenuItemStyled>
  );
}
