import {
  ROUTER_STORE,
  AUTH_STORE,
  SNACKBAR_STORE,
  ADMIN_STORE,
  WORKSTATIONS_STORE,
  UI_STORE,
} from 'app/constants';

import { createBrowserHistory } from 'history';

import {
  RouterStore,
  AuthStore,
  SnackbarStore,
  AdminStore,
  WorkstationsStore,
} from 'app/stores';
import { UIStore } from './UIStore';


export class RootStore {
  public routerStore: RouterStore;
  public authStore: AuthStore;
  public snackbarStore: SnackbarStore;
  public adminStore: AdminStore;
  public workstationsStore: WorkstationsStore;
  uistore: UIStore;

  constructor(history) {
    this.routerStore = new RouterStore(this, history);
    this.authStore = new AuthStore(this);
    this.snackbarStore = new SnackbarStore();
    this.adminStore = new AdminStore(this);
    this.workstationsStore = new WorkstationsStore(this);
    this.uistore = new UIStore(this)
  }

  get stores() {
    return {
      [ROUTER_STORE]: this.routerStore,
      [AUTH_STORE]: this.authStore,
      [SNACKBAR_STORE]: this.snackbarStore,
      [ADMIN_STORE]: this.adminStore,
      [WORKSTATIONS_STORE]: this.workstationsStore,
      [UI_STORE]: this.uistore
    };
  }
}

export const history = createBrowserHistory();

export const rootStore = new RootStore(history);
