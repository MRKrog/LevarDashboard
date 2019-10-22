import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import ButtonStatus from './Products/ButtonStatus/ButtonStatus';
// import { setStatus3D } from './Products/utilities'

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
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FilterListIcon from '@material-ui/icons/FilterList';


// import clsx from 'clsx';
// import Checkbox from '@material-ui/core/Checkbox';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Switch from '@material-ui/core/Switch';
// import DeleteIcon from '@material-ui/icons/Delete';


function createData(title, variant, vendor, type, sales, returns, threed) {
  return { title, variant, vendor, type, sales, returns, threed };
}

const rows = [
  createData('Item 1', 'Os/a', 'Adidas', 'acc.', 1, 50, 0),
  createData('Item 2', 'Os/a', 'Adidas', 'acc.', 10, 11, 2),
  createData('Item 3', 'Os/a', 'Adidas', 'acc.', 3, 23, 1),
  createData('Item 4', 'Os/a', 'Adidas', 'acc.', 4, 43, 0),
  createData('Item 5', 'Os/a', 'Adidas', 'acc.', 76, 55, 2),
  createData('Item 6', 'Os/a', 'Adidas', 'acc.', 45, 51, 3),
  createData('Item 7', 'Os/a', 'Adidas', 'acc.', 34, 54, 1),
  createData('Item 8', 'Os/a', 'Adidas', 'acc.', 3, 51, 0),
  createData('Item 9', 'Os/a', 'Adidas', 'acc.', 6, 59, 2),
  createData('Item 10', 'Os/a', 'Adidas', 'acc.', 87, 53, 3),
  createData('Item 11', 'Os/a', 'Adidas', 'acc.', 13, 45, 1),
  createData('Item 12', 'Os/a', 'Adidas', 'acc.', 54, 65, 0),
  createData('Item 13', 'Os/a', 'Adidas', 'acc.', 9, 56, 2),
];

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

const headCells = [
  { id: 'thumbnail', sortable: false, label: '' },
  { id: 'title', sortable: false, label: 'Title' },
  { id: 'variant', sortable: false, label: 'Variant' },
  { id: 'vendor', sortable: false, label: 'Vendor' },
  { id: 'type', sortable: false, label: 'Type' },
  { id: 'sales', sortable: true, label: 'Sales Rank' },
  { id: 'returns', sortable: true, label: 'Returns Rank' },
  { id: 'threed', sortable: false, label: '3D' },
];

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

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  // numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
  },
  table: {
    minWidth: 750,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

export default function ProductsTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState('desc');
  const [orderBy, setOrderBy] = React.useState('sales');
  // const [selected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

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
    <div className={classes.root} id="productTableMain">
      <Paper className={classes.paper}>
        <Toolbar className="tableHeaderTop">
          <Typography className="tableHeader" variant="h6" id="tableTitle">
            Store Name Products
          </Typography>
          <Tooltip title="Filter list">
            <IconButton aria-label="filter list">
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
        <div className={classes.tableWrapper}>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              // numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <TableRow
                      tabIndex={-1}
                      key={row.title}
                    >
                      <TableCell>
                        <img className="thumbnail" src={require("../../assets/images/thumbEx.svg")} alt="logo" />
                      </TableCell>
                      <TableCell>{row.title}</TableCell>
                      <TableCell>{row.variant}</TableCell>
                      <TableCell>{row.vendor}</TableCell>
                      <TableCell>{row.type}</TableCell>
                      <TableCell>{row.sales} of 100</TableCell>
                      <TableCell>{row.returns} of 100</TableCell>
                      <TableCell>
                        <ButtonStatus status={row.threed} />
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
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
