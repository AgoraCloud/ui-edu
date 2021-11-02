import * as React from 'react';
import { Paper, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    transform: 'translateY(-50%)',
    top: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    width: '500px',
  },
}));

export const AuthPaper = (props) => {
  const classes = useStyles();
  return <Paper className={classes.paper}>{props.children}</Paper>;
};