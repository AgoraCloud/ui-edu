import { APIRepo, FormModel } from '@mars-man/models';
import { CreateWorkstationDto } from './validators';

type create_workstation_i = any;
export class CreateWorkstationFormModel extends FormModel<create_workstation_i> {
  constructor() {
    super({
      validator: CreateWorkstationDto,
      data: {
        name: '',
        user: {
            fullName: '',
            email: '',
            password: '',
        },
        properties: {
            cpuCount: undefined,
            memoryCount: undefined,
            storageCount: undefined,
            scalingMethod: 'ALWAYS_ON',  
        },
      },
      keys: [
        ['cpuCount', { key: 'properties.cpuCount', cast: Number }],
        [
          'memoryCount',
          { key: 'properties.memoryCount', cast: Number },
        ],
        [
          'storageCount',
          { key: 'properties.storageCount', cast: Number },
        ],
        ['fullName', 'user.fullName'],
        ['email', 'user.email'],
        ['password', 'user.password'],
        ['scalingMethod', 'properties.scalingMethod'],
      ],
      submit: new APIRepo({ path: '/api/workstations', method: 'POST' }),
    });
  }
}