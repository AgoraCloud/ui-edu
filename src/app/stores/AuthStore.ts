import { RootStore } from 'app/stores/RootStore';
import { makeObservable, observable } from 'mobx';
import {
  SignInFormModel,
} from 'app/res/Auth/forms';
import { UserModel } from 'app/res/Auth';
import { APIRepo, events } from '@mars-man/models';
import { types } from 'app/constants';
import { UserWorkstationModel, DeploymentModel } from 'app/res/Workstations/models';

export class AuthStore {
  @observable state: 'loading' | 'loggedin' | 'unauthed';
  signinForm: SignInFormModel;
  user: UserModel;
  userWorkstation: UserWorkstationModel;
  deployment: DeploymentModel;
  constructor(private rootStore: RootStore) {
    this.state = 'unauthed';
    this.signinForm = new SignInFormModel();

    this.user = new UserModel();
    this.userWorkstation = new UserWorkstationModel();
    this.loadUser();
    makeObservable(this);
    events.on(types.SIGNIN.onLoad.type, () => {
      this.loadUser();
    });
  }

  loadUser = async () => {
    this.state = 'loading';
    await this.user.load();
    console.log(this.user)
    await this.user.permissions.load();
    await this.userWorkstation.load();
    this.deployment = new DeploymentModel(this.userWorkstation);
    await this.deployment.load();
    this.state = this.user.state == 'loaded' ? 'loggedin' : 'unauthed';
  };

  login = async () => {
    await this.signinForm.call();
    if (this.signinForm.submit.state == 'loaded') {
        this.rootStore.routerStore.push('/');
    }
  };
}
