import { APIRepo, Model } from '@mars-man/models';
import { types } from 'app/constants';

export interface user_i {
  id: string;
  email: string;
  fullName: string;
}

export class BaseUserModel<T extends user_i> extends Model<T> {
  get fullName() {
    return this.data.fullName;
  }
  get id() {
    return this.data.id;
  }
  get email() {
    return this.data.email;
  }
}

export class UserModel extends BaseUserModel<user_i> {
  constructor() {
    super();

    this.repos = {
      main: new APIRepo({ path: this.api, events: types.USERLOAD }),
    };
  }

  get api() {
    return '/api/user';
  }
}