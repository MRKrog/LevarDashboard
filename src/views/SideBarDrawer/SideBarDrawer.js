import React from 'react';
import clsx from 'clsx';
import { useStyles } from './SideBarDrawerStyles';
import { Link } from "react-router-dom";
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import Icon from '@material-ui/core/Icon';
import overviewIcon from '../../assets/images/icons/overview.svg';
import productIcon from '../../assets/images/icons/product_icon.svg';
import integrationsIcon from '../../assets/images/icons/chart_icon.svg';
import pipelineIcon from '../../assets/images/icons/3Dpipeline_icon.svg';
import settingsIcon from '../../assets/images/icons/settings_icon.svg';
import successIcon from '../../assets/images/icons/succteam_symbol.svg';
import creationIcon from '../../assets/images/icons/assetcreationinfo_icon.svg';


const SideBarDrawer = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  // const location = React.useState(props.pathname)

  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root} id="SideBarDrawer">
      <CssBaseline />
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
        open={open}
      >
        <div className={clsx({
          [classes.toolbar]: open || !open,
          [classes.closedToolbar]: !open
        })}>
          <IconButton onClick={handleDrawer}>
            {!open ? <MenuIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <div className="NavContainer NavTop">
          <List className={classes.navList}>
            <ListItem button
                      component={Link}
                      to="/dashboard/overview"
                      className={"NavLink " + (props.path === '/dashboard/overview' ? 'isActive' : null)}>
              <Icon className="NavIcon">
                <img src={overviewIcon} alt="Overview"/>
              </Icon>
              <h4 className="NavTitle">Overview</h4>
            </ListItem>
            <ListItem button
                      component={Link}
                      to="/dashboard/products"
                      className={"NavLink " + (props.path === '/dashboard/products' ? 'isActive' : null)}>
              <Icon className="NavIcon">
                <img src={productIcon} alt="Products"/>
              </Icon>
              <h4 className="NavTitle">Products</h4>
            </ListItem>
            <ListItem button
                      component={Link}
                      to="/dashboard/integrations"
                      className={"NavLink " + (props.path === '/dashboard/integrations' ? 'isActive' : null)}>
              <Icon className="NavIcon">
                <img src={integrationsIcon} alt="Integrations"/>
              </Icon>
              <h4 className="NavTitle">Integrations</h4>
            </ListItem>
            <ListItem button
                      component={Link}
                      to="/dashboard/assetpipeline"
                      className={"NavLink " + (props.path === '/dashboard/assetpipeline' ? 'isActive' : null)}>
              <Icon className="NavIcon">
                <img src={pipelineIcon} alt="Asset Pipeline"/>
              </Icon>
              <h4 className="NavTitle">Asset Pipeline</h4>
            </ListItem>
            <ListItem button
                      component={Link}
                      to="/dashboard/settings"
                      className={"NavLink " + (props.path === '/dashboard/settings' ? 'isActive' : null)}>
              <Icon className="NavIcon">
                <img src={settingsIcon} alt="Settings"/>
              </Icon>
              <h4 className="NavTitle">Settings</h4>
            </ListItem>
          </List>
        </div>
        <div className="NavContainer NavMiddle">
          <List className={classes.navList}>
            <ListItem button
                      component={Link}
                      to="/dashboard/"
                      className="NavLink">
              <Icon className="NavIcon">
                <img src={successIcon} alt="levAR Success"/>
              </Icon>
              <h4 className="NavTitle">levAR Success</h4>
            </ListItem>
            <ListItem button
                      component={Link}
                      to="/dashboard/"
                      className="NavLink">
              <Icon className="NavIcon">
                <img src={creationIcon} alt="Asset Creation"/>
              </Icon>
              <h4 className="NavTitle">Asset Creation</h4>
            </ListItem>
          </List>
        </div>
        <Divider />
        <div className="NavContainer NavBottom"></div>
      </Drawer>
    </div>
  );
}

export default SideBarDrawer;
