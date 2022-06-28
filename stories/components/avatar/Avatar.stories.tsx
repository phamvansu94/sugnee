import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IMAGE, STATE } from '../../constants/dataTypes';
import { Avatar } from './Avatar';

export default {
  title: 'Example/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Enabled = Template.bind({});
Enabled.args = {
  state: STATE.ENABLED,
  image: IMAGE.AVATAR_01,
};

export const Pressed = Template.bind({});
Pressed.args = {
  state: STATE.PRESSED,
  image: IMAGE.AVATAR_01,
};

export const Disabled = Template.bind({});
Disabled.args = {
  state: STATE.DISABLED,
  image: IMAGE.AVATAR_01,
};
