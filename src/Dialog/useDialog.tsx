import React, { useCallback, useState } from 'react';
import { Dialog, DialogProps } from './Dialog';

type DialogOptions =
  | {
      open?: boolean;
      onClose?: () => void;
    }
  | undefined;

export const useDialog = (prop?: DialogOptions) => {
  const { open, onClose } = prop || {};
  const [internalOpen, setInternalOpen] = useState<boolean>(open);

  const onCloseInternal = useCallback(() => {
    setInternalOpen(false);
    onClose?.();
  }, [onClose]);

  const Component = useCallback(
    (props: Partial<DialogProps>) => (
      <Dialog {...props} open={internalOpen} onClose={onCloseInternal} />
    ),
    [internalOpen, onCloseInternal]
  );

  return {
    isOpen: internalOpen,
    setOpen: setInternalOpen,
    Dialog: Component,
  };
};
