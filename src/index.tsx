import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { App } from 'app';
import { rootStore, history } from 'app/stores';
import { ThemeProvider } from '@material-ui/core';
import { theme } from 'app/styles/theme';
import { configure } from 'mobx';
import { SnackbarManager } from 'app/components/snackbar-manager';

configure({
  isolateGlobalState: true,
  enforceActions: 'never',
});

// render react DOM
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider {...rootStore.stores}>
      <App history={history} />
      <SnackbarManager />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root'),
);
