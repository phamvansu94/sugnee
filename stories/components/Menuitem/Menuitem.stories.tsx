import Menuitem from './Menuitem';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
export default {
  title: 'Example/Menuitem',
  component: Menuitem,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof Menuitem>;
type args = {
  text: boolean;
  disabled: boolean;
  label: string;
  onClick: () => void;
};
const Template: any = (args: args) => <Menuitem {...args} />;
export const textTrue = Template.bind({});
textTrue.args = {
  text: true,
  disabled: true,
  label: 'option',
};
export const texFalse = Template.bind({});
texFalse.args = {
  text: false,
  disabled: true,
  label: 'option',
};
