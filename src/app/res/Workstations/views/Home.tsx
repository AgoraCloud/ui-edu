import * as React from 'react';
import { observer } from 'mobx-react';
import { AddFAB } from 'app/components/inputs';
import { RenderIfRole } from 'app/components/RouteGuards';
import { Role } from 'app/constants';
import { WorkstationsTable } from 'app/res/Workstations';
import { DeploymentProxy } from 'app/res/Workstations/views/Proxy'

export const WorkstationHome = observer(() => {
    //const { workspacesstore, uistore } = useStores();
    //const workspaces = workspacesstore.workspaces;
    //const selectedWorkspace = workspacesstore.selectedWorkspace;
    //if (!selectedWorkspace) return null;
    // console.log("SELECTED WORKSPACE", selectedWorkspace)
    
    return (
        <div>
        <RenderIfRole roles={[Role.SuperAdmin]}>
          <WorkstationsTable/>
          <AddFAB link={`/ws/new`} />
        </RenderIfRole>
        <RenderIfRole roles={[Role.User]}>
          <DeploymentProxy />
        </RenderIfRole>
        
        </div>
    );
  });
