import { RootStore } from 'app/stores/RootStore';
import { extendObservable, makeObservable, observable } from 'mobx';
import { WorkstationModel, WorkstationsModel, UserWorkstationModel, DeploymentModel } from 'app/res/Workstations/models';
import { events } from '@mars-man/models';
import { types } from 'app/constants';

export class WorkstationsStore {
  workstations: WorkstationsModel;

  @observable
  count = 0;
  constructor(private rootStore: RootStore) {
    this.workstations = new WorkstationsModel();

    makeObservable(this);

    events.on(types.USERLOAD.onLoad.type, () => {
      this.workstations.load(); 
      console.log("USER LOAD")
    });

    // events.on(types.)
  }

  get selectedWorkstation(){
    const {wsid} = this.rootStore.routerStore.params

    return this.workstations.getBy('id', wsid)[0] as WorkstationModel|undefined
  }
}
