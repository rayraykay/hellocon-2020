import React, {useState, useCallback} from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import calculateTimeRemaining from '../functions/calculateTimeRemaining';
import {utcYear, utcMonth, utcHour, utcDay} from '../resources/helloConDate';
import useInterval from '../functions/useTimeout';
import './Countdown.scss';

const Countdown = () => {
  const [_, setDate] = useState(Date.now());
  const targetDate = Date.UTC(utcYear, utcMonth, utcDay, utcHour);
  const {days, hours, minutes, seconds} = calculateTimeRemaining(Date.now(), targetDate);

  const changeDate = useCallback(() => setDate(Date.now()), []);

  useInterval(changeDate, 1000);

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
              {days < 0 ? 0 : days}
            </Typography>
          </Grid>
          <Grid item md={2} xs={3}>
            <Typography className="Countdown__Number">
              {hours < 0 ? 0 : hours}
            </Typography>
          </Grid>
          <Grid item md={2} xs={3}>
            <Typography className="Countdown__Number">
              {minutes < 0 ? 0 : hours}
            </Typography>
          </Grid>
          <Grid item md={2} xs={3}>
            <Typography className="Countdown__Number">
              {seconds < 0 ? 0 : seconds}
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
              Minutes
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
