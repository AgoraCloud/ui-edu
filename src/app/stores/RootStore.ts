import {
  ROUTER_STORE,
  AUTH_STORE,
  SNACKBAR_STORE,
  ADMIN_STORE,
} from 'app/constants';

import { createBrowserHistory } from 'history';

import {
  RouterStore,
  AuthStore,
  SnackbarStore,
  AdminStore,
} from 'app/stores';


export class RootStore {
  public routerStore: RouterStore;
  public authStore: AuthStore;
  public snackbarStore: SnackbarStore;
  public adminStore: AdminStore;

  constructor(history) {
    this.routerStore = new RouterStore(this, history);
    this.authStore = new AuthStore(this);
    this.snackbarStore = new SnackbarStore(this);
    this.adminStore = new AdminStore(this);
  }

  get stores() {
    return {
      [ROUTER_STORE]: this.routerStore,
      [AUTH_STORE]: this.authStore,
      [SNACKBAR_STORE]: this.snackbarStore,
      [ADMIN_STORE]: this.adminStore,
    };
  }
}

export const history = createBrowserHistory();

export const rootStore = new RootStore(history);
