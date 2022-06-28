import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TabsProps } from '../../constants/propTypes';
import Tabs from './Tabs';

export default {
  title: 'Example/Tabs',
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args: TabsProps) => <Tabs {...args} />;

export const TabsTemp = Template.bind({});
TabsTemp.args = {
  data: [
    {
      heading: 'Sugnnee',
      body: 'This is Sugnnee page',
    },
    {
      heading: 'Step 1',
      body: 'This is step 1',
    },
    {
      heading: 'Step 2',
      body: 'This is step 1',
    },
    {
      heading: 'Step 3',
      body: 'This is step 1',
    },
  ],
};
