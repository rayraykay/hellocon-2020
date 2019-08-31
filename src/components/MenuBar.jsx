import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import "./MenuBar.scss";

const MenuBar = () => (
  <>
    <AppBar className="MenuBar" position="sticky">
      <Toolbar className="MenuBar__Toolbar">
        <Container className="MenuBar__Icon">
          <img src={require("../images/CubeyBoi.svg")} alt="menu bar hellocon icon"/>
        </Container>
        {/*<IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>*/}
        <Button href="#speakers" color="inherit" className="MenuBar__Speakers">Speakers</Button>
        <Button href="#schedule" color="inherit" className="MenuBar__Schedule">Schedule</Button>
        <Button href="sponsors" color="inherit" className="MenuBar__Sponsors">Sponsors</Button>
        <Button href="#contact-us" color="inherit" className="MenuBar__ContactUs">Contact Us</Button>
        <Button href="#register" color="inherit" className="MenuBar__Register">Register</Button>
      </Toolbar>
    </AppBar>
  </>
);

export default MenuBar;
