import { type } from 'os';
import * as React from 'react';

type props = {
  width?: number;
  height?: number;
  props?: any;
  fill?: string;
};
const Connect = ({ width = 20, height = 20, props, fill = '#0000008A' }: props) => (
  <svg width={width} height={height} viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M15 6c1.66 0 2.99-1.34 2.99-3S16.66 0 15 0c-1.66 0-3 1.34-3 3s1.34 3 3 3ZM7 6c1.66 0 2.99-1.34 2.99-3S8.66 0 7 0C5.34 0 4 1.34 4 3s1.34 3 3 3Zm0 2c-2.33 0-7 1.17-7 3.5V14h14v-2.5C14 9.17 9.33 8 7 8Zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V14h6v-2.5C22 9.17 17.33 8 15 8Z"
      fill={fill}
      fillOpacity={0.54}
    />
  </svg>
);
const Device = ({ width = 20, height = 20, props, fill = '#0000008A' }: props) => (
  <svg width={width} height={height} viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M15 0H3C1.34 0 0 1.34 0 3v18c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V3c0-1.66-1.34-3-3-3Zm-4 22H7v-1h4v1Zm5.25-3H1.75V3h14.5v16Z"
      fill={fill}
      fillOpacity={0.54}
    />
  </svg>
);

const Group = ({ width = 20, height = 20, props, fill = '#0000008A' }: props) => (
  <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M9 12H7a9 9 0 0 1 9-9v2c-3.87 0-7 3.13-7 7Zm7-3V7c-2.76 0-5 2.24-5 5h2c0-1.66 1.34-3 3-3ZM5 2c0-1.11-.89-2-2-2-1.11 0-2 .89-2 2 0 1.11.89 2 2 2 1.11 0 2-.89 2-2Zm4.45.5h-2A2.99 2.99 0 0 1 4.5 5h-3C.67 5 0 5.67 0 6.5V9h6V6.74A4.97 4.97 0 0 0 9.45 2.5ZM17 15c1.11 0 2-.89 2-2 0-1.11-.89-2-2-2-1.11 0-2 .89-2 2 0 1.11.89 2 2 2Zm1.5 1h-3a2.99 2.99 0 0 1-2.95-2.5h-2A4.97 4.97 0 0 0 14 17.74V20h6v-2.5c0-.83-.67-1.5-1.5-1.5Z"
      fill={fill}
      fillOpacity={0.54}
    />
  </svg>
);

const Logout = ({ width = 20, height = 20, props, fill = '#0000008A' }: props) => (
  <svg width={width} height={height} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="m15 4-1.41 1.41L16.17 8H6v2h10.17l-2.58 2.58L15 14l5-5-5-5ZM2 2h8V0H2C.9 0 0 .9 0 2v14c0 1.1.9 2 2 2h8v-2H2V2Z"
      fill={fill}
      fillOpacity={0.54}
    />
  </svg>
);
const ManageAccounts = ({ width = 20, height = 20, props, fill = '#0000008A' }: props) => (
  <svg width={width} height={height} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M8 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM8.67 9.02C8.45 9.01 8.23 9 8 9c-2.42 0-4.68.67-6.61 1.82-.88.52-1.39 1.5-1.39 2.53V16h9.26a6.963 6.963 0 0 1-.59-6.98ZM18.75 12c0-.22-.03-.42-.06-.63l1.14-1.01-1-1.73-1.45.49c-.32-.27-.68-.48-1.08-.63L16 7h-2l-.3 1.49c-.4.15-.76.36-1.08.63l-1.45-.49-1 1.73 1.14 1.01c-.03.21-.06.41-.06.63 0 .22.03.42.06.63l-1.14 1.01 1 1.73 1.45-.49c.32.27.68.48 1.08.63L14 17h2l.3-1.49c.4-.15.76-.36 1.08-.63l1.45.49 1-1.73-1.14-1.01c.03-.21.06-.41.06-.63ZM15 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Z"
      fill={fill}
      fillOpacity={0.54}
    />{' '}
    = 20
  </svg>
);
const Star = ({ width = 20, height = 20, props, fill = '#0000008A' }: props) => (
  <svg width={width} height={height} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M10 15.27 16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19 10 15.27Z"
      fill={fill}
      fillOpacity={0.54}
    />
  </svg>
);

export { Connect, Device, Group, Logout, ManageAccounts, Star };
