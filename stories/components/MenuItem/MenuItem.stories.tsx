import MenuItem from './MenuItem';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { IconMenuProps } from '../../constants/propTypes';
import { ICONMENU } from '../../constants/dataTypes';

export default {
  title: 'Example/MenuItem',
  component: MenuItem,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof MenuItem>;

const Template: any = (args: IconMenuProps) => <MenuItem {...args} />;
export const textTrue = Template.bind({});
textTrue.args = {
  hastext: true,
  icon: ICONMENU.STAR,
  label: 'option',
};
export const texFalse = Template.bind({});
texFalse.args = {
  hastext: false,
  icon: ICONMENU.STAR,
  label: 'option',
};
