import Menuitem from './Menuitem';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import { Star } from '../../icon/iconmenu';
import { ReactNode } from 'react';

export default {
  title: 'Example/Menuitem',
  component: Menuitem,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof Menuitem>;
type args = {
  hastext: boolean;
  con?: ReactNode;
  label: string;
  onClick: () => void;
};
const Template: any = (args: args) => <Menuitem {...args} />;
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
