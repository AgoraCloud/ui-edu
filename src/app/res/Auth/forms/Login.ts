import { SignInDto } from '@agoracloud/common';
import { APIRepo, FormModel } from '@mars-man/models';
import { eventTypes } from 'app/constants';

interface signin_i {
  email: string;
  password: string;
}
export class SignInFormModel extends FormModel<signin_i> {
  constructor() {
    super({
      data: {
        email: '',
        password: '',
      },
      validator: SignInDto,
      submit: new APIRepo({
        path: '/api/auth/login',
        method: 'POST',
        events: {
          onLoad: eventTypes.SIGNIN,
          onError: eventTypes.SIGNIN_ERR,
        },
      }),
    });
  }
}
