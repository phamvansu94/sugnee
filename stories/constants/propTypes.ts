import { type } from 'os';
import { ICON, IMAGE, SIZE, STATE ,ICONMENU} from './dataTypes';

export interface ButtonProps {
  state: STATE;

  label: string;

  onClick?: () => void;
}

export interface IconButtonProps {
  state: STATE;

  size: SIZE;

  icon: ICON;

  onClick?: () => void;
}

export interface AvatarProps {
  state: STATE;

  size: SIZE;

  image: IMAGE;
}

export type IconMenuProps ={
  hastext?: boolean;
  label: string;
  icon: ICONMENU;
  // "Group"|"Device"|"Connect"|"ManageAccounts"|"Logout"|"Star";
  onClick?: () => void;
}