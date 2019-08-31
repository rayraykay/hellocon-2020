import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import "./Landing.scss";
import {Typography} from "@material-ui/core";

const Landing = () => (
  <Container className="Landing" maxWidth={false}>
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="stretch"
    >
      <Grid
        className="Landing__People"
        item
        xs={12}
        sm={6}
      >
        <img src={require("../images/Ppl.png")} alt="landing speakers"/>
      </Grid>
      <Grid
        className="Landing__Info"
        item
        container
        direction="column"
        justify="center"
        alignItems="stretch"
        xs={12}
        sm={6}
      >
        <Grid item>
          <Typography>
            Hello, Con!
          </Typography>
        </Grid>
        <Grid item>
          <Typography>
            Hosted by IEEE UofT Student Branch
          </Typography>
        </Grid>
        <Grid
          className="Landing__Location"
          item
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          <img src={require("../images/Location.svg")} alt="location"/>
          <Typography display="inline">
            Innis Town Hall
          </Typography>
        </Grid>
        <Grid
          className="Landing__Location"
          item
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          <img src={require("../images/Date.svg")} alt="location"/>
          <Typography display="inline">
            Saturday, November 16th, 2019
          </Typography>
        </Grid>
        <Grid item>
          <Button href="#register" color="inherit" className="MenuBar__Register">Register Now!</Button>
        </Grid>
      </Grid>
    </Grid>
  </Container>
);

export default Landing;
