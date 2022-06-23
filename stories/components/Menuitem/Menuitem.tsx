import React, { ReactNode } from 'react';
import './Menuitem.css';
import { Star } from '../../icon/iconmenu';
type props = {
  text?: boolean;
  disabled?: boolean;
  label: string;
  icon?: ReactNode;
  onClick?: () => void;
};
export default function Menuitem({ text = true, disabled = false, label = 'option', icon = <Star />, onClick }: props) {
  return (
    <div className="Menuitem" onClick={onClick}>
      {icon}
      {text ? <label>{label}</label> : <label></label>}
    </div>
  );
}
