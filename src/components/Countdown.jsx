import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import './Countdown.scss';

const Countdown = () => {
  return (
    <Container className="Countdown" maxWidth={false}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12} className="Countdown__Title">
          <Typography className="Countdown__Title Text__Title">
            Countdown
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          container
          direction="row"
          justify="center"
          alignItems="center"
          className="Countdown__Counter"
        >
          <Grid item md={2} xs={3}>
            <Typography className="Countdown__Number">
              12
            </Typography>
          </Grid>
          <Grid item md={2} xs={3}>
            <Typography className="Countdown__Number">
              06
            </Typography>
          </Grid>
          <Grid item md={2} xs={3}>
            <Typography className="Countdown__Number">
              23
            </Typography>
          </Grid>
          <Grid item md={2} xs={3}>
            <Typography className="Countdown__Number">
              59
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          container
          direction="row"
          justify="center"
          alignItems="center"
          className="Countdown__Labels"
        >
          <Grid item md={2} xs={3}>
            <Typography className="Countdown__Label">
              Weeks
            </Typography>
          </Grid>
          <Grid item md={2} xs={3}>
            <Typography className="Countdown__Label">
              Days
            </Typography>
          </Grid>
          <Grid item md={2} xs={3}>
            <Typography className="Countdown__Label">
              Hours
            </Typography>
          </Grid>
          <Grid item md={2} xs={3}>
            <Typography className="Countdown__Label">
              Seconds
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
};

export default Countdown;
