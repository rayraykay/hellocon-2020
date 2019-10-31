import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";

import DaisyLogo from '../images/sponsors/Daisy Intelligence.60d846ea.svg';
import RbcLogo from '../images/sponsors/RBC.svg';
import MunvoLogo from '../images/sponsors/Munvo.png';
import InteraptixLogo from '../images/sponsors/InteraptixPng.png';
import CognitiveLogo from '../images/sponsors/CognitiveLogo.png';
import ProlegoLogo from '../images/sponsors/Prolego.png';
import UofTLogo from '../images/sponsors/UofT.png';
import IEEELogo from '../images/sponsors/IEEELogo.jpg';

import './Sponsors.scss';

const topLogos = [RbcLogo, DaisyLogo];
const middleLogos = [MunvoLogo, InteraptixLogo, ProlegoLogo, CognitiveLogo];
const bottomLogos = [UofTLogo, IEEELogo];

const sponsorLogos = (images, mediumSize, largeSize) => (
  <Grid
    item
    container
    direction="row"
    alignItems="center"
    justify="center"
  >
    {images.map(image => (
      <Grid item className="Sponsors__Icon" xs={12} sm={4} md={mediumSize} lg={largeSize} key={image}>
        <Container maxWidth={false}>
          <img src={image} alt={image} />
        </Container>
      </Grid>
    ))}
  </Grid>
);

const Sponsors = () => (
  <Container className="Sponsors" maxWidth={false}>
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
    >
      <Grid className="Sponsors__Title" item xs={12}>
        <Typography className="Text__Title">
          Sponsors
        </Typography>
      </Grid>
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="center"
      >
        {sponsorLogos(topLogos, 6, 6)}
        {sponsorLogos(middleLogos, 4, 4)}
        {sponsorLogos(bottomLogos, 6, 6)}
      </Grid>
    </Grid>

  </Container>
);

export default Sponsors;