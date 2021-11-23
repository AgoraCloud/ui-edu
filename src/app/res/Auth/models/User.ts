import { APIRepo,
  Model,
  PeriodicRepo, } from '@mars-man/models';
import { types } from 'app/constants';
import { UserPermissions } from 'app/res/Auth';

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
  permissions: UserPermissions;
  
  constructor() {
    super();

    this.repos = {
      main: new APIRepo({ path: this.api, events: types.USERLOAD }),
    };

    this.permissions = new UserPermissions(this);
    
  }

  get api() {
    return '/api/user';
  }
}