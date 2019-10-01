import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import './About.scss';

const About = () => (
  <Container className="About" maxWidth={false}>
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="flex-start"
    >
      <Grid className="About__Title" item xs={12}>
        <Typography className="Text__Title">
          ABOUT
        </Typography>
      </Grid>
      <Grid className="About__Text" item xs={10}>
        <Typography className="Text__Paragraph">
          Hello, Con! is an entirely <strong>free</strong>, day-long, TED-talk style <strong>technology conference</strong> open to students and industry professionals alike! This year's speaker line-up will feature tech gurus, CTOs and specialists hailing from IBM, RBC, and more. With a speaker networking session afterwards, Hello, Con! is an invaluable opportunity to connect with professionals, share exciting ideas and meet similarly driven individuals.
        </Typography>
        <br/>
        <Typography className="Text__Paragraph">
          Due to a finite venue size, registration will be limited on a <strong>first come first serve basis</strong>. Those registering will be charged a $20 deposit that will be refunded upon check-in the day of.
        </Typography>
      </Grid>
    </Grid>
  </Container>
);

export default About;
