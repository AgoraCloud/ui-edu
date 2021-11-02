import { Container, CssBaseline } from '@material-ui/core';
import * as React from 'react';
import { AuthPaper } from 'app/components/paper';

export const AuthWrapper = (props) => {
  const { children } = props;
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <AuthPaper>{children}</AuthPaper>
    </Container>
  );
};
