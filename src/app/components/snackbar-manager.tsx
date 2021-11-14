import * as React from 'react';
import { SnackbarProvider, withSnackbar } from 'notistack';
import { observer } from 'mobx-react';
import { useStores } from 'app/stores';

let displayed: number[] = [];

const Notifier = withSnackbar(
  observer((props) => {
    const { snackbarstore } = useStores();
    console.log(snackbarstore.alerts);
    snackbarstore.alerts.forEach((alert) => {
      const { message, ...rest } = alert;
      if (displayed.includes(alert.key)) return;
      props.enqueueSnackbar(message, rest);
      displayed = [...displayed, alert.key];
      snackbarstore.remove(alert);
    });
    return null;
  }),
);

export const SnackbarManager = (props) => {
  return (
    <SnackbarProvider
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
    >
      <Notifier />
    </SnackbarProvider>
  );
};
