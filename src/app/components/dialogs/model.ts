import { makeObservable, observable } from 'mobx';
import { FormModel } from '@mars-man/models';





interface confirmDelete_i {
  name: string;
}

export class DialogModel {
  @observable
  open = false;
  constructor(open?: boolean) {
    this.open = open || false;
    makeObservable(this);
  }
  onOpen = () => {
    this.open = true;
    console.log('OPEN', this);
  };
  onClose = () => {
    this.open = false;
  };
}





import { IsNotEmpty, IsString } from 'class-validator';

export class ConfirmDeleteValidator {
  @IsString()
  @IsNotEmpty()
  name: string;
}

export class ConfirmDeleteModel extends FormModel<confirmDelete_i> {
  dialog: DialogModel;
  public callBack: () => any;
  @observable
  public name: string;
  constructor() {
    super({ validator: ConfirmDeleteValidator, data: { name: '' } });
    this.dialog = new DialogModel();
    makeObservable(this);
  }

  get valid() {
    return this.data.name === this.name;
  }

  setTarget = (name, callBack) => {
    this.name = name;
    this.callBack = callBack;
  };

  submit = async () => {
    if (this.valid) {
      await this.callBack();
      this.dialog.onClose();
      this.reset();
    }
  };

  reset = () => {
    this.data.name = '';
  };
}
