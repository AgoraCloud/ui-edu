import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { makeStyles } from '@material-ui/core/styles';
import { Select, MenuItem, SelectProps } from '@material-ui/core';
import { FormModel } from '@mars-man/models';

const useStyles = makeStyles((theme) => ({
  root: {
    color: 'white',
    '& .MuiOutlinedInput-notchedOutline': {
      color: 'white',
      borderColor: 'white',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white',
    },
  },
  input: {
    '&::selection': {
      // backgroundColor: "lightgreen",
      color: 'white',
    },
  },
}));
const useLabelStyles = makeStyles({
  root: {
    color: 'white',
    '&.Mui-focused': {
      color: 'white',
    },
  },
});

interface BaseSelectProps extends SelectProps {
  form: FormModel;
  id: string;
  options: { label: string; value: any }[];
}

export const BaseSelect = observer((props: BaseSelectProps) => {
  /**
   *  Material UI Select doesn't work well with Objects, as such I've casted them to strings using JSON.stringify()
   *  and on change I parse the value back to an object
   *
   *  that means that this only works for Objects currently
   */
  const { form, id, options, ...rest } = props;
  const value = form.get(id);
  const error = form.getError(id);

  return (
    <Select
      // native
      error={value && error != undefined}
      value={value}
      style={{ width: '100%' }}
      onChange={form.onChange(id)}
      variant="outlined"
      {...rest}
    >
      {options.map((option) => {
        // JSON.stringify(option.value) ???
        return (
          <MenuItem key={option.label} value={option.value}>
            {option.label}
          </MenuItem>
        );
      })}
    </Select>
  );
});