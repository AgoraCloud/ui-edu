import { APIRepo, CollectionModel, Model } from '@mars-man/models';
import {
  CreateWorkstationFormModel, EditWorkstationFormModel
} from 'app/res/Workstations';
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
// {
//   "id": "6199b4105edf95001abc529d",
//   "createdAt": "2021-11-21T02:50:56.972Z",
//   "updatedAt": "2021-11-21T02:50:56.972Z",
//   "name": "test Workstation 2",
//   "user": {
//       "id": "6199b4105edf95001abc5299",
//       "fullName": "waleed",
//       "email": "waleed@student2.com"
//   },
//   "workspace": {
//       "id": "6199b4105edf95001abc529b",
//       "createdAt": "2021-11-21T02:50:56.938Z",
//       "updatedAt": "2021-11-21T02:50:56.938Z",
//       "name": "Default Workspace",
//       "users": [
//           {
//               "id": "6199b4105edf95001abc5299"
//           }
//       ]
//   },
//   "deployment": {
//       "id": "6199b4105edf95001abc529c",
//       "createdAt": "2021-11-21T02:50:56.951Z",
//       "updatedAt": "2021-11-22T02:12:00.041Z",
//       "name": "Default Deployment",
//       "status": "STOPPED",
//       "failureReason": null,
//       "properties": {
//           "isFavorite": true,
//           "proxyUrl": "p6199b4105edf95001abc529c.edu.agoracloud.saidghamra.com",
//           "scalingMethod": "ON_DEMAND",
//           "image": {
//               "type": "UBUNTU",
//               "version": "814b4f04"
//           },
//           "resources": {
//               "cpuCount": 2,
//               "memoryCount": 4,
//               "storageCount": 8
//           }
//       },
//       "workspace": {
//           "id": "6199b4105edf95001abc529b"
//       },
//       "user": {
//           "id": "6199b4105edf95001abc5299"
//       }
//   }
// }
interface workstationData_i {
  user: {
    id: string
    fullName: string
    email: string
  }
  name: string
  id: string
  workspace: {
    id: string
    createdAt: string
    updatedAt: string
    name: string
    users: [
        {
            id: string
        }
    ]
  };
  deployment: {
    id: string
    createdAt: string
    updatedAt: string
    name: string
    status: string
    failureReason: string
    properties: {
      isFavorite: true
      proxyUrl: string
      scalingMethod: "ON_DEMAND" | "ALWAYS_ON"
      image: {
        type: string
        version: string
      }
      resources: {
        cpuCount: number
        memoryCount: number
        storageCount: number
      }
    }
    workspace: {
      id: string
    },
    user: {
      id: string
    }
  };
}
export class WorkstationModel extends Model<workstationData_i> {
  /**
   * A single workstation
   */

  workstations: WorkstationsModel;

  // forms
  //updateWorkstation: UpdateWorkstationFormModel;

  delete: APIRepo;
  editWorkstationForm: EditWorkstationFormModel;
  constructor(config) {
    super(config);
    this.workstations = this.parent as WorkstationsModel;
    this.editWorkstationForm = new EditWorkstationFormModel(this)
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

    update(this, [this.editWorkstationForm.submit]);
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

  get fullName(){
    return this.data.user.fullName
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

  get cpuCount() {
    return this.data.deployment.properties.resources.cpuCount
  }
  get memoryCount() {
    return this.data.deployment.properties.resources.memoryCount
  }
  get storageCount() {
    return this.data.deployment.properties.resources.storageCount
  }

  onDelete = async () => {
    await this.delete.call();
    if (this.delete.state === 'loaded') rootStore.routerStore.push('/');
  };
}
