import * as React from 'react';
import {
  Fab,
  Button,
  ButtonProps,
  IconButton,
  Menu,
  MenuItem,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { ROUTER_STORE } from 'app/constants';
import { RouterStore, useStores } from 'app/stores';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { FormModel } from '@mars-man/models';

export const BaseFAB = (props: {
  onClick: () => any;
  children: React.ReactElement;
}) => {
  const { onClick, children } = props;
  return (
    <Fab
      color="primary"
      aria-label="add"
      style={{
        position: 'absolute',
        bottom: '40px',
        right: '50px',
      }}
      onClick={onClick}
    >
      {children}
    </Fab>
  );
};
export const AddFABBase = (props: { onClick: () => any }) => {
  const { onClick } = props;
  return (
    <Fab
      color="primary"
      aria-label="add"
      style={{
        position: 'absolute',
        bottom: '40px',
        right: '50px',
      }}
      onClick={onClick}
    >
      <AddIcon />
    </Fab>
  );
};
export const AddFAB = observer((props: { link: string }) => {
  const { routerstore } = useStores();
  const { link } = props;
  return (
    <AddFABBase
      onClick={() => {
        routerstore.push(link);
      }}
    />
  );
});

interface LinkButtonProps extends ButtonProps {
  to: string;
}
export const LinkButton = (props: LinkButtonProps) => {
  return (
    <Button
      variant="contained"
      color="primary"
      style={{ bottom: 3, right: 3, position: 'absolute' }}
      component={Link}
      {...props}
    >
      {props.children}
    </Button>
  );
};

interface CancelCreateButtonsProps {
    form: FormModel;
    cancel?: () => any;
    submit?: () => any;
    labels?: [string, string];
  }
  export const CancelCreateButtons = observer(
    (props: CancelCreateButtonsProps) => {
      const { routerstore } = useStores();
  
      const { form, labels } = props;
      const defaultCancel = routerstore.goBack;
      const defaultSubmit = async () => {
        await form.call();
        if (form.submit.state == 'loaded') {
          routerstore.goBack();
        }
      };
  
      const cancel = props.cancel || defaultCancel;
      const submit = props.submit || defaultSubmit;
  
      const [label1, label2] = labels || ['Cancel', 'Create'];
  
      const { isValid } = form;
      return (
        <div style={{ float: 'right' }}>
          <Button onClick={cancel} color="primary">
            {label1}
          </Button>
  
          {/*  */}
          {/* fix the forms before doing this */}
          <Button onClick={submit} disabled={!isValid} color="primary">
            {label2}
          </Button>
        </div>
      );
    },
  );
