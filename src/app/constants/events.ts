import { APIRepo, BaseRepo, events, MockRepo } from '@mars-man/models';

export { events };

export const types = {
  USERLOAD: {
    onLoad: {
      type: 'USERLOAD',
      data: {
        message: 'Successfully Loaded User!',
        variant: 'success',
      },
    },
    onError: {
      type: 'USERLOAD_ERR',
      data: {
        message: 'Failed to Load User: ',
        variant: 'error',
      },
    },
  },
  SIGNIN: {
    onLoad: {
      type: 'SIGNIN',
      data: {
        message: 'Successfully Logged In!',
        variant: 'success',
      },
    },
    onError: {
      type: 'SIGNIN_ERR',
      data: {
        message: 'Failed to Login: ',
        variant: 'error',
      },
    },
  }
};

export const eventTypes = {
  SIGNIN: {
    type: 'SIGNIN',
    data: {
      message: 'Successfully Logged In!',
      variant: 'success',
    },
  },
  SIGNIN_ERR: {
    type: 'SIGNIN',
    data: {
      message: 'Failed to Login: ',
      variant: 'error',
    },
  }
};