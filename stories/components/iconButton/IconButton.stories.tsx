import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconButton } from './IconButton';
import { ICON, SIZE, STATE } from '../../constants/dataTypes';

export default {
  title: 'Example/IconButton',
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />;

export const Enabled = Template.bind({});
Enabled.args = {
  state: STATE.ENABLED,
  size: SIZE.SMALL,
  icon: ICON.CLOSE,
};

export const Pressed = Template.bind({});
Pressed.args = {
  state: STATE.PRESSED,
  size: SIZE.SMALL,
  icon: ICON.CLOSE,
};

export const Disabled = Template.bind({});
Disabled.args = {
  state: STATE.DISABLED,
  size: SIZE.SMALL,
  icon: ICON.CLOSE,
};
