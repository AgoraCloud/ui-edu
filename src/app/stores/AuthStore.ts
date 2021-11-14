import { RootStore } from 'app/stores/RootStore';
import { makeObservable, observable } from 'mobx';
import {
  SignInFormModel,
} from 'app/res/Auth/forms';
import { UserModel } from 'app/res/Auth';
import { APIRepo, events } from '@mars-man/models';
import { types } from 'app/constants';

export class AuthStore {
  @observable state: 'loading' | 'loggedin' | 'unauthed';
  signinForm: SignInFormModel;
  user: UserModel;
  constructor(private rootStore: RootStore) {
    this.state = 'unauthed';
    this.signinForm = new SignInFormModel();

    this.user = new UserModel();
    this.loadUser();
    makeObservable(this);
    events.on(types.SIGNIN.onLoad.type, () => {
      this.loadUser();
    });
  }

  loadUser = async () => {
    this.state = 'loading';
    await this.user.load();
    await this.user.permissions.load()
    this.state = this.user.state == 'loaded' ? 'loggedin' : 'unauthed';
  };

  login = async () => {
    await this.signinForm.call();
    if (this.signinForm.submit.state == 'loaded') {
        this.rootStore.routerStore.push('/');
    }
  };
}
