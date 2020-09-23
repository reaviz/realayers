import React from 'react';
import { Dialog } from './Dialog';
import { useDialog } from './useDialog';

export const Simple = () => {
  const { setOpen, Dialog } = useDialog();

  return (
    <div style={{ textAlign: 'center', width: '100%', margin: '50px' }}>
      <button onClick={() => setOpen(true)}>Open</button>
      <Dialog header="Whats up">Hello</Dialog>
    </div>
  );
};

export default {
  title: 'Dialog',
  component: Dialog,
};
