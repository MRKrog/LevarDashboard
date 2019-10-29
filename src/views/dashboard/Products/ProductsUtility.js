import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  table: {
    width: '100%',
  },
  tableWrapper: {
    overflowX: 'auto',
    maxHeight: '75vh',
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

export const desc = (a, b, orderBy) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

export const stableSort = (array, cmp) => {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

export const getSorting = (order, orderBy) => {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

export const headCells = [
  { id: 'thumbnail', numeric: false, sortable: false, label: '' },
  { id: 'title', numeric: false, sortable: true, label: 'Title' },
  { id: 'variant', numeric: false, sortable: false, label: 'Variant' },
  { id: 'vendor', numeric: false, sortable: true, label: 'Vendor' },
  { id: 'type', numeric: false, sortable: true, label: 'Type' },
  { id: 'salesRank', numeric: false, sortable: true, label: 'Sales Rank' },
  { id: 'returnsRanks', numeric: false, sortable: true, label: 'Returns Rank' },
  { id: 'threeD', numeric: false, sortable: true, label: '3D' },
];
