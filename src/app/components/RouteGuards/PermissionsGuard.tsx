import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { PermissionsBase } from 'app/res/Auth';
import { useStores } from 'app/stores';

export const RenderIf = (props: {
  if: boolean;
  children: React.ReactNode;
}) => {
  if (!props.if) return null;
  return props.children;
};

export const RenderIfHas = (props: {
  array: string[];
  permissions: PermissionsBase;
  children: React.ReactNode;
}) => {
  const { array, permissions } = props;
  let allow = false;
  for (const perm of array) {
    if (permissions.has(perm)) {
      allow = true;
      break;
    }
  }
  if (allow) return <>{props.children}</>;
  return null;
};

export const RenderIfRole = observer(
  (props: { roles: string[]; children: React.ReactNode; }) => {
    const { authstore } = useStores();
    const { roles } = props;
    let perms: PermissionsBase = authstore.user.permissions.roles;
    return (
      <RenderIfHas array={roles} permissions={perms}>
        {props.children}
      </RenderIfHas>
    );
  },
);
