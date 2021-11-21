var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { F as FormModel, l as lib, A as APIRepo, M as Model, P as PeriodicRepo, o as observable, m as makeObservable, e as events, a as mobxReactRouter, I as IsDefined, b as ApiProperty, V as ValidateNested, T as Type, c as Min, d as IsInt, f as IsString, g as IsNotEmpty, h as IsEnum, i as MinLength, C as CollectionModel, j as observer, k as makeStyles, r as react, n as TextField, p as default_1, q as default_1$1, s as default_1$2, t as InputAdornment, B as Button, u as Fab, v as default_1$3, w as IconButton, x as default_1$4, y as Menu, z as MenuItem, S as Select, D as Typography, E as DialogTitle, G as DialogContent, H as DialogContentText, J as DialogActions, K as Dialog, L as createBrowserHistory, N as Paper, O as withSnackbar, Q as SnackbarProvider, R as TableContainer, U as Table, W as TableHead, X as TableRow, Y as TableCell, Z as TableBody, _ as TablePagination, $ as React, a0 as Route, a1 as Redirect, a2 as Container, a3 as CssBaseline, a4 as Avatar, a5 as default_1$5, a6 as Router, a7 as Switch, a8 as createTheme, a9 as configure, aa as reactDom, ab as ThemeProvider, ac as Provider } from "./vendor.a49c0572.js";
const p = function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
};
p();
class AdminStore {
  constructor(rootStore2) {
    this.rootStore = rootStore2;
  }
}
const ROUTER_STORE = "routerstore";
const AUTH_STORE = "authstore";
const SNACKBAR_STORE = "snackbarstore";
const ADMIN_STORE = "adminstore";
const WORKSTATIONS_STORE = "workstationsstore";
const UI_STORE = "uistore";
const types = {
  USERLOAD: {
    onLoad: {
      type: "USERLOAD",
      data: {
        message: "Successfully Loaded User!",
        variant: "success"
      }
    },
    onError: {
      type: "USERLOAD_ERR",
      data: {
        message: "Failed to Load User: ",
        variant: "error"
      }
    }
  },
  SIGNIN: {
    onLoad: {
      type: "SIGNIN",
      data: {
        message: "Successfully Logged In!",
        variant: "success"
      }
    },
    onError: {
      type: "SIGNIN_ERR",
      data: {
        message: "Failed to Login: ",
        variant: "error"
      }
    }
  },
  SIGNOUT: {
    onLoad: {
      type: "SIGNOUT",
      data: {
        message: "Signed out",
        variant: "success"
      }
    },
    onError: {
      type: "SIGNOUT_ERR",
      data: {
        message: "Failed to Signout: ",
        variant: "error"
      }
    }
  },
  SIGNUP: {
    onLoad: {
      type: "SIGNUP",
      data: {
        message: "Registered! Please check your email to verify your account.",
        variant: "success"
      }
    },
    onError: {
      type: "SIGNUP_ERR",
      data: {
        message: "Failed to Signup: ",
        variant: "error"
      }
    }
  },
  WORKSTATION_CRUD: {
    onLoad: {
      type: "WORKSPACE_ERR",
      data: {
        message: "Workspace Failure: ",
        variant: "error"
      }
    },
    onError: {
      type: "WORKSPACE_CRUD",
      data: {
        message: "Workspace Successfully: ",
        variant: "success"
      }
    }
  }
};
var Role;
(function(Role2) {
  Role2["User"] = "user";
  Role2["SuperAdmin"] = "super_admin";
})(Role || (Role = {}));
const add = (collection, repo) => {
  repo.onLoad.subscribe(() => {
    collection.add(repo.data);
  });
};
const remove = (model, repo) => {
  repo.onLoad.subscribe(() => {
    model.remove();
  });
};
class SignInFormModel extends FormModel {
  constructor() {
    super({
      data: {
        email: "",
        password: ""
      },
      validator: lib.SignInDto,
      submit: new APIRepo({
        path: "/api/auth/login",
        method: "POST",
        events: types.SIGNIN
      })
    });
  }
}
class BaseUserModel extends Model {
  get fullName() {
    return this.data.fullName;
  }
  get id() {
    return this.data.id;
  }
  get email() {
    return this.data.email;
  }
}
class UserModel extends BaseUserModel {
  constructor() {
    super();
    __publicField(this, "permissions");
    __publicField(this, "userWorkstation");
    this.repos = {
      main: new APIRepo({ path: this.api, events: types.USERLOAD })
    };
    this.permissions = new UserPermissions(this);
    this.userWorkstation = new UserWorkstationModel();
  }
  get api() {
    return "/api/user";
  }
}
class UserWorkstationModel extends Model {
  constructor() {
    super();
    __publicField(this, "start");
    var _a, _b, _c, _d;
    this.repos = {
      main: PeriodicRepo(new APIRepo({ path: this.api }), 5e3)
    };
    this.start = new APIRepo({
      path: `${(_b = (_a = this.data) == null ? void 0 : _a.workspace) == null ? void 0 : _b.id}/deployments/${(_d = (_c = this.data) == null ? void 0 : _c.deployment) == null ? void 0 : _d.id}/on`,
      method: "PUT"
    });
  }
  get deploymentScalingMethod() {
    return this.data.deployment.properties.scalingMethod;
  }
  get deploymentStatus() {
    return this.data.deployment.status;
  }
  get proxyUrl() {
    return this.data.deployment.properties.proxyUrl;
  }
  get api() {
    return `/api/workstation`;
  }
}
class PermissionsBase {
  constructor(_array) {
    __publicField(this, "has", (value) => {
      return this.array.includes(value);
    });
    this._array = _array;
  }
  get array() {
    return this._array || [];
  }
}
class PermissionsModel extends Model {
}
class UserPermissions extends PermissionsModel {
  constructor(user) {
    super({});
    this.user = user;
    this.repos = {
      main: new APIRepo({
        path: this.api
      })
    };
  }
  get api() {
    return `/api/user/permissions`;
  }
  get permissions() {
    return new PermissionsBase(this.data.permissions);
  }
  get roles() {
    return new PermissionsBase(this.data.roles);
  }
}
var __defProp$5 = Object.defineProperty;
var __getOwnPropDesc$5 = Object.getOwnPropertyDescriptor;
var __decorateClass$5 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$5(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$5(target, key, result);
  return result;
};
class AuthStore {
  constructor(rootStore2) {
    __publicField(this, "state");
    __publicField(this, "signinForm");
    __publicField(this, "user");
    __publicField(this, "loadUser", async () => {
      this.state = "loading";
      await this.user.load();
      console.log(this.user);
      await this.user.permissions.load();
      await this.user.userWorkstation.load();
      this.state = this.user.state == "loaded" ? "loggedin" : "unauthed";
    });
    __publicField(this, "login", async () => {
      await this.signinForm.call();
      if (this.signinForm.submit.state == "loaded") {
        this.rootStore.routerStore.push("/");
      }
    });
    this.rootStore = rootStore2;
    this.state = "unauthed";
    this.signinForm = new SignInFormModel();
    this.user = new UserModel();
    this.loadUser();
    makeObservable(this);
    events.on(types.SIGNIN.onLoad.type, () => {
      this.loadUser();
    });
  }
}
__decorateClass$5([
  observable
], AuthStore.prototype, "state", 2);
class RouterStore extends mobxReactRouter.exports.RouterStore {
  constructor(rootStore2, history2) {
    super();
    this.rootStore = rootStore2;
    if (history2) {
      this.history = mobxReactRouter.exports.syncHistoryWithStore(history2, this);
    }
    makeObservable(this);
  }
  get params() {
    const patterns = [
      /\/w\/(?<wid>[a-zA-Z0-9]{24})/
    ];
    let out = {};
    for (const pattern of patterns) {
      const matches = this.location.pathname.match(pattern);
      out = __spreadValues(__spreadValues({}, (matches == null ? void 0 : matches.groups) || {}), out);
    }
    return out;
  }
}
var __defProp$4 = Object.defineProperty;
var __getOwnPropDesc$4 = Object.getOwnPropertyDescriptor;
var __decorateClass$4 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$4(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$4(target, key, result);
  return result;
};
class SnackbarStore {
  constructor() {
    __publicField(this, "alerts", []);
    this.initEvents();
    makeObservable(this);
  }
  push(alert) {
    this.alerts.push(__spreadValues({
      key: new Date().getTime() + Math.random(),
      autoHideDuration: 6e3
    }, alert));
  }
  get() {
    return this.alerts;
  }
  remove(alert) {
    return () => {
      this.alerts = this.alerts.filter((a) => {
        a.key != alert.key;
      });
    };
  }
  initEvents() {
    Object.values(types).forEach((v) => {
      [v.onLoad, v.onError].map((e) => {
        events.on(e.type, (data) => {
          this.push({
            message: e.data.message,
            variant: e.data.variant
          });
        });
      });
    });
  }
}
__decorateClass$4([
  observable
], SnackbarStore.prototype, "alerts", 2);
var __defProp$3 = Object.defineProperty;
var __getOwnPropDesc$3 = Object.getOwnPropertyDescriptor;
var __decorateClass$3 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$3(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$3(target, key, result);
  return result;
};
class CreateWorkstationPropertiesDto {
  constructor(obj) {
    __publicField(this, "cpuCount");
    __publicField(this, "memoryCount");
    __publicField(this, "storageCount");
    __publicField(this, "scalingMethod");
    Object.assign(this, obj);
  }
}
__decorateClass$3([
  Min(1),
  IsInt(),
  ApiProperty({ minimum: 1 })
], CreateWorkstationPropertiesDto.prototype, "cpuCount", 2);
__decorateClass$3([
  Min(2),
  IsInt(),
  ApiProperty({ minimum: 2 })
], CreateWorkstationPropertiesDto.prototype, "memoryCount", 2);
__decorateClass$3([
  Min(8),
  IsInt(),
  ApiProperty({ minimum: 8 })
], CreateWorkstationPropertiesDto.prototype, "storageCount", 2);
__decorateClass$3([
  IsString(),
  IsNotEmpty(),
  IsEnum(lib.DeploymentScalingMethodDto),
  ApiProperty({
    enum: lib.DeploymentScalingMethodDto,
    type: lib.DeploymentScalingMethodDto
  })
], CreateWorkstationPropertiesDto.prototype, "scalingMethod", 2);
class CreateWorkstationDto {
  constructor(obj) {
    __publicField(this, "name");
    __publicField(this, "user");
    __publicField(this, "properties");
    Object.assign(this, obj);
  }
}
__decorateClass$3([
  IsString(),
  IsNotEmpty(),
  MinLength(1),
  ApiProperty({ minLength: 1 })
], CreateWorkstationDto.prototype, "name", 2);
__decorateClass$3([
  IsDefined(),
  ApiProperty(),
  ValidateNested(),
  Type(() => lib.CreateUserDto)
], CreateWorkstationDto.prototype, "user", 2);
__decorateClass$3([
  IsDefined(),
  ApiProperty(),
  ValidateNested(),
  Type(() => CreateWorkstationPropertiesDto)
], CreateWorkstationDto.prototype, "properties", 2);
class CreateWorkstationFormModel extends FormModel {
  constructor() {
    super({
      validator: CreateWorkstationDto,
      data: {
        name: "",
        user: {
          fullName: "",
          email: "",
          password: ""
        },
        properties: {
          cpuCount: void 0,
          memoryCount: void 0,
          storageCount: void 0,
          scalingMethod: "ALWAYS_ON"
        }
      },
      keys: [
        ["cpuCount", { key: "properties.cpuCount", cast: Number }],
        [
          "memoryCount",
          { key: "properties.memoryCount", cast: Number }
        ],
        [
          "storageCount",
          { key: "properties.storageCount", cast: Number }
        ],
        ["fullName", "user.fullName"],
        ["email", "user.email"],
        ["password", "user.password"],
        ["scalingMethod", "properties.scalingMethod"]
      ],
      submit: new APIRepo({ path: "/api/workstations", method: "POST" })
    });
  }
}
class WorkstationsModel extends CollectionModel {
  constructor() {
    super({
      collections: WorkstationModel
    });
    __publicField(this, "createWorkstationForm");
    __publicField(this, "postLoad", async () => {
      console.log("workstations loaded");
    });
    this.createWorkstationForm = new CreateWorkstationFormModel();
    add(this, this.createWorkstationForm.submit);
    this.repos = {
      main: new APIRepo({ path: this.api }),
      create: new APIRepo({ path: this.api, method: "POST" })
    };
  }
  get api() {
    return "/api/workstations";
  }
  get workstations() {
    return this.collection.models || [];
  }
  get selectedWorkstation() {
    return this.workstations[0];
  }
  get workstationUrl() {
    return `/ws/${this.selectedWorkstation.id}`;
  }
}
class WorkstationModel extends Model {
  constructor(config) {
    super(config);
    __publicField(this, "workstations");
    __publicField(this, "delete");
    __publicField(this, "onDelete", async () => {
      await this.delete.call();
      if (this.delete.state === "loaded")
        rootStore.routerStore.push("/");
    });
    this.workstations = this.parent;
    this.repos = {
      update: new APIRepo({ path: this.api, method: "PUT" })
    };
    this.delete = new APIRepo({ path: this.api, method: "DELETE" });
    remove(this, this.delete);
  }
  get id() {
    return this.data.id;
  }
  get name() {
    return this.data.name;
  }
  get user() {
    return this.data.user;
  }
  get link() {
    return `/ws/${this.id}`;
  }
  get api() {
    return `/api/workstations/${this.id}`;
  }
}
var __defProp$2 = Object.defineProperty;
var __getOwnPropDesc$2 = Object.getOwnPropertyDescriptor;
var __decorateClass$2 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$2(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$2(target, key, result);
  return result;
};
class WorkstationsStore {
  constructor(rootStore2) {
    __publicField(this, "workstations");
    __publicField(this, "count", 0);
    this.rootStore = rootStore2;
    this.workstations = new WorkstationsModel();
    makeObservable(this);
    events.on(types.USERLOAD.onLoad.type, () => {
      this.workstations.load();
      console.log("USER LOAD");
    });
  }
}
__decorateClass$2([
  observable
], WorkstationsStore.prototype, "count", 2);
const Input = observer((props) => {
  const _a = props, { form, id, children, workspaceCheck, defaultVal } = _a, rest = __objRest(_a, ["form", "id", "children", "workspaceCheck", "defaultVal"]);
  const value = form.get(id);
  const error = form.errors[id];
  return /* @__PURE__ */ react.exports.createElement(TextField, __spreadValues({
    onChange: form.onChange(id),
    error: value && error != void 0,
    helperText: value ? error : void 0,
    value,
    variant: "outlined",
    margin: "normal",
    autoComplete: "off",
    required: true,
    fullWidth: true,
    id,
    name: id,
    defaultValue: workspaceCheck && Number(value)
  }, rest), children);
});
const useStyles$4 = makeStyles((theme2) => ({
  margin: {
    margin: theme2.spacing(1, 0, 1, 0)
  },
  subtitle: {
    margin: theme2.spacing(1, 0, 1, 0),
    color: "inherit",
    variant: "subtitle1"
  }
}));
const CPUMemoryInput = ({
  form
}) => {
  return /* @__PURE__ */ react.exports.createElement(react.exports.Fragment, null, /* @__PURE__ */ react.exports.createElement(CPUInput, {
    form
  }), /* @__PURE__ */ react.exports.createElement(MemoryInput, {
    form
  }));
};
const StorageInput = ({
  form
}) => {
  return /* @__PURE__ */ react.exports.createElement(ResourceInput, {
    form,
    id: "storageCount",
    label: "Storage",
    icon: /* @__PURE__ */ react.exports.createElement(default_1, null)
  });
};
const CPUInput = ({
  form
}) => {
  return /* @__PURE__ */ react.exports.createElement(ResourceInput, {
    form,
    id: "cpuCount",
    label: "CPU Cores",
    icon: /* @__PURE__ */ react.exports.createElement(default_1$1, null)
  });
};
const MemoryInput = ({
  form
}) => {
  return /* @__PURE__ */ react.exports.createElement(ResourceInput, {
    form,
    id: "memoryCount",
    label: "RAM (GBs)",
    icon: /* @__PURE__ */ react.exports.createElement(default_1$2, null)
  });
};
const ResourceInput = ({ form, id, icon, label }) => {
  const classes = useStyles$4();
  return /* @__PURE__ */ react.exports.createElement(Input, {
    form,
    className: classes.margin,
    margin: "dense",
    id,
    label,
    type: "number",
    InputProps: {
      startAdornment: /* @__PURE__ */ react.exports.createElement(InputAdornment, {
        position: "start"
      }, icon)
    },
    defaultVal: form.get(id),
    fullWidth: true
  });
};
const AddFABBase = (props) => {
  const { onClick } = props;
  return /* @__PURE__ */ react.exports.createElement(Fab, {
    color: "primary",
    "aria-label": "add",
    style: {
      position: "absolute",
      bottom: "40px",
      right: "50px"
    },
    onClick
  }, /* @__PURE__ */ react.exports.createElement(default_1$3, null));
};
const AddFAB = observer((props) => {
  const { routerstore } = useStores();
  const { link } = props;
  return /* @__PURE__ */ react.exports.createElement(AddFABBase, {
    onClick: () => {
      routerstore.push(link);
    }
  });
});
const CancelCreateButtons = observer((props) => {
  const { routerstore } = useStores();
  const { form, labels } = props;
  const defaultCancel = routerstore.goBack;
  const defaultSubmit = async () => {
    await form.call();
    if (form.submit.state == "loaded") {
      routerstore.goBack();
    }
  };
  const cancel = props.cancel || defaultCancel;
  const submit = props.submit || defaultSubmit;
  const [label1, label2] = labels || ["Cancel", "Create"];
  const { isValid } = form;
  return /* @__PURE__ */ react.exports.createElement("div", {
    style: { float: "right" }
  }, /* @__PURE__ */ react.exports.createElement(Button, {
    onClick: cancel,
    color: "primary"
  }, label1), /* @__PURE__ */ react.exports.createElement(Button, {
    onClick: submit,
    disabled: !isValid,
    color: "primary"
  }, label2));
});
const MoreMenu = (props) => {
  const { options } = props;
  const [anchorEl, setAnchorEl] = react.exports.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const onClick = (option) => {
    return () => {
      option.onClick();
      handleClose();
    };
  };
  return /* @__PURE__ */ react.exports.createElement(react.exports.Fragment, null, /* @__PURE__ */ react.exports.createElement(IconButton, {
    "aria-label": "more",
    "aria-controls": "long-menu",
    "aria-haspopup": "true",
    onClick: handleClick
  }, /* @__PURE__ */ react.exports.createElement(default_1$4, null)), /* @__PURE__ */ react.exports.createElement(Menu, {
    id: "long-menu",
    anchorEl,
    keepMounted: true,
    open,
    onClose: handleClose
  }, options.map((option) => /* @__PURE__ */ react.exports.createElement(MenuItem, {
    key: option.name,
    onClick: onClick(option)
  }, option.name))));
};
makeStyles((theme2) => ({
  root: {
    color: "white",
    "& .MuiOutlinedInput-notchedOutline": {
      color: "white",
      borderColor: "white"
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "white"
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "white"
    }
  },
  input: {
    "&::selection": {
      color: "white"
    }
  }
}));
makeStyles({
  root: {
    color: "white",
    "&.Mui-focused": {
      color: "white"
    }
  }
});
const BaseSelect = observer((props) => {
  const _a = props, { form, id, options } = _a, rest = __objRest(_a, ["form", "id", "options"]);
  const value = form.get(id);
  const error = form.getError(id);
  return /* @__PURE__ */ react.exports.createElement(Select, __spreadValues({
    error: value && error != void 0,
    value,
    style: { width: "100%" },
    onChange: form.onChange(id),
    variant: "outlined"
  }, rest), options.map((option) => {
    return /* @__PURE__ */ react.exports.createElement(MenuItem, {
      key: option.label,
      value: option.value
    }, option.label);
  }));
});
const Label = (props) => {
  return /* @__PURE__ */ react.exports.createElement(Typography, {
    variant: "h6"
  }, props.children);
};
const ConfirmDeleteDialog = observer(() => {
  const { uistore } = useStores();
  const form = uistore.confirmDelete;
  const { dialog, submit, name } = form;
  return /* @__PURE__ */ react.exports.createElement(BaseDialog, {
    dialog
  }, /* @__PURE__ */ react.exports.createElement(DialogTitle, null, "Confirm Delete"), /* @__PURE__ */ react.exports.createElement(DialogContent, null, /* @__PURE__ */ react.exports.createElement(DialogContentText, null, "Are you sure you want to delete", /* @__PURE__ */ react.exports.createElement("br", null), name), /* @__PURE__ */ react.exports.createElement(Input, {
    autoFocus: true,
    form,
    error: !form.valid,
    helperText: `type ${name} to delete`,
    margin: "dense",
    id: "name",
    label: "Confirm Delete",
    type: "text",
    fullWidth: true
  })), /* @__PURE__ */ react.exports.createElement(DialogActions, null, /* @__PURE__ */ react.exports.createElement(Button, {
    onClick: dialog.onClose,
    color: "secondary"
  }, "Cancel"), /* @__PURE__ */ react.exports.createElement(Button, {
    onClick: submit,
    disabled: !form.valid,
    color: "primary"
  }, "Delete")));
});
var __defProp$1 = Object.defineProperty;
var __getOwnPropDesc$1 = Object.getOwnPropertyDescriptor;
var __decorateClass$1 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$1(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$1(target, key, result);
  return result;
};
class DialogModel {
  constructor(open) {
    __publicField(this, "open", false);
    __publicField(this, "onOpen", () => {
      this.open = true;
      console.log("OPEN", this);
    });
    __publicField(this, "onClose", () => {
      this.open = false;
    });
    this.open = open || false;
    makeObservable(this);
  }
}
__decorateClass$1([
  observable
], DialogModel.prototype, "open", 2);
class ConfirmDeleteValidator {
  constructor() {
    __publicField(this, "name");
  }
}
__decorateClass$1([
  IsString(),
  IsNotEmpty()
], ConfirmDeleteValidator.prototype, "name", 2);
class ConfirmDeleteModel extends FormModel {
  constructor() {
    super({ validator: ConfirmDeleteValidator, data: { name: "" } });
    __publicField(this, "dialog");
    __publicField(this, "callBack");
    __publicField(this, "name");
    __publicField(this, "setTarget", (name, callBack) => {
      this.name = name;
      this.callBack = callBack;
    });
    __publicField(this, "submit", async () => {
      if (this.valid) {
        await this.callBack();
        this.dialog.onClose();
        this.reset();
      }
    });
    __publicField(this, "reset", () => {
      this.data.name = "";
    });
    this.dialog = new DialogModel();
    makeObservable(this);
  }
  get valid() {
    return this.data.name === this.name;
  }
}
__decorateClass$1([
  observable
], ConfirmDeleteModel.prototype, "name", 2);
const BaseDialog = observer(({ dialog, children }) => {
  const { open, onClose } = dialog;
  return /* @__PURE__ */ react.exports.createElement(Dialog, {
    open,
    onClose
  }, children);
});
var __defProp2 = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp2(target, key, result);
  return result;
};
class UIStore extends Model {
  constructor(rootStore2) {
    super({});
    __publicField(this, "confirmDelete");
    __publicField(this, "count", 0);
    __publicField(this, "sideBarOpen", false);
    __publicField(this, "setDeleteTarget", (name, callBack) => {
      this.confirmDelete.setTarget(name, callBack);
      this.confirmDelete.dialog.onOpen();
    });
    __publicField(this, "toggleSidebar", () => {
      this.sideBarOpen = !this.sideBarOpen;
    });
    this.rootStore = rootStore2;
    this.confirmDelete = new ConfirmDeleteModel();
    this.forms = {
      confirmDelete: this.confirmDelete
    };
    makeObservable(this);
  }
}
__decorateClass([
  observable
], UIStore.prototype, "count", 2);
__decorateClass([
  observable
], UIStore.prototype, "sideBarOpen", 2);
class RootStore {
  constructor(history2) {
    __publicField(this, "routerStore");
    __publicField(this, "authStore");
    __publicField(this, "snackbarStore");
    __publicField(this, "adminStore");
    __publicField(this, "workstationsStore");
    __publicField(this, "uistore");
    this.routerStore = new RouterStore(this, history2);
    this.authStore = new AuthStore(this);
    this.snackbarStore = new SnackbarStore();
    this.adminStore = new AdminStore(this);
    this.workstationsStore = new WorkstationsStore(this);
    this.uistore = new UIStore(this);
  }
  get stores() {
    return {
      [ROUTER_STORE]: this.routerStore,
      [AUTH_STORE]: this.authStore,
      [SNACKBAR_STORE]: this.snackbarStore,
      [ADMIN_STORE]: this.adminStore,
      [WORKSTATIONS_STORE]: this.workstationsStore,
      [UI_STORE]: this.uistore
    };
  }
}
const history = createBrowserHistory();
const rootStore = new RootStore(history);
const storesContext = react.exports.createContext(rootStore.stores);
const useStores = () => react.exports.useContext(storesContext);
const useStyles$3 = makeStyles((theme2) => ({
  paper: {
    position: "absolute",
    transform: "translateY(-50%)",
    top: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    width: "500px"
  }
}));
const AuthPaper = (props) => {
  const classes = useStyles$3();
  return /* @__PURE__ */ react.exports.createElement(Paper, {
    className: classes.paper
  }, props.children);
};
let displayed = [];
const Notifier = withSnackbar(observer((props) => {
  const { snackbarstore } = useStores();
  console.log(snackbarstore.alerts);
  snackbarstore.alerts.forEach((alert) => {
    const _a = alert, { message } = _a, rest = __objRest(_a, ["message"]);
    if (displayed.includes(alert.key))
      return;
    props.enqueueSnackbar(message, rest);
    displayed = [...displayed, alert.key];
    snackbarstore.remove(alert);
  });
  return null;
}));
const SnackbarManager = (props) => {
  return /* @__PURE__ */ react.exports.createElement(SnackbarProvider, {
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "left"
    }
  }, /* @__PURE__ */ react.exports.createElement(Notifier, null));
};
const useStyles$2 = makeStyles({
  root: {
    width: "100%"
  },
  container: {
    maxHeight: 580
  },
  heading: {
    marginBottom: "20px"
  }
});
const PaginatedTable = (props) => {
  const classes = useStyles$2();
  const { columns: columns2, rows } = props;
  const [page, setPage] = react.exports.useState(0);
  const [rowsPerPage, setRowsPerPage] = react.exports.useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return /* @__PURE__ */ react.exports.createElement(Paper, {
    className: classes.root
  }, /* @__PURE__ */ react.exports.createElement(TableContainer, {
    className: classes.container
  }, /* @__PURE__ */ react.exports.createElement(Table, {
    stickyHeader: true,
    "aria-label": "sticky table"
  }, /* @__PURE__ */ react.exports.createElement(TableHead, null, /* @__PURE__ */ react.exports.createElement(TableRow, null, columns2.map((column) => /* @__PURE__ */ react.exports.createElement(TableCell, {
    key: column.id,
    align: column.align,
    style: { minWidth: column.minWidth }
  }, column.label)))), /* @__PURE__ */ react.exports.createElement(TableBody, null, rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
    return /* @__PURE__ */ react.exports.createElement(TableRow, {
      hover: true,
      role: "checkbox",
      tabIndex: -1,
      key: row.id
    }, columns2.map((column) => {
      const value = row[column.id];
      return /* @__PURE__ */ react.exports.createElement(TableCell, {
        key: column.id,
        align: column.align
      }, value);
    }));
  })))), /* @__PURE__ */ react.exports.createElement(TablePagination, {
    rowsPerPageOptions: [10, 25, 100],
    component: "div",
    count: rows.length,
    rowsPerPage,
    page,
    onPageChange: handleChangePage,
    onRowsPerPageChange: handleChangeRowsPerPage
  }));
};
const LoadingPage = () => {
  return /* @__PURE__ */ React.createElement("div", null, "Loading...");
};
const AdminAuthedRoute = observer((props) => {
  return /* @__PURE__ */ react.exports.createElement(Route, __spreadProps(__spreadValues({}, props), {
    component: observer(() => {
      const { authstore } = useStores();
      if (authstore.state == "unauthed")
        return /* @__PURE__ */ react.exports.createElement(Redirect, {
          to: "/login"
        });
      switch (authstore.state) {
        case "loggedin":
          if (authstore.user.permissions.roles.has(Role.SuperAdmin)) {
            return /* @__PURE__ */ react.exports.createElement(Route, __spreadValues({}, props));
          }
        default:
          return /* @__PURE__ */ react.exports.createElement(Redirect, {
            to: "/"
          });
      }
    })
  }));
});
const UnauthedRoute = (props) => {
  return /* @__PURE__ */ react.exports.createElement(Route, __spreadProps(__spreadValues({}, props), {
    component: observer(() => {
      const { authstore } = useStores();
      switch (authstore.state) {
        case "loggedin": {
          return /* @__PURE__ */ react.exports.createElement(Redirect, {
            to: "/"
          });
        }
        case "loading": {
          return /* @__PURE__ */ react.exports.createElement(LoadingPage, null);
        }
        case "unauthed": {
          return /* @__PURE__ */ react.exports.createElement(Route, {
            component: props.component
          });
        }
      }
      return null;
    })
  }));
};
const AuthedRoute = (props) => {
  return /* @__PURE__ */ react.exports.createElement(Route, __spreadProps(__spreadValues({}, props), {
    component: observer(() => {
      const { authstore } = useStores();
      switch (authstore.state) {
        case "loggedin": {
          return /* @__PURE__ */ react.exports.createElement(Route, {
            component: props.component
          });
        }
        case "loading": {
          return /* @__PURE__ */ react.exports.createElement(LoadingPage, null);
        }
        case "unauthed": {
          return /* @__PURE__ */ react.exports.createElement(Redirect, {
            to: "/login"
          });
        }
      }
      return null;
    })
  }));
};
const RenderIfHas = (props) => {
  const { array, permissions } = props;
  let allow = false;
  for (const perm of array) {
    if (permissions.has(perm)) {
      allow = true;
      break;
    }
  }
  if (allow)
    return /* @__PURE__ */ react.exports.createElement(react.exports.Fragment, null, props.children);
  return null;
};
const RenderIfRole = observer((props) => {
  const { authstore } = useStores();
  const { roles } = props;
  let perms = authstore.user.permissions.roles;
  return /* @__PURE__ */ react.exports.createElement(RenderIfHas, {
    array: roles,
    permissions: perms
  }, props.children);
});
const AuthWrapper = (props) => {
  const { children } = props;
  return /* @__PURE__ */ react.exports.createElement(Container, {
    component: "main",
    maxWidth: "xs"
  }, /* @__PURE__ */ react.exports.createElement(CssBaseline, null), /* @__PURE__ */ react.exports.createElement(AuthPaper, null, children));
};
const useStyles$1 = makeStyles((theme2) => {
  return {
    root: {
      display: "flex"
    },
    content: {
      overflow: "auto",
      boxSizing: "border-box",
      width: "100%",
      height: `calc(100vh - 64px)`
    },
    container: {
      paddingTop: theme2.spacing(4),
      paddingBottom: theme2.spacing(4),
      height: "100%"
    },
    fixedHeight: {
      height: 240
    }
  };
});
const ProxyWrapper = (props) => {
  const classes = useStyles$1();
  const { children } = props;
  return /* @__PURE__ */ react.exports.createElement("div", {
    className: classes.root
  }, /* @__PURE__ */ react.exports.createElement("main", {
    className: classes.content
  }, children));
};
const HomeWrapper = (props) => {
  const classes = useStyles$1();
  const { children } = props;
  return /* @__PURE__ */ react.exports.createElement("div", {
    className: classes.root
  }, /* @__PURE__ */ react.exports.createElement("main", {
    className: classes.content
  }, /* @__PURE__ */ react.exports.createElement(Container, {
    maxWidth: false,
    className: classes.container
  }, children)));
};
const Login = observer((props) => {
  const { authstore } = useStores();
  const form = authstore.signinForm;
  return /* @__PURE__ */ react.exports.createElement(AuthWrapper, null, /* @__PURE__ */ react.exports.createElement(Avatar, null, /* @__PURE__ */ react.exports.createElement(default_1$5, null)), /* @__PURE__ */ react.exports.createElement(Typography, {
    component: "h1",
    variant: "h5"
  }, "Log in"), /* @__PURE__ */ react.exports.createElement(Input, {
    form,
    id: "email",
    label: "Email Address",
    autoFocus: true
  }), /* @__PURE__ */ react.exports.createElement(Input, {
    form,
    id: "password",
    type: "password",
    label: "Password",
    autoComplete: "current-password"
  }), /* @__PURE__ */ react.exports.createElement(Button, {
    fullWidth: true,
    variant: "contained",
    color: "primary",
    type: "submit",
    onClick: authstore.login,
    disabled: !form.isValid
  }, "Log In"));
});
const iframeWrapper = "_iframeWrapper_10gan_1";
const iframe = "_iframe_10gan_1";
var style = {
  iframeWrapper,
  iframe
};
const DeploymentProxy = observer((props) => {
  const [state, setState] = react.exports.useState("loading");
  const { authstore } = useStores();
  const deploymentProxyUrl = authstore.user.userWorkstation.proxyUrl;
  if (!deploymentProxyUrl)
    return null;
  if (authstore.user.userWorkstation.deploymentScalingMethod === "ON_DEMAND") {
    if (authstore.user.userWorkstation.deploymentStatus === "STOPPED") {
      authstore.user.userWorkstation.start.call();
      return /* @__PURE__ */ react.exports.createElement("div", null, "Please wait your deployment is starting...");
    }
  }
  return /* @__PURE__ */ react.exports.createElement(ProxyWrapper, null, /* @__PURE__ */ react.exports.createElement("iframe", {
    id: style.iframe,
    src: `https://${deploymentProxyUrl}`,
    onLoad: () => {
      setState("loaded");
    }
  }));
});
const WorkstationHome = observer(() => {
  return /* @__PURE__ */ react.exports.createElement("div", null, /* @__PURE__ */ react.exports.createElement(RenderIfRole, {
    roles: [Role.SuperAdmin]
  }, /* @__PURE__ */ react.exports.createElement(WorkstationsTable, null), /* @__PURE__ */ react.exports.createElement(AddFAB, {
    link: `/ws/new`
  })), /* @__PURE__ */ react.exports.createElement(RenderIfRole, {
    roles: [Role.User]
  }, /* @__PURE__ */ react.exports.createElement(DeploymentProxy, null)));
});
const useStyles = makeStyles((theme2) => ({
  margin: {
    margin: theme2.spacing(1, 0, 1, 0)
  },
  description: {
    paddingTop: "10px",
    paddingBottom: "5px"
  }
}));
const CreateWorkstationForm = observer((props) => {
  const classes = useStyles();
  const { workstationsstore } = useStores();
  const form = workstationsstore.workstations.createWorkstationForm;
  return /* @__PURE__ */ react.exports.createElement(react.exports.Fragment, null, /* @__PURE__ */ react.exports.createElement(Typography, {
    variant: "h4"
  }, "Create Workstation"), /* @__PURE__ */ react.exports.createElement(Typography, {
    variant: "body1",
    className: classes.description
  }, "Please fill out the form below and press 'Create' to create a workstation."), /* @__PURE__ */ react.exports.createElement(Input, {
    autoFocus: true,
    form,
    className: classes.margin,
    margin: "dense",
    id: "name",
    label: "Workstation Name",
    type: "text",
    fullWidth: true
  }), /* @__PURE__ */ react.exports.createElement(Label, null, "User Info"), /* @__PURE__ */ react.exports.createElement(Typography, {
    variant: "body1",
    className: classes.description
  }, "Please fill in the details of the Workstation user."), /* @__PURE__ */ react.exports.createElement(Input, {
    form,
    className: classes.margin,
    margin: "dense",
    id: "fullName",
    label: "Full Name",
    type: "text",
    fullWidth: true
  }), /* @__PURE__ */ react.exports.createElement(Input, {
    form,
    className: classes.margin,
    margin: "dense",
    id: "email",
    label: "Email",
    type: "text",
    fullWidth: true
  }), /* @__PURE__ */ react.exports.createElement(Input, {
    form,
    className: classes.margin,
    margin: "dense",
    id: "password",
    label: "Password",
    type: "text",
    fullWidth: true
  }), /* @__PURE__ */ react.exports.createElement(Label, null, "Resources"), /* @__PURE__ */ react.exports.createElement(Typography, {
    variant: "body1"
  }, "Specify the maximum amount of resources the workstation can use."), /* @__PURE__ */ react.exports.createElement(CPUMemoryInput, {
    form
  }), /* @__PURE__ */ react.exports.createElement(StorageInput, {
    form
  }), /* @__PURE__ */ react.exports.createElement(Label, null, "Scaling Method"), /* @__PURE__ */ react.exports.createElement(ScalingMethodSelect, {
    form
  }), /* @__PURE__ */ react.exports.createElement(CancelCreateButtons, {
    form
  }));
});
const EditWorkstation = (props) => {
  return /* @__PURE__ */ React.createElement("h1", null, "Edit Workstation");
};
const NewWorkstation = () => {
  return /* @__PURE__ */ react.exports.createElement(HomeWrapper, null, /* @__PURE__ */ react.exports.createElement(CreateWorkstationForm, null));
};
const ScalingMethodSelect = observer((props) => {
  const { form } = props;
  const options = [
    {
      value: "ALWAYS_ON",
      label: "Always On"
    },
    {
      value: "ON_DEMAND",
      label: "On Demand"
    }
  ];
  const scalingMethod = form.get("scalingMethod");
  const onChange = (id) => {
    return (e) => {
      form.onChange(id)(e.target.value);
    };
  };
  return /* @__PURE__ */ react.exports.createElement(react.exports.Fragment, null, /* @__PURE__ */ react.exports.createElement(BaseSelect, __spreadProps(__spreadValues({}, props), {
    id: "type",
    label: "Type",
    defaultValue: options[0],
    options,
    onChange: onChange("scalingMethod"),
    value: scalingMethod
  })));
});
const columns = [
  {
    id: "name",
    label: "Workstation Name"
  },
  {
    id: "fullName",
    label: "Full Name"
  },
  {
    id: "email",
    label: "Email"
  },
  {
    id: "menu",
    label: "",
    align: "right",
    minWidth: 50
  }
];
const WorkstationsTable = observer(() => {
  const { workstationsstore, routerstore, uistore } = useStores();
  const workstations = workstationsstore.workstations;
  console.log(workstations.state);
  if (workstations.state !== "loaded")
    return null;
  const rows = workstations.map((workstation) => {
    return {
      email: workstation.user.email,
      fullName: workstation.user.fullName,
      name: workstation.name,
      menu: /* @__PURE__ */ react.exports.createElement(MoreMenu, {
        options: [
          {
            name: "Delete",
            onClick: () => {
              uistore.setDeleteTarget(workstation.name, workstation.onDelete);
            }
          },
          {
            name: "Edit",
            onClick: () => {
              routerstore.push(`/ws/${workstation.id}/edit`);
            }
          }
        ]
      })
    };
  });
  return /* @__PURE__ */ react.exports.createElement(react.exports.Fragment, null, /* @__PURE__ */ react.exports.createElement(Typography, {
    variant: "h4"
  }, "Workstations"), /* @__PURE__ */ react.exports.createElement(PaginatedTable, {
    columns,
    rows
  }));
});
const App = ({ history: history2 }) => {
  return /* @__PURE__ */ react.exports.createElement(Router, {
    history: history2
  }, /* @__PURE__ */ react.exports.createElement(Switch, null, /* @__PURE__ */ react.exports.createElement(UnauthedRoute, {
    path: "/login",
    component: Login
  }), /* @__PURE__ */ react.exports.createElement(AdminAuthedRoute, {
    path: "/ws/:wid/edit",
    component: EditWorkstation
  }), /* @__PURE__ */ react.exports.createElement(AdminAuthedRoute, {
    path: "/ws/new",
    component: NewWorkstation
  }), /* @__PURE__ */ react.exports.createElement(AdminAuthedRoute, {
    path: "/ws",
    component: NewWorkstation
  }), /* @__PURE__ */ react.exports.createElement(AuthedRoute, {
    path: "/",
    component: WorkstationHome
  })), /* @__PURE__ */ react.exports.createElement(ConfirmDeleteDialog, null));
};
const theme = createTheme({
  palette: {
    primary: {
      main: "#2196f3",
      light: "#4dabf5",
      dark: "#1769aa",
      contrastText: "#fff"
    },
    secondary: {
      main: "#ff9100",
      light: "#ffa733",
      dark: "#b26500",
      contrastText: "#000"
    }
  },
  overrides: {
    MuiAvatar: {
      root: {
        backgroundColor: "#ff9100"
      }
    },
    MuiButton: {
      root: {
        margin: "20px"
      }
    }
  }
});
configure({
  isolateGlobalState: true,
  enforceActions: "never"
});
reactDom.exports.render(/* @__PURE__ */ react.exports.createElement(ThemeProvider, {
  theme
}, /* @__PURE__ */ react.exports.createElement(Provider, __spreadValues({}, rootStore.stores), /* @__PURE__ */ react.exports.createElement(App, {
  history
}), /* @__PURE__ */ react.exports.createElement(SnackbarManager, null))), document.getElementById("root"));
