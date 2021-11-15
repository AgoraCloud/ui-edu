import * as React from 'react';
import { observer } from 'mobx-react';
import { useStores } from 'app/stores';
import { Typography } from '@material-ui/core';
import { MoreMenu } from 'app/components/inputs';
import { Column, PaginatedTable, Row } from 'app/components';
import { WorkstationModel } from '..';

const columns: Column[] = [
    {
        id: 'name',
        label: 'Workstation Name',
    },
    {
        id: 'fullName',
        label: 'Full Name',
    },
    {
        id: 'email',
        label: 'Email',
    },
    {
        id: 'menu',
        label: '',
        align: 'right',
        minWidth: 50,
    },
];

export const WorkstationsTable = observer(() => {
    const { workstationsstore, routerstore, uistore } = useStores();

    const workstations = workstationsstore.workstations
    console.log(workstations.state)
    if (workstations.state !== 'loaded') return null;
    const rows: any = workstations.map((workstation: WorkstationModel): Row => {
        return {
            email: workstation.user.email,
            fullName: workstation.user.fullName,
            name: workstation.name,
            menu: (
                <MoreMenu
                    options={[
                        {
                            name: 'Delete',
                            onClick: () => {
                                // user.onDelete();
                                uistore.setDeleteTarget(workstation.name, workstation.onDelete);
                            },
                        },
                        {
                            name: 'Edit',
                            onClick: () => {
                                routerstore.push(`/ws/${workstation.id}/edit`)
                                // adminstore.editUserDialog.setUserAndOpen(user);
                            },
                        },
                    ]}
                />
            ),
        };
    });
    return (
        <>
            <Typography variant="h4">Workstations</Typography>
            <PaginatedTable columns={columns} rows={rows} />
        </>
    );
});