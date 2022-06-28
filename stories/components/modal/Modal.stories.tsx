import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Modal from './Modal';
import { ModalProps } from '../../constants/propTypes';
import { ICON } from '../../constants/dataTypes';

export default {
  title: 'Example/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args: ModalProps) => <Modal {...args} />;

export const ModalTemp = Template.bind({});
ModalTemp.args = {
  icon: ICON.ADD,
  content: <div className="modal">This is content modal</div>,
};
