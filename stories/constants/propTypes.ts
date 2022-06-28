import { ICON, IMAGE, SIZE, STATE ,ICON_MENU} from './dataTypes';

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
  icon: ICON_MENU;
  onClick?:()=>void;
  active?: boolean
}


export type MenuProps = {
    hastext : boolean;
}