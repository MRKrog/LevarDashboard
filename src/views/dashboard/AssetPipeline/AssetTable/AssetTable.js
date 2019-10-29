import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import { useStyles, headCells, recommendData } from '../AssetUtility';

function EnhancedTableHead(props) {

  return (
    <TableHead>
      <TableRow>
        {
          headCells.map(headCell => (
          <TableCell key={headCell.id} align="left">
            {headCell.label}
          </TableCell>
          ))
      }
      </TableRow>
    </TableHead>
  );
}

export default function ProductsTable(props) {
  const classes = useStyles();
  // const [ { products, vendor } ] = React.useState(recommendData);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="AssetTable">
      <Paper>
        <Toolbar className="tableHeaderTop">
          <Typography className="tableHeader" variant="h6">
            levAR Art Pipeline <span className="subTitle">The status of your 3D assets</span>
          </Typography>
        </Toolbar>
        <div className="tableWrapper">
          <Table className={classes.table}
            aria-labelledby="tableTitle"
            aria-label="enhanced table"
          >
            <EnhancedTableHead rowCount={recommendData.length} />
            <TableBody>
            {
              recommendData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow
                    tabIndex={-1}
                    key={row.id}
                  >
                    <TableCell>{row.title}</TableCell>
                    <TableCell>{row.requested}</TableCell>
                    <TableCell>{row.status}</TableCell>
                    <TableCell>{row.completed}</TableCell>
                  </TableRow>
                );
              })
            }
            </TableBody>
          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[5, 10]}
          component="div"
          count={recommendData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'previous page',
          }}
          nextIconButtonProps={{
            'aria-label': 'next page',
          }}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
