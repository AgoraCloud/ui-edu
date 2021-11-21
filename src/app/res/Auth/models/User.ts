import { APIRepo, Model, PeriodicRepo } from '@mars-man/models';
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
  userWorkstation: UserWorkstationModel;
  constructor() {
    super();

    this.repos = {
      main: new APIRepo({ path: this.api, events: types.USERLOAD }),
    };

    this.permissions = new UserPermissions(this);
    this.userWorkstation = new UserWorkstationModel();
  }

  get api() {
    return '/api/user';
  }
}

interface userWorkstationData_i {
  user: {
    id: string;
    fullName: string;
    email: string;
  };
  workspace: {
    id: string;
  };
  name: string;
  id: string;
  deployment: {
    id: string;
    status: string;
    properties: {
      proxyUrl: string;
      scalingMethod: 'ON_DEMAND' | 'ALWAYS_ON';
    };
  };
}
export class UserWorkstationModel extends Model<userWorkstationData_i> {
  start: APIRepo;
  constructor() {
    super();

    this.repos = {
      main: PeriodicRepo(new APIRepo({ path: this.api }), 5000),
    };

    this.start = new APIRepo({
      path: `${this.data?.workspace?.id}/deployments/${this.data?.deployment?.id}/on`,
      method: 'PUT',
    });
  }

  get deploymentScalingMethod(){
    return this.data.deployment.properties.scalingMethod;
  }

  get deploymentStatus() {
    return this.data.deployment.status;
  }

  get proxyUrl() {
    return this.data.deployment.properties.proxyUrl;
  }

  get api() {
    return `/api/workstation`;
  }
}