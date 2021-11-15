import { makeObservable, observable } from 'mobx';
import { ConfirmDeleteModel } from 'app/components/dialogs';
import { RootStore } from './RootStore';
import { Model } from '@mars-man/models';

export class UIStore extends Model {
  confirmDelete: ConfirmDeleteModel;
  @observable count = 0;
  @observable sideBarOpen = false;
  constructor(public rootStore: RootStore) {
    super({});
    this.confirmDelete = new ConfirmDeleteModel();
    this.forms = {
      confirmDelete: this.confirmDelete,
    };
    makeObservable(this);
  }

  setDeleteTarget = (name, callBack) => {
    this.confirmDelete.setTarget(name, callBack);
    this.confirmDelete.dialog.onOpen();
  };

  toggleSidebar = () => {
    this.sideBarOpen = !this.sideBarOpen;
  };
}
