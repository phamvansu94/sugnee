import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'react-tabs/style/react-tabs.css';
import { ModalProps } from '../../constants/propTypes';
import { IconButton } from '../iconButton/IconButton';
import { SIZE, STATE } from '../../constants/dataTypes';

const Modal = ({ icon, content }: ModalProps) => {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  return (
    <div>
      <IconButton icon={icon} size={SIZE.SMALL} state={STATE.ENAVLED} onClick={() => setOpen(!open)} />
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        {content}
      </Popup>
    </div>
  );
};

export default Modal;
