import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import RefreshIcon from '@material-ui/icons/Refresh';


const useStyles = makeStyles(theme => ({
  refresh: {
    padding: theme.spacing(0.5),
  },
}));

export default function Verify(props) {
  const classes = useStyles();
  const [open] = React.useState(true);

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">Please Check Your Email</span>}
      />
    </div>
  );
}
