import { APIRepo, Model } from '@mars-man/models';
import { UserModel } from 'app/res/Auth';

interface permission_i {
  id: string;
  roles: string[];
  permissions: string[];
}
interface userPermissions_i extends permission_i {
  workspaces: { [wid: string]: permission_i };
}

export class PermissionsBase {
  constructor(public _array: string[]) {}
  get array() {
    return this._array || [];
  }
  has = (value: string): boolean => {
    return this.array.includes(value);
  };
}

export class PermissionsModel<T extends permission_i> extends Model<T> {}

export class UserPermissions extends PermissionsModel<userPermissions_i> {
  constructor(public user: UserModel) {
    super({});

    this.repos = {
      main: new APIRepo({
        path: this.api,
      }),
    };
  }

  get api() {
    return `/api/user/permissions`;
  }

  get permissions() {
    return new PermissionsBase(this.data.permissions);
    // return this.state === 'loaded' ? this.responseData.permissions : []
  }

  get roles() {
    return new PermissionsBase(this.data.roles);
    // return this.state === 'loaded' ? this.responseData.roles : []
  }
}

export class UserWorkspacePermissions {
  /**
   * Every UserModel has one of these
   *
   */
  constructor(public id: string, public data: permission_i) {}

  get permissions() {
    return new PermissionsBase(this.data.permissions);
  }

  get roles() {
    return new PermissionsBase(this.data.roles);
  }
}
