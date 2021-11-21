import { APIRepo, CollectionModel, Model, PeriodicRepo } from '@mars-man/models';
import {
  CreateWorkstationFormModel
} from 'app/res/Workstations/forms';
import { add, reload, remove, update } from 'app/constants/helpers';
import { rootStore } from 'app/stores';

export class WorkstationsModel extends CollectionModel {
  /**
   * Collection of workstation objects
   */

  createWorkstationForm: CreateWorkstationFormModel;
  constructor() {
    super({
      collections: WorkstationModel,
    });

    this.createWorkstationForm = new CreateWorkstationFormModel();

    add(this, this.createWorkstationForm.submit);
    this.repos = {
      main: new APIRepo({ path: this.api }),
      create: new APIRepo({ path: this.api, method: 'POST' }),
    };
  }

  get api() {
    return '/api/workstations';
  }

  get workstations(): WorkstationModel[] {
    return (this.collection.models || []) as WorkstationModel[];
  }

  get selectedWorkstation() {
    return this.workstations[0];
  }

  get workstationUrl() {
    return `/ws/${this.selectedWorkstation.id}`;
  }
  
  postLoad = async () => {
    console.log('workstations loaded');
  };
}

interface workstationData_i {
  user: {
    id: string;
    fullName: string;
    email: string;
  };
  name: string;
  id: string;
  workspace: string;
  deployment: string;
}
export class WorkstationModel extends Model<workstationData_i> {
  /**
   * A single workstation
   */

  workstations: WorkstationsModel;

  // forms
  //updateWorkstation: UpdateWorkstationFormModel;

  delete: APIRepo;
  constructor(config) {
    super(config);
    this.workstations = this.parent as WorkstationsModel;

    this.repos = {
      update: new APIRepo({ path: this.api, method: 'PUT' }),
    };

    // Repos
    this.delete = new APIRepo({ path: this.api, method: 'DELETE' });

    // Forms
    //this.updateWorkstation = new UpdateWorkstationFormModel(this); //To be implemented later

    // this.forms = {
    //   update: this.updateWorkstation,
    // };

    //update(this, this.updateWorkstation.submit);
    remove(this, this.delete);
  }

  get id() {
    return this.data.id;
  }

  get name() {
    return this.data.name;
  }

  get user() {
    return this.data.user;
  }

  get link() {
    /**
     * @info has trailing slash
     */
    return `/ws/${this.id}`;
  }

  get api() {
    /**
     * /api/workspaces/{wid}
     */
    return `/api/workstations/${this.id}`;
  }

  onDelete = async () => {
    await this.delete.call();
    if (this.delete.state === 'loaded') rootStore.routerStore.push('/');
  };
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
  };
}

export class UserWorkstationModel extends Model<userWorkstationData_i> {
  constructor() {
    super();

    this.repos = {
      main: new APIRepo({ path: this.api }),
    };
  }

  get workspaceId() {
    return this.data.workspace.id;
  }

  get deploymentId(){
    return this.data.deployment.id;
  }

  get api() {
    return `/api/workstation`;
  }
}

interface deploymentData_i {
  name: string;
  properties: {
    image: {
      type: string;
      version: string;
    };
    name: string;
    tag: string;
    proxyUrl: string;
    scalingMethod: 'ON_DEMAND' | 'ALWAYS_ON';
    isFavorite: boolean;
    resources: {
      cpuCount: number;
      memoryCount: number;
      storageCount?: number;
    };
  };
  status: string;
  user: string;
  workspace: string;
  __v: number;
  id: string;
}

export class DeploymentModel extends Model<deploymentData_i> {
  start: APIRepo;
  stop: APIRepo;
  constructor(public userWorkstation: UserWorkstationModel) {
    super();

    this.repos = {
      main: PeriodicRepo(new APIRepo({ path: this.api }), 5000)
      // main: new APIRepo({ path: this.api }),
    };

    this.start = new APIRepo({
      path: `${this.api}/on`,
      method: 'PUT',
    });
    this.stop = new APIRepo({
      path: `${this.api}/off`,
      method: 'PUT',
    });
  }

  postLoad = async () => {
    console.log('deployment loaded');
  };

  get scalingMethod() {
    return this.data.properties.scalingMethod;
  }

  get status() {
    return this.data.status;
  }

  get id() {
    return this.data.id;
  }

  get api() {
    return `/api/workspaces/${this.userWorkstation.workspaceId}/deployments/${this.userWorkstation.deploymentId}`;
  }

  get proxyUrl() {
    return this.data.properties.proxyUrl;
  }
}
