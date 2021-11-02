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
  WIKISECTIONS: {
    onLoad: {
      type: 'WIKISECTIONS_LOAD',
      data: {
        message: 'Wiki Section Successfully: ',
        variant: 'success',
      },
    },
    onError: {
      type: 'WIKISECTION_ERR',
      data: {
        message: 'Wiki Section Failure: ',
        variant: 'error',
      },
    },
  },
  WIKIPAGES: {
    onLoad: {
      type: 'WIKIPAGES_LOAD',
      data: {
        message: 'Wiki Page Successfully: ',
        variant: 'success',
      },
    },
    onError: {
      type: 'WIKIPAGES_ERR',
      data: {
        message: 'Wiki Page Failure: ',
        variant: 'error',
      },
    },
  },
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
  },
  SIGNUP: {
    type: 'SIGNUP',
    data: {
      message: 'Registered! Please check your email to verify your account.',
      variant: 'success',
    },
  },
  SIGNUP_ERR: {
    type: 'SIGNUP_ERR',
    data: {
      message: 'Failed to Signup: ',
      variant: 'error',
    },
  },
  VERIFY: {
    type: 'VERIFY',
    data: {
      message: 'Successfully Verified',
      variant: 'success',
    },
  },
  VERIFY_ERR: {
    type: 'VERIFY_ERR',
    data: {
      message: 'Failed to Verify: ',
      variant: 'error',
    },
  },
  PASSWORD_RESET: {
    type: 'PASSWORD_RESET',
    data: {
      message: 'Success: Please check your email to reset your password!',
      variant: 'success',
    },
  },
  PASSWORD_RESET_ERR: {
    type: 'PASSWORD_RESET_ERR',
    data: {
      message: 'Failure: ',
      variant: 'error',
    },
  },

  CHANGE_PASSWORD: {
    type: 'CHANGE_PASSWORD',
    data: {
      message: 'Successfully Changed Password',
      variant: 'success',
    },
  },
  CHANGE_PASSWORD_ERR: {
    type: 'CHANGE_PASSWORD_ERR',
    data: {
      message: 'Change Password Failed: ',
      variant: 'error',
    },
  },
  WORKSPACE_CRUD: {
    type: 'WORKSPACE_CRUD',
    data: {
      message: 'Workspace Successfully: ',
      variant: 'success',
    },
  },
  WORKSPACE_ERR: {
    type: 'WORKSPACE_ERR',
    data: {
      message: 'Workspace Failure: ',
      variant: 'error',
    },
  },
  DEPLOYMENT_CRUD: {
    type: 'DEPLOYMENT_CRUD',
    data: {
      message: 'Deployment Successfully: ',
      variant: 'success',
    },
  },
  DEPLOYMENT_ERR: {
    type: 'DEPLOYMENT_ERR',
    data: {
      message: 'Deployment Failure: ',
      variant: 'error',
    },
  },
  WIKI_CRUD: {
    type: 'WIKI_CRUD',
    data: {
      message: 'Wiki Successfully: ',
      variant: 'success',
    },
  },
  WIKI_ERR: {
    type: 'WIKI_ERR',
    data: {
      message: 'Wiki Failure: ',
      variant: 'error',
    },
  },
  USER_CRUD: {
    type: 'USER_CRUD',
    data: {
      message: 'User Successfully: ',
      variant: 'success',
    },
  },
  USER_ERR: {
    type: 'USER_ERR',
    data: {
      message: 'User Failure: ',
      variant: 'error',
    },
  },
  PROJECT_CRUD: {
    type: 'PROJECT_CRUD',
    data: {
      message: 'Project Successfully: ',
      variant: 'success',
    },
  },
  PROJECT_ERR: {
    type: 'PROJECT_ERR',
    data: {
      message: 'Project Failure: ',
      variant: 'error',
    },
  },
  PROJECT_LANE_CRUD: {
    type: 'PROJECT_LANE_CRUD',
    data: {
      message: 'Project Lane Successfully: ',
      variant: 'success',
    },
  },
  PROJECT_LANE_ERR: {
    type: 'PROJECT_LANE_ERR',
    data: {
      message: 'Project Lane Failure: ',
      variant: 'error',
    },
  },
  WORKSPACE_USER_CRUD: {
    type: 'WORKSPACE_USERS_CRUD',
    data: {
      message: 'Workspace User Successfully: ',
      variant: 'success',
    },
  },
  WORKSPACE_USER_ERR: {
    type: 'WORKSPACE_USERS_ERR',
    data: {
      message: 'Workspace User Failure: ',
      variant: 'error',
    },
  },
  LANE_TASK_CRUD: {
    type: 'LANE_TASKS_CRUD',
    data: {
      message: 'Project Task Successfully: ',
      variant: 'success',
    },
  },
  LANE_TASK_ERR: {
    type: 'LANE_TASKS_ERR',
    data: {
      message: 'Project Task Failure: ',
      variant: 'error',
    },
  },
};

// events.on(eventTypes.SIGNIN.type, (data)=>{
//   console.info("Hello World", data)
// })

// events.on('data', ()=>{
//   console.info("Data yo yo yo")
// })
// events.on('test123', ()=>{
//   console.info("test123 yoyoyoy ")
// })
// events.emit('data')

// const repo = new APIRepo({
//   path: '/api/user',
//   events: {
//     onLoad: {
//       type: 'test123',
//     }
//   }
// })

// await repo.call()

// console.log("Events Test ", repo.state)

// repo.onLoad.subscribe(()=>{
//   console.log("hello world123")
// })
