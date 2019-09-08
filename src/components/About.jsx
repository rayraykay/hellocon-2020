import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import './About.scss';

const About = () => (
  <Container className="About">
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="flex-start"
    >
      <Grid item xs={12}>
        <Typography>
          ABOUT
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <Typography paragraph>
          Hello, Con! is an entirely free, day-long, TED-talk style technology conference open to students and industry professionals alike! This year's speaker line-up will feature tech gurus, CTOs and specialists hailing from IBM, RBC, and more. With a speaker networking session afterwards, Hello, Con! is an invaluable opportunity to connect with professionals, share exciting ideas and meet similarly driven individuals.
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <Typography paragraph>
          Due to a finite venue size, registration will be limited on a first come first serve basis. Those registering will be charged a $10 deposit that will be refunded upon check-in the day of.
        </Typography>
      </Grid>
    </Grid>
  </Container>
);

export default About;
