import * as React from 'react';
import { Dialog } from '@material-ui/core';
import { DialogModel } from 'app/components/dialogs';
import { observer } from 'mobx-react';

interface BaseDialog_i {
  dialog: DialogModel;
  children: React.ReactNode;
}
export const BaseDialog = observer(({ dialog, children }: BaseDialog_i) => {
  const { open, onClose } = dialog;
  // console.log("is OPEN?", open)
  return (
    <Dialog open={open} onClose={onClose}>
      {children}
    </Dialog>
  );
});
