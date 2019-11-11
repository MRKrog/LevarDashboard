import React from 'react';
import ButtonStatus from '../ButtonStatus/ButtonStatus';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';

import { thumb } from '../../../../assets/images/thumbEx.svg'
import { connect } from "react-redux";

import { useStyles, headCells, stableSort, getSorting } from '../ProductsUtility';

function EnhancedTableHead(props) {

  const { classes, order, orderBy, onRequestSort } = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            align="left"
            sortDirection={orderBy === headCell.id ? order : false}
          >
          {
            headCell.sortable ?
            <TableSortLabel
              className="sortWrapper"
              active={orderBy === headCell.id}
              direction={order}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
            :
            headCell.label
          }
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

function ProductsTable(props) {
  const classes = useStyles();
  const [ { products, vendor } ] = React.useState(props);
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('title');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(15);

  const handleRequestSort = (event, property) => {
    const isDesc = orderBy === property && order === 'desc';
    setOrder(isDesc ? 'asc' : 'desc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="ProductsTable tableContent">
      <Paper>
        <Toolbar className="tableHeaderTop">
          <Typography className="tableHeader" variant="h6">
            Converse Products
          </Typography>
        </Toolbar>
        <div className={`${classes.tableWrapper} tableWrapper`}>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            aria-label="enhanced table sticky"
            stickyHeader
          >
            <EnhancedTableHead
              classes={classes}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={products.length}
            />
            <TableBody>
              {stableSort(products, getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <TableRow
                      tabIndex={-1}
                      key={row.variant_id}
                    >
                      <TableCell>
                        <img className="thumbnail" src={require("../../../../assets/images/thumbEx.svg")} alt="logo" />
                      </TableCell>
                      <Tooltip title={row.product_title}
                               enterDelay={1000}
                               leaveDelay={100}
                               placement="right"
                               TransitionComponent={Zoom}>
                        <TableCell>{row.product_title}</TableCell>
                      </Tooltip>
                      <TableCell>{row.variant_title}</TableCell>
                      <TableCell>{row.vendor}</TableCell>
                      <TableCell>{row.type}</TableCell>
                      <TableCell>{row.salesRank} of 100</TableCell>
                      <TableCell>{row.returnsRanks} of 100</TableCell>
                      <TableCell>
                        <ButtonStatus status={row.threeD} />
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[15, 25]}
          component="div"
          count={products.length}
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

export const mapStateToProps = state => ({
  products: state.products,
});

export default connect(mapStateToProps, null)(ProductsTable);
