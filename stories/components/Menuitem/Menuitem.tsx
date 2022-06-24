import React, { ReactNode } from 'react';
import { Star } from '../../icon/iconmenu';
import { Div } from './MenuItemStyled';
type props = {
  hastext?: boolean;
  label: string;
  icon?: ReactNode;
  onClick?: () => void;
};
export default function Menuitem({ hastext = true, label = 'option', icon = <Star />, onClick }: props) {
  const [active, setActive] = React.useState(false);
  onClick = () => {
    setActive(!active);
    console.log('lllllll');
  };
  return (
    <Div onClick={onClick} active={active}>
      {icon}
      {hastext ? <label>{label}</label> : null}
    </Div>
  );
}
