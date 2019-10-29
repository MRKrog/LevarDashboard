import { makeStyles } from '@material-ui/core/styles';

export const headCells = [
  { id: 'item', label: 'Item' },
  { id: 'orders', label: 'Orders' },
  { id: 'sales', label: 'Sales' },
  { id: 'returns', label: 'Returns' },
  { id: 'returnsMake', label: 'Returns $' },
  { id: 'price', label: 'Price' },
  { id: 'reason', label: 'Reason' },
  { id: 'threeD', label: 'Make 3D' },
];

export const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
  },
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


export const recommendData = [
  {
    id: 1,
    item: 'Item 1',
    orders: 10,
    sales: 1500,
    returns: 500,
    returnsMake: '$45',
    price: '$15',
    reason: 'Reduce Returns',
    threeD: ''
  },
  {
    id: 2,
    item: 'Item 2',
    orders: 10,
    sales: 1500,
    returns: 500,
    returnsMake: '$45',
    price: '$15',
    reason: 'Top Seller',
    threeD: ''
  },
  {
    id: 3,
    item: 'Item 3',
    orders: 10,
    sales: 1500,
    returns: 500,
    returnsMake: '$45',
    price: '$15',
    reason: 'Under Performing',
    threeD: ''
  },
  {
    id: 4,
    item: 'Item 4',
    orders: 10,
    sales: 1500,
    returns: 500,
    returnsMake: '$45',
    price: '$15',
    reason: 'Top Seller',
    threeD: ''
  },
  {
    id: 5,
    item: 'Item 5',
    orders: 10,
    sales: 1500,
    returns: 500,
    returnsMake: '$45',
    price: '$15',
    reason: 'Reduce Returns',
    threeD: ''
  },
  {
    id: 6,
    item: 'Item 6',
    orders: 10,
    sales: 1500,
    returns: 500,
    returnsMake: '$45',
    price: '$15',
    reason: 'Reduce Returns',
    threeD: ''
  },
]
