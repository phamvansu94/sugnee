import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SelectBox } from './SelectBox';
import { SelectBoxProps } from '../../constants/propTypes';

export default {
  title: 'Example/SelectBox',
  component: SelectBox,
} as ComponentMeta<typeof SelectBox>;

const Template: ComponentStory<typeof SelectBox> = (args: SelectBoxProps) => <SelectBox {...args} />;

export const SelectBoxTemp = Template.bind({});
SelectBoxTemp.args = {
  data: [
    { label: 'Option 1', value: '111' },
    { label: 'Option 2', value: '222' },
    { label: 'Option 3', value: '333' },
    { label: 'Option 4', value: '444' },
  ],
  onChange: (e: any) => {
    console.log('Value: ', e.target.value);
  },
};
