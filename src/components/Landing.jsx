import React from 'react';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import './Landing.scss';

const Landing = () => (
  <Container className="Landing" maxWidth={false}>
    <Hidden smDown>
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
              Innis Town Hall
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
            <Button href="#register" color="inherit" className="Landing__Button">
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
