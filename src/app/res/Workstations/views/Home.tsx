import * as React from 'react';
import { observer } from 'mobx-react';
import { AddFAB } from 'app/components/inputs';
import { RenderIfRole } from 'app/components/RouteGuards';
import { Role } from 'app/constants';
import { WorkstationsTable } from 'app/res/Workstations';
import { DeploymentProxy } from 'app/res/Workstations/views/Proxy'
import { useStores } from 'app/stores';

export const WorkstationHome = observer(() => {
    const { authstore } = useStores();
    const deployment = authstore.deployment
    
    return (
        <div>
        <RenderIfRole roles={[Role.SuperAdmin]}>
          <WorkstationsTable/>
          <AddFAB link={`/ws/new`} />
        </RenderIfRole>
        <RenderIfRole roles={[Role.User]}>
          <DeploymentProxy deployment={deployment} />
        </RenderIfRole>
        
        </div>
    );
  });
