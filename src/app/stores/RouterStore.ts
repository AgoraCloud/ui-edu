import { History } from 'history';
import {
  RouterStore as BaseRouterStore,
  syncHistoryWithStore,
} from 'mobx-react-router';
import { RootStore } from 'app/stores';
import { makeObservable } from 'mobx';
console.log("yo")
export class RouterStore extends BaseRouterStore {
  constructor(public rootStore: RootStore, history?: History) {
    super();
    if (history) {
      this.history = syncHistoryWithStore(history, this);
    }
    makeObservable(this);
  }

  get params(): any {
    const patterns = [
      /\/w\/(?<wid>[a-zA-Z0-9]{24})/,
    ];
    let out = {};
    for (const pattern of patterns) {
      const matches = this.location.pathname.match(pattern);
      out = {
        ...(matches?.groups || {}),
        ...out,
      };
    }
    return out;
  }
}
