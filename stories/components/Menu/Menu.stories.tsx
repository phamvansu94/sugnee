import Menu from './Menu';
import { MenuProps } from '../../constants/propTypes';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ICON_MENU } from '../../constants/dataTypes';

const MenuContent = [
  { icon: ICON_MENU.GROUP, label: 'つなぐ', action: false },
  { icon: ICON_MENU.DEVICE, label: '端末', action: false },
  { icon: ICON_MENU.CONNECT, label: 'グループ', action: false },
  { icon: ICON_MENU.MANAGE_ACCOUNTS, label: '管理者', action: false },
  { icon: ICON_MENU.LOGOUT, label: 'ログアウト', action: false },
];
export default {
  title: 'Example/Menu',
  component: Menu,
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args: MenuProps) => <Menu {...args} />;

export const textTrue = Template.bind({});
textTrue.args = {
  hasText: true,
  content: MenuContent,
};
export const textFalse = Template.bind({});
textFalse.args = {
  hasText: false,
  content: MenuContent,
};
