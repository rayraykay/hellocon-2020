import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";

import schedule from '../resources/schedule';

import './Schedule.scss';

const Schedule = () => {
  const events = schedule.map((e, i, {length}) => (
    <Grid
      item
      container
      className={'Schedule__Content ' + (i === (length - 1) ? null : 'Schedule__Content--border')}
      key={i}
    >
      <Grid
        item
        xs={3}
        className="Schedule__Time"
      >
        <Typography>
          {e.time}
        </Typography>
      </Grid>
      <Grid
        item
        xs={9}
        className="Schedule__Event"
      >
        <Typography>
          {e.event}
        </Typography>
          {e.details.map((d, j) => (
            <Container className="Schedule__EventDetails" key={j}>
              <Typography className="Schedule__Location" component="span">
                {d.location}
              </Typography>
              <Typography className="Schedule__Speaker" component="span">
                {d.speaker}
              </Typography>
            </Container>
          ))}
      </Grid>
    </Grid>
  ));

  return (<Container className="Schedule" id="schedule">
    <Grid
      container
      direction="column"
      justify="flex-start"
      alignItems="center"
      className="Schedule__Grid"
    >
      <Grid
        item
        className="Schedule__Title"
      >
        <Typography>
          SCHEDULE
        </Typography>
      </Grid>
      <Grid
        item
        container
        md={6}
        sm={10}
        className="Schedule__Schedule"
      >
        <Grid
          item
          container
          className="Schedule__Heading"
        >
          <Grid
            item
            xs={3}
            className="Schedule__TimeHeading"
          >
            <Typography>
              Time
            </Typography>
          </Grid>
          <Grid
            item
            xs={9}
            className="Schedule__EventHeading"
          >
            <Typography>
              Event
            </Typography>
          </Grid>
        </Grid>
        {events}
      </Grid>
    </Grid>
  </Container>);
};

export default Schedule;
