import MenuItem from './MenuItem';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IconMenuProps } from '../../constants/propTypes';
import { ICON_MENU } from '../../constants/dataTypes';

export default {
  title: 'Example/MenuItem',
  component: MenuItem,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof MenuItem>;

const Template: ComponentStory<typeof MenuItem> = (args: IconMenuProps) => <MenuItem {...args} />;
export const textTrue = Template.bind({});
textTrue.args = {
  hasText: true,
  icon: ICON_MENU.STAR,
  label: 'option',
  action: false,
};
export const textFalse = Template.bind({});
textFalse.args = {
  hasText: false,
  icon: ICON_MENU.STAR,
  label: 'option',
  action: false,
};
