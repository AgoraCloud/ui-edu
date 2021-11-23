import { APIRepo, BaseRepo, events, MockRepo } from '@mars-man/models';

export { events };

// TODO add boolean flag for whether snackbar should show with event
interface eventType_i {
  [key: string]: {
    onLoad: {
      type: string;
      data: {
        message: string;
        variant: 'success' | 'error';
      };
    };
    onError: {
      type: string;
      data: {
        message: string;
        variant: 'success' | 'error';
      };
    };
  };
}

export const types = {
  USERLOAD: {
    onLoad: {
      type: 'USERLOAD',
      snackbar: false,
      data: {
        message: 'Successfully Loaded User!',
        variant: 'success',
      },
    },
    onError: {
      type: 'USERLOAD_ERR',
      snackbar: false,
      data: {
        message: 'Failed to Load User: ',
        variant: 'error',
      },
    },
  },
  SIGNIN: {
    onLoad: {
      type: 'SIGNIN',
      snackbar: true,
      data: {
        message: 'Successfully Logged In!',
        variant: 'success',
      },
    },
    onError: {
      type: 'SIGNIN_ERR',
      snackbar: true,
      data: {
        message: 'Failed to Login: ',
        variant: 'error',
      },
    },
  },
  SIGNOUT: {
    onLoad: {
      type: 'SIGNOUT',
      snackbar: false,
      data: {
        message: 'Signed out',
        variant: 'success',
      },
    },
    onError: {
      type: 'SIGNOUT_ERR',
      snackbar: false,
      data: {
        message: 'Failed to Signout: ',
        variant: 'error',
      },
    },
  },
  SIGNUP: {
    onLoad: {
      type: 'SIGNUP',
      snackbar: true,
      data: {
        message: 'Registered! Please check your email to verify your account.',
        variant: 'success',
      },
    },
    onError: {
      type: 'SIGNUP_ERR',
      snackbar: true,
      data: {
        message: 'Failed to Signup: ',
        variant: 'error',
      },
    },
  },

  WORKSTATION_CRUD: {
    onLoad: {
      type: 'WORKSPACE_CRUD',
      snackbar: true,
      data: {
        message: 'Workspace Successfully: ',
        variant: 'error',
      },
    },
    onError: {
      type: 'WORKSPACE_ERR',
      snackbar: true,
      data: {
        message: 'Workspace Failure: ',
        variant: 'success',
      },
    },
  },
};
