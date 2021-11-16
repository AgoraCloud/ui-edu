import * as React from 'react';
import {
  Table,
  Paper,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  makeStyles,
  TablePagination,
  TableCellProps,
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 580,
  },
  heading: {
    marginBottom: '20px',
  },
});

export interface Column extends TableCellProps {
  id: string;
  label: string;
  minWidth?: number;
  // align?: "right" | "inherit" | "left" | "center" | "justify" | undefined; // was throwing an error when defined as 'right'
  // format?: (value: number) => string;
}

export interface Row {
  [columnId: string]: any;
}

interface PaginatedTableProps {
  columns: Column[];
  rows: Row[];
}
export const PaginatedTable = (props: PaginatedTableProps) => {
  const classes = useStyles();
  const { columns, rows } = props;

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {value}
                          {/* {column.format && typeof value === 'number' ? column.format(value) : value} */}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};
