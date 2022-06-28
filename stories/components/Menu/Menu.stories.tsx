import Menu from './Menu';
import { MenuProps } from '../../constants/propTypes';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Example/Menu',
  component: Menu,
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args: MenuProps) => <Menu {...args} />;

export const textTrue = Template.bind({});
textTrue.args = {
  hasText: true,
};
export const textFalse = Template.bind({});
textFalse.args = {
  hasText: false,
};
