import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { WORKSTATIONS_STORE, ROUTER_STORE } from 'app/constants';
import { WorkstationsStore, RouterStore, useStores } from 'app/stores';
import { makeStyles } from '@material-ui/core/styles';
import {
  ScalingMethodSelect,
} from 'app/res/Workstations';

// form dialogue
import Button from '@material-ui/core/Button';
import {
  Input,
  CPUMemoryInput,
  Label,
  CancelCreateButtons,
  StorageInput,
  ResourcesInput
} from 'app/components/inputs';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1, 0, 1, 0),
  },
  description: {
    paddingTop: '10px',
    paddingBottom: '5px',
  },
}));

export const CreateWorkstationForm = observer((props) => {
  const classes = useStyles();
  const { workstationsstore } = useStores();
  const form = workstationsstore.workstations.createWorkstationForm;

  return (
    <>
      <Typography variant="h4">Create Workstation</Typography>
      <Typography variant="body1" className={classes.description}>
        Please fill out the form below and press 'Create' to create a workstation.
      </Typography>
      <Input
        autoFocus
        form={form}
        className={classes.margin}
        margin="dense"
        id="name"
        label="Workstation Name"
        type="text"
        fullWidth
      />
      <Label>User Info</Label>
      <Typography variant="body1" className={classes.description}>
        Please fill in the details of the Workstation user. 
      </Typography>
      <Input
        form={form}
        className={classes.margin}
        margin="dense"
        id="fullName"
        label="Full Name"
        type="text"
        fullWidth
      />
      <Input
        form={form}
        className={classes.margin}
        margin="dense"
        id="email"
        label="Email"
        type="text"
        fullWidth
      />
      <Input
        form={form}
        className={classes.margin}
        margin="dense"
        id="password"
        label="Password"
        type="text"
        fullWidth
      />
      <Label>Resources</Label>
      <Typography variant="body1">
        Specify the maximum amount of resources the workstation can use.
      </Typography>
      <CPUMemoryInput form={form} />
      <StorageInput form={form} />
      <Label>Scaling Method</Label>
      <ScalingMethodSelect form={form} />
      <CancelCreateButtons form={form} />
      {/* {console.log(form)} */}
    </>
  );
});