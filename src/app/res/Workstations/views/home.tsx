import * as React from 'react';
import { observer } from 'mobx-react';
import { AddFAB } from 'app/components/inputs';
import { RenderIf, RenderIfRole } from 'app/components/RouteGuards';
import { Role } from 'app/constants';

export const WorkstationHome = observer(() => {
  //const { workspacesstore, uistore } = useStores();
  //const workspaces = workspacesstore.workspaces;
  //const selectedWorkspace = workspacesstore.selectedWorkspace;
  //if (!selectedWorkspace) return null;
  // console.log("SELECTED WORKSPACE", selectedWorkspace)
  return (
      <div>
      <h1>Home</h1>
      <RenderIfRole roles={[Role.SuperAdmin]}>
        <AddFAB link={`/ws/new`} />
      </RenderIfRole>
      
      </div>
  );
});
