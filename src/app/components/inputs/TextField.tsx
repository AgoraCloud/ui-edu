import * as React from 'react';
import TextField, { StandardTextFieldProps } from '@material-ui/core/TextField';
import { observer } from 'mobx-react';

interface InputProps extends StandardTextFieldProps {
  form: FormModel;
  id: string;
  workspaceCheck?: boolean;
  defaultVal?: number;
}
export const Input = observer((props: InputProps) => {
  const { form, id, children, workspaceCheck, defaultVal, ...rest } = props;
  const value = form.get(id);
  // const error = form.getError(id)
  const error = form.errors[id];
  // console.log(id, error, val)
  if (workspaceCheck) {
    // val = String(defaultVal);
  }
  return (
    <TextField
      onChange={form.onChange(id)}
      error={value && error != undefined}
      helperText={value ? error : undefined} // to be implemented (currently all errors are just 'error')
      value={value}
      variant="outlined"
      margin="normal"
      autoComplete="off"
      required
      fullWidth
      id={id}
      name={id}
      defaultValue={workspaceCheck && Number(value)}
      {...rest}
    >
      {children}
    </TextField>
  );
});

import MemoryIcon from '@material-ui/icons/Memory';
import MoneyIcon from '@material-ui/icons/Money';
import StorageIcon from '@material-ui/icons/Storage';
import {
  InputAdornment,
  makeStyles,
  Checkbox,
  Typography,
} from '@material-ui/core';
import { FormModel } from '@mars-man/models';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1, 0, 1, 0),
  },
  subtitle: {
    margin: theme.spacing(1, 0, 1, 0),
    color: 'inherit',
    variant: 'subtitle1',
  },
}));

export const ResourcesInput = (props: { form: FormModel }) => {
  const classes = useStyles();
  const { form } = props;

  const [persist, setPersist] = React.useState(true);

  const handleCheckbox = () => {
    form.onChange('storageCount')(persist ? undefined : 8);
    setPersist(!persist);
  };

  return (
    <>
      <CPUMemoryInput form={form} />
      <Typography>
        <Checkbox
          checked={persist}
          onChange={handleCheckbox}
          name="checkedB"
          color="primary"
        />
        Persist deployment
      </Typography>
      {persist ? (
        <Input
          form={form}
          className={classes.margin}
          margin="dense"
          id="storageCount"
          label="Storage"
          type="number"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <StorageIcon />
              </InputAdornment>
            ),
          }}
          fullWidth
        />
      ) : null}
    </>
  );
};

interface UpdateWorkspaceProps {
  check: boolean;
  values?: {
    cpu: number | undefined;
    ram: number | undefined;
    storage: number | undefined;
  };
}

export const CPUMemoryInput = ({
  form,
}: {
  form: FormModel<{ cpuCount?: number; memoryCount?: number }>;
}) => {
  return (
    <>
      <CPUInput form={form} />
      <MemoryInput form={form} />
    </>
  );
};

export const StorageInput = ({
  form,
}: {
  form: FormModel<{ storageCount?: number }>;
}) => {
  return (
    <ResourceInput
      form={form}
      id="storageCount"
      label="Storage"
      icon={<StorageIcon />}
    />
  );
};

export const CPUInput = ({
  form,
}: {
  form: FormModel<{ cpuCount?: number }>;
}) => {
  return (
    <ResourceInput
      form={form}
      id="cpuCount"
      label="CPU Cores"
      icon={<MemoryIcon />}
    />
  );
};

export const MemoryInput = ({
  form,
}: {
  form: FormModel<{ memoryCount?: number }>;
}) => {
  return (
    <ResourceInput
      form={form}
      id="memoryCount"
      label="RAM (GBs)"
      icon={<MoneyIcon />}
    />
  );
};

export const ResourceInput = ({ form, id, icon, label }) => {
  const classes = useStyles();

  return (
    <Input
      form={form}
      className={classes.margin}
      margin="dense"
      id={id}
      label={label}
      type="number"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">{icon}</InputAdornment>
        ),
      }}
      defaultVal={form.get(id)}
      fullWidth
    />
  );
};