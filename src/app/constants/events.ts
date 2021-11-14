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

export const types: eventType_i = {
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
  },
  SIGNOUT: {
    onLoad: {
      type: 'SIGNOUT',
      data: {
        message: 'Signed out',
        variant: 'success',
      },
    },
    onError: {
      type: 'SIGNOUT_ERR',
      data: {
        message: 'Failed to Signout: ',
        variant: 'error',
      },
    },
  },
  SIGNUP: {
    onLoad: {
      type: 'SIGNUP',
      data: {
        message: 'Registered! Please check your email to verify your account.',
        variant: 'success',
      },
    },
    onError: {
      type: 'SIGNUP_ERR',
      data: {
        message: 'Failed to Signup: ',
        variant: 'error',
      },
    },
  },

  WORKSTATION_CRUD: {
    onLoad: {
      type: 'WORKSPACE_ERR',
      data: {
        message: 'Workspace Failure: ',
        variant: 'error',
      },
    },
    onError: {
      type: 'WORKSPACE_CRUD',
      data: {
        message: 'Workspace Successfully: ',
        variant: 'success',
      },
    },
  },
};
