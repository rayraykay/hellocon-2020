import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";

import './Schedule.scss';

const Schedule = () => (
  <Container className="Schedule">
    <Grid
      container
      direction="column"
      justify="flex-start"
      alignItems="center"
      className="Schedule__Grid"
    >
      <Grid xs={12} item>
        <Typography>
          SCHEDULE
        </Typography>
      </Grid>
      <Grid
        item
        container
        md={6}
        className="Schedule__Schedule"
      >
        <Grid
          item
          container
          direction="column"
          alignItems="stretch"
          xs={3}
          className="Schedule__Times"
        >
          <Grid
            item
            className="Schedule__Heading Schedule__TimeHeading"
          >
            <Typography>
              Time
            </Typography>
          </Grid>
          <Grid
            item
            className="Schedule__Content Schedule__Time"
          >
            <Typography>
              9:00pm
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          alignItems="stretch"
          xs={9}
          className="Schedule__Event"
        >
          <Grid
            item
            className="Schedule__Heading"
          >
            <Typography>
              Event
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Container>
);

export default Schedule;
