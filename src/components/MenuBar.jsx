import React, { useState } from 'react';
import Hidden from '@material-ui/core/Hidden';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import IconButton from "@material-ui/core/IconButton";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';

import eventLink from '../constants/eventLink';

import './MenuBar.scss';

const MenuBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => setAnchorEl(event.currentTarget);

  const handleClose = () => setAnchorEl(null);

  return (<>
    <Hidden xsDown>
      <AppBar className="MenuBar" position="static">
        <Toolbar className="MenuBar__Toolbar">
          {/*lol i hate dis but im too lazy to change right now*/}
          <Container className="MenuBar__Icon">
          </Container>
          <Button href="#speakers" color="inherit" className="MenuBar__Speakers Text__Button">Speakers</Button>
          <Button href="#schedule" color="inherit" className="MenuBar__Schedule Text__Button">Schedule</Button>
          <Button href="#sponsors" color="inherit" className="MenuBar__Sponsors Text__Button">Sponsors</Button>
          <Button href="#contact-us" color="inherit" className="MenuBar__ContactUs Text__Button">Contact Us</Button>
          <Button onClick={eventLink} color="inherit" className="MenuBar__Register Text__Button">Register</Button>
        </Toolbar>
      </AppBar>
    </Hidden>
    <Hidden smUp>
      <Grid
        container
        direction="row"
        justify="flex-end"
        alignItems="flex-start"
        className="MenuBar--small"
      >
        <Grid item>
          <IconButton onClick={handleClick}>
            <MenuIcon className="MenuBar__MenuIcon" />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            className="MenuBar__Menu"
          >
            <MenuItem className="MenuBar__MenuItem">
              <Button href="#speakers" onClick={handleClose} className="MenuBar__MenuButton Text__Button">Speakers</Button>
            </MenuItem>
            <MenuItem className="MenuBar__MenuItem">
              <Button href="#schedule" onClick={handleClose} className="MenuBar__MenuButton Text__Button">Schedule</Button>
            </MenuItem>
            <MenuItem className="MenuBar__MenuItem">
              <Button href="#sponsors" onClick={handleClose} className="MenuBar__MenuButton Text__Button">Sponsors</Button>
            </MenuItem>
            <MenuItem className="MenuBar__MenuItem">
              <Button href="#contact-us" onClick={handleClose} className="MenuBar__MenuButton Text__Button">Contact Us</Button>
            </MenuItem>
            <MenuItem className="MenuBar__MenuItem--Register">
              <Button onClick={eventLink} className="MenuBar__Register Text__Button">Register</Button>
            </MenuItem>
          </Menu>
        </Grid>
      </Grid>
    </Hidden>
  </>);
};

export default MenuBar;
