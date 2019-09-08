import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import './Contact.scss';

const Contact = () => (
  <Container className="Contact" maxWidth={false}>
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="stretch"
      >
      <Grid item>
        <Typography className="Contact__Title">
          CONTACT US
        </Typography>
      </Grid>
      <Grid className="Contact__Copyright" item>
        <Typography>
          © 2019 IEEE University of Toronto Student Branch
        </Typography>
      </Grid>
    </Grid>
  </Container>
);

export default Contact;
