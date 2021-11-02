import * as React from 'react';
import TextField, { StandardTextFieldProps } from '@material-ui/core/TextField';
import { observer } from 'mobx-react';
import { FormModel } from '@mars-man/models';

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