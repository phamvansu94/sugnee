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
  hastext: true,
  icon: ICON_MENU.STAR,
  label: 'option',
  active: false,
};
export const texFalse = Template.bind({});
texFalse.args = {
  hastext: false,
  icon: ICON_MENU.STAR,
  label: 'option',
  active: false,
};
