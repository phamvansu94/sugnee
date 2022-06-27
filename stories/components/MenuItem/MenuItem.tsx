import React, { ReactNode } from 'react';
import { Star, Connect, Device, Group, Logout, ManageAccounts } from '../../icon/iconmenu';
import { MenuItemStyled } from './MenuItemStyled';
import { IconMenuProps } from '../../constants/propTypes';
import { ICON_MENU } from '../../constants/dataTypes';

export default function MenuItem({ hastext = true, label = 'option', icon = ICON_MENU.STAR, onClick }: IconMenuProps) {
  const [active, setActive] = React.useState(false);
  const iconMenu = {
    Star: <Star />,
    Connect: <Connect />,
    Device: <Device />,
    Group: <Group />,
    Logout: <Logout />,
    ManageAccounts: <ManageAccounts />,
  };

  onClick = () => {
    setActive(!active);
  };

  return (
    <MenuItemStyled onClick={onClick} active={active}>
      {iconMenu[icon]}
      {hastext && <label>{label}</label>}
    </MenuItemStyled>
  );
}
