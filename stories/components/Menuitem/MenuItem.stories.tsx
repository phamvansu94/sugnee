import MenuItem from './MenuItem';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import { Star } from '../../icon/iconmenu';
import { ReactNode } from 'react';

export default {
  title: 'Example/Menuitem',
  component: MenuItem,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof MenuItem>;
type args = {
  hastext: boolean;
  con?: ReactNode;
  label: string;
  onClick: () => void;
};
const Template: any = (args: args) => <MenuItem {...args} />;
export const textTrue = Template.bind({});
textTrue.args = {
  hastext: true,
  icon: <Star />,
  label: 'option',
};
export const texFalse = Template.bind({});
texFalse.args = {
  hastext: false,
  icon: <Star />,
  label: 'option',
};
