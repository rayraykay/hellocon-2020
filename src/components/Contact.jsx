import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import EmailSvg from '../images/Email.svg';
import WebSvg from '../images/Website.svg';
import FacebookSvg from '../images/Facebook.svg';
import InstagramSvg from '../images/Instagram.svg';

import './Contact.scss';

const EmailIcon = () => (
  <IconButton href="mailto:uoft@ieee.org">
    <img src={EmailSvg} alt="email IEEE UofT" />
  </IconButton>
);

const WebsiteIcon = () => (
  <IconButton href="https://ieee.utoronto.ca">
    <img src={WebSvg} alt="IEEE UofT website" />
  </IconButton>
);

const FacebookIcon = () => (
  <IconButton href="https://www.facebook.com/ieeeuoft/">
    <img src={FacebookSvg} alt="IEEE UofT Facebook page" />
  </IconButton>
);

const InstagramIcon = () => (
  <IconButton href="https://www.instagram.com/ieee_uoft/">
    <img src={InstagramSvg} alt="IEEE UofT Instagram page" />
  </IconButton>
);

const Contact = () => (
  <Container className="Contact" maxWidth={false} id="contact-us">
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      >
      <Grid className="Contact__Title" item>
        <Typography className="Text__Title">
          CONTACT US
        </Typography>
      </Grid>
      <Grid item md={6} xs={10} className="Contact__Text">
        <Typography className="Text__Paragraph">
          If you have any inquiries regarding our club, please reach out to us!  
        </Typography>
        <br/>
        <Typography className="Text__Paragraph">
          IEEE is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity. The UofT Student Branch hosts numerous events throughout the year, which are designed to help students reach their personal and professional development goals.
        </Typography>
      </Grid>
      <Grid className="Contact__SocialMedia">
        <EmailIcon />
        <WebsiteIcon />
        <FacebookIcon />
        <InstagramIcon />
      </Grid>
      <Grid className="Contact__Copyright" item>
        <Typography className="Text__ParagraphSmall">
          © 2019 IEEE University of Toronto Student Branch
        </Typography>
      </Grid>
    </Grid>
  </Container>
);

export default Contact;
