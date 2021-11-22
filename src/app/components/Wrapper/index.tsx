import * as React from 'react';
// import * as style from './style.scss'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

export * from './AuthWrapper';

/**
 * Code Sourced from: https://github.com/mui-org/material-ui/tree/master/docs/src/pages/getting-started/templates/dashboard
 * https://material-ui.com/getting-started/templates/dashboard/
 */

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: 'flex',
    },
    // appBarSpacer: theme.mixins.toolbar,
    content: {
      overflow: 'auto',
      boxSizing: 'border-box',
      // flexGrow: 0,
      width: '100%',
      height: `calc(100vh - 72px)`,
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
      height: '100%',
    },
    fixedHeight: {
      height: 240,
    },
  };
});


const proxyStyles = makeStyles (() => {
  return {
    root:{
      margin: '0px',
      padding: '0px',
      overflow: 'hidden',
    }
  }
});


export const ProxyWrapper = (props: {
  children: React.ReactChild | React.ReactChild[];
}) => {
  const classes = proxyStyles();
  const { children } = props;
  return (
    <main className={classes.root}>{children}</main>
  );
};

interface HomeWrapper_i {
  children: React.ReactChild | React.ReactChild[];
}

export const HomeWrapper = (props: HomeWrapper_i) => {
  const classes = useStyles();
  const { children } = props;
  return (
    <div className={classes.root}>
      {/* <CssBaseline /> */}
      <main className={classes.content}>
        {/* <div className={classes.appBarSpacer} /> */}
        <Container maxWidth={false} className={classes.container}>
          {children}
        </Container>
      </main>
    </div>
  );
};
