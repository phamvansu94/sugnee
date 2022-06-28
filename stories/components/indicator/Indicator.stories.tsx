import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Indicator } from './Indicator';

export default {
  title: 'Example/Indicator',
  component: Indicator,
} as ComponentMeta<typeof Indicator>;

const Template: ComponentStory<typeof Indicator> = (args) => <Indicator {...args} />;

export const Enabled = Template.bind({});
Enabled.args = {
  state: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  state: false,
};
