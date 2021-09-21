import React from 'react';
import { Dialog } from './Dialog';
import { useDialog } from './useDialog';

export default {
  title: 'Dialog',
  component: Dialog,
};

export const Simple = () => {
  const { toggleOpen, Dialog } = useDialog();

  return (
    <div style={{ textAlign: 'center', width: '100%', margin: '50px' }}>
      <button onClick={toggleOpen}>Open</button>
      <Dialog header="Whats up">Hello</Dialog>
    </div>
  );
};

export const NoHeader = () => {
  const { toggleOpen, Dialog } = useDialog();

  return (
    <div style={{ textAlign: 'center', width: '100%', margin: '50px' }}>
      <button onClick={toggleOpen}>Open</button>
      <Dialog header={null}>Hello</Dialog>
    </div>
  );
};

export const NoPadding = () => {
  const { toggleOpen, Dialog } = useDialog();

  return (
    <div style={{ textAlign: 'center', width: '100%', margin: '50px' }}>
      <button onClick={toggleOpen}>Open</button>
      <Dialog header={null} disablePadding={true}>Hello</Dialog>
    </div>
  );
};
