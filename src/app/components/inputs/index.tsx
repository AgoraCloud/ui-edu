import * as React from 'react';
import { Typography } from '@material-ui/core';

export * from './TextField';
export * from './buttons';
export * from './select';

export const Label = (props) => {
  return <Typography variant="h6">{props.children}</Typography>;
};
