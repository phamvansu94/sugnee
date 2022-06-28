import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import QRCode from './QRCode';
import { QRCodeProps } from '../../constants/propTypes';

export default {
  title: 'Example/QRCode',
  component: QRCode,
} as ComponentMeta<typeof QRCode>;

const Template: ComponentStory<typeof QRCode> = (args: QRCodeProps) => <QRCode {...args} />;

export const QRCodeTemp = Template.bind({});
QRCodeTemp.args = {
  value: 'organizationsId_userId',
  size: 150,
};
