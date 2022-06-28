import { ICON, IMAGE, SIZE, STATE, ICON_MENU } from './dataTypes';

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

export type IconMenuProps = {
  hastext?: boolean;
  label: string;
  icon: ICON_MENU;
  // "Group"|"Device"|"Connect"|"ManageAccounts"|"Logout"|"Star";
  onClick?: () => void;
};

export interface SelectBoxProps {
  data: {
    label: string;
    value: string;
  }[];
  onChange?: (e: any) => void;
}

export interface TabsProps {
  data: {
    heading: string;
    body: string; //TODO: Change string to react node
  }[];
}
//TODO: add type for props
export interface ModalProps {
  icon: any;
  content: any;
}
