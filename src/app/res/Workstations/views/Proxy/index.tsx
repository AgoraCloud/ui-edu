import * as React from 'react';
import style from './style.module.scss';
import { inject, observer } from 'mobx-react';
import { ProxyWrapper } from 'app/components/Wrapper';
import { useStores } from 'app/stores';
import { DeploymentModel } from 'app/res/Workstations/models'

export const DeploymentProxy = observer(
    (props: { deployment: DeploymentModel }) => {
    const [state, setState] = React.useState('loading');
    const { deployment } = props;
    console.log("THIS IS THE DEPLOYMENT PROXY URL", deployment.proxyUrl)
    if (!deployment){
        return (
            <div>Could not find any deployment. Please contact IT Admin.</div>
        )
    };
    if(deployment.scalingMethod === 'ON_DEMAND'){
      if (deployment.status === 'STOPPED'){
          deployment.start.call()
          return (
            <div>Please wait your deployment is starting...</div>
          )
      }
    }
    if (deployment.status === 'RUNNING'){
        return (
            <ProxyWrapper>
            <iframe
              id={style.iframe}
              src={`https://${deployment.proxyUrl}`}
              onLoad={() => {
                setState('loaded');
              }}
            />
          </ProxyWrapper>
        );
    }

    return (
        <div>The state of the deployment is {deployment.status}. Please contact IT Admin.</div>
    )
  });
