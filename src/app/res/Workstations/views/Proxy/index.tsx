import * as React from 'react';
import style from './style.module.scss';
import { inject, observer } from 'mobx-react';
import { ProxyWrapper } from 'app/components/Wrapper';
import { useStores } from 'app/stores';

export const DeploymentProxy = observer((props) => {
    const [state, setState] = React.useState('loading');
    const { authstore } = useStores();
    const deploymentProxyUrl = authstore.user.userWorkstation.proxyUrl
    if (!deploymentProxyUrl) return null;
    if(authstore.user.userWorkstation.deploymentScalingMethod === 'ON_DEMAND'){
      if (authstore.user.userWorkstation.deploymentStatus === 'STOPPED'){
        authstore.user.userWorkstation.start.call()
        return (
          <div>Please wait your deployment is starting...</div>
        )
      }
    }
    return (
        <ProxyWrapper>
        <iframe
          id={style.iframe}
          src={`https://${deploymentProxyUrl}`}
          onLoad={() => {
            setState('loaded');
          }}
        />
      </ProxyWrapper>
    );
  });
