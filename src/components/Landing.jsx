import React from 'react';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import eventLink from "../constants/eventLink";

import './Landing.scss';

const Landing = () => (
  <Container className="Landing" maxWidth={false}>
    <Hidden smUp>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="stretch"
      >
        <Grid
          className="Landing__Info"
          item
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid item>
            <Typography className="Landing__Text--Title">
              Hello, Con!
            </Typography>
          </Grid>
          <Grid item className="Landing__IEEE">
            <Typography className="Landing__Text--IEEE">
              Hosted by IEEE UofT Student Branch
            </Typography>
          </Grid>
          <Grid
            item
            container
            direction="row"
            justify="center"
            alignItems="center"
            className="Landing__Details"
          >
            <img src={require("../images/Location.svg")} alt="location" className="Landing__Icon"/>
            <Typography className="Landing__Text--Details">
              Bahen Centre for Information Technology
            </Typography>
          </Grid>
          <Grid
            item
            container
            direction="row"
            justify="center"
            alignItems="center"
            className="Landing__Details"
          >
            <img src={require("../images/Date.svg")} alt="location" className="Landing__Icon"/>
            <Typography className="Landing__Text--Details">
              Saturday, November 16th, 2019
            </Typography>
          </Grid>
          <Grid item className="Landing__Register">
            <Button onClick={eventLink} color="inherit" className="Landing__Button">
              <Typography className="Landing__Text--Button">
                Register Now!
              </Typography>
            </Button>
          </Grid>
        </Grid>
        <Grid
          className="Landing__People"
          item
        >
          <img src={require("../images/Ppl.png")} alt="landing speakers"/>
        </Grid>
      </Grid>
    </Hidden>
    <Hidden xsDown>
      <Grid
        container
        direction="row"
        justify="flex-end"
        alignItems="stretch"
      >
        <Grid
          item
          xs={6}
          sm={6}
          container
          direction="column"
          justify="flex-end"
          alignItems="flex-start"
          className="Landing__People"
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
          xs={6}
        >
          <Grid item>
            <Typography className="Landing__Text--Title">
              Hello, Con!
            </Typography>
          </Grid>
          <Grid item className="Landing__IEEE">
            <Typography className="Landing__Text--IEEE">
              Hosted by IEEE UofT Student Branch
            </Typography>
          </Grid>
          <Grid
            item
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
            className="Landing__Details"
          >
            <img src={require("../images/Location.svg")} alt="location" className="Landing__Icon"/>
            <Typography className="Landing__Text--Details">
              Bahen Centre for Information Technology
            </Typography>
          </Grid>
          <Grid
            item
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
            className="Landing__Details"
          >
            <img src={require("../images/Date.svg")} alt="location" className="Landing__Icon"/>
            <Typography className="Landing__Text--Details">
              Saturday, November 16th, 2019
            </Typography>
          </Grid>
          <Grid item className="Landing__Register">
            <Button onClick={eventLink} color="inherit" className="Landing__Button">
              <Typography className="Landing__Text--Button">
                Register Now!
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Hidden>
  </Container>
);

export default Landing;
