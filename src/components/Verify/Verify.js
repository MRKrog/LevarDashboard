import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import RefreshIcon from '@material-ui/icons/Refresh';



const useStyles = makeStyles(theme => ({
  refresh: {
    padding: theme.spacing(0.5),
  },
}));

export default function Verify(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

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
        message={<span id="message-id">Please Verify Your Email</span>}
        action={[
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            className={classes.refresh}
            onClick={props.handleVerify}
          >
            <RefreshIcon />
          </IconButton>,
        ]}
      />
    </div>
  );
}
