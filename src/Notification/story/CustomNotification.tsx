import classNames from 'classnames';
import React from 'react';
import { NotificationComponentProps } from '../Notifications';

import css from './CustomNotification.module.css';

export const CustomNotification = ({
  message,
  variant,
  onClose
}: NotificationComponentProps) => {
  return (
    <div
      className={classNames(css.root, variant)}
      style={{
        width: '200px',
        height: '50px',
        borderRadius: '5px',
        display: 'flex',
        alignItems: 'center',
        padding: '10px',
        boxSizing: 'border-box'
      }}
      onClick={onClose}
    >
      {message}{' '}
      <div style={{ marginLeft: '5px', fontSize: '12px' }}>
        (Click me to close!)
      </div>
    </div>
  );
};
