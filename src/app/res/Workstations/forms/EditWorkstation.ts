import { APIRepo, FormModel } from '@mars-man/models';
import { WorkstationModel } from 'app/res/Workstations';
import { EditWorkstationDto } from './validators';

type edit_workstation_i = any;
export class EditWorkstationFormModel extends FormModel<edit_workstation_i> {
  constructor(public workstation: WorkstationModel) {
    super({
      validator: EditWorkstationDto,
      data: {
        name: workstation.name,
        user: {
          fullName: workstation.fullName,
          password: ''
        },
        properties: {
          resources: {
            cpuCount: workstation.cpuCount,
            memoryCount: workstation.memoryCount
          }
        }
      },
      keys: [
        ['cpuCount', { key: 'properties.resources.cpuCount', cast: Number }],
        [
          'memoryCount',
          { key: 'properties.resources.memoryCount', cast: Number },
        ],
        [
          'storageCount',
          { key: 'properties.resources.storageCount', cast: Number },
        ],
        ['fullName', 'user.fullName'],
        // ['email', 'user.email'],
        ['password', 'user.password'],
        // ['scalingMethod', 'properties.scalingMethod'],
      ],
      submit: new APIRepo({ path: workstation.api, method: 'PUT' }),
    });
  }

  get payload(){
    let data = super.payload

    if(data.user.password == ''){
      delete data.user.password
    }
    console.log("DATA", data)
    return data
  }
}