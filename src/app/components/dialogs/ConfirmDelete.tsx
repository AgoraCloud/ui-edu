import * as React from 'react';
import {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@material-ui/core';
import { observer } from 'mobx-react';
import { Input } from 'app/components/inputs';
import { BaseDialog } from 'app/components/dialogs';
import { useStores } from 'app/stores';

export const ConfirmDeleteDialog = observer(() => {
  const { uistore } = useStores();

  const form = uistore.confirmDelete;
  // if(!form) return null
  const { dialog, submit, name } = form;
  return (
    // <Form form={form}>
    <BaseDialog dialog={dialog}>
      <DialogTitle>Confirm Delete</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete
          <br />
          {name}
        </DialogContentText>
        <Input
          autoFocus
          form={form}
          error={!form.valid}
          helperText={`type ${name} to delete`}
          margin="dense"
          id="name"
          label="Confirm Delete"
          type="text"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={dialog.onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={submit} disabled={!form.valid} color="primary">
          Delete
        </Button>
      </DialogActions>
    </BaseDialog>
    // </Form>
  );
});
