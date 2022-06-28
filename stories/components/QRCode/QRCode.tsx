import React from 'react';
import { QRCodeProps } from '../../constants/propTypes';
import QRCodeReact from 'qrcode.react';

const QRCode = ({ value, size }: QRCodeProps) => {
  return <QRCodeReact id="qrcode" value={value} size={size} level={'H'} includeMargin={true} />;
};

export default QRCode;
