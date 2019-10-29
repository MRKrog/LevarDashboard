import { makeStyles } from '@material-ui/core/styles';

export const headCells = [
  { id: 'title', label: 'Title' },
  { id: 'requested', label: 'Requested' },
  { id: 'status', label: 'Status' },
  { id: 'completed', label: 'Completed' }
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
    title: 'Item 1',
    requested: '05/24/2019',
    status: 'yellow',
    completed: 'est. 05/30',
  },
  {
    id: 2,
    title: 'Item 2',
    requested: '05/24/2019',
    status: 'red',
    completed: 'est. 05/30',
  },
  {
    id: 3,
    title: 'Item 3',
    requested: '05/24/2019',
    status: 'yellow',
    completed: 'est. 05/30',
  },
  {
    id: 4,
    title: 'Item 4',
    requested: '05/24/2019',
    status: 'green',
    completed: 'est. 05/30',
  },
  {
    id: 5,
    title: 'Item 5',
    requested: '05/24/2019',
    status: 'red',
    completed: 'est. 05/30',
  },
  {
    id: 6,
    title: 'Item 6',
    requested: '05/24/2019',
    status: 'red',
    completed: 'est. 05/30',
  },
]
