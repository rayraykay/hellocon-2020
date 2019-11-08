import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import Link from '@material-ui/core/Link';

import DaisyLogo from '../images/sponsors/Daisy Intelligence.60d846ea.svg';
import RbcLogo from '../images/sponsors/RBC.svg';
import MunvoLogo from '../images/sponsors/Munvo.png';
import InteraptixLogo from '../images/sponsors/InteraptixPng.png';
import CognitiveLogo from '../images/sponsors/CognitiveLogo.png';
import ProlegoLogo from '../images/sponsors/Prolego.png';
import UofTLogo from '../images/sponsors/UofT.png';
import IEEELogo from '../images/sponsors/IEEELogo.jpg';

import './Sponsors.scss';

const sponsorLink = link => () => window.open(link, '_blank');

// Needed a quick and dirty solution for links, unfortunate that this is it
const topLogos = [RbcLogo, DaisyLogo];
const topLogosLinks = ['https://www.rbcinvestease.com/', 'https://www.daisyintelligence.com/'];

const middleLogos = [MunvoLogo, InteraptixLogo, ProlegoLogo, CognitiveLogo];
const middleLogosLinks = ['https://munvo.com/', 'http://interaptix.com/', 'https://prolego.ai/', 'https://www.cognitivesystems.com/'];

const bottomLogos = [UofTLogo, IEEELogo];
const bottomLogosLinks = ['https://utoronto.ca/', 'https://ieee.org/'];

const sponsorLogos = (images, links, mediumSize, largeSize) => (
  <Grid
    item
    container
    direction="row"
    alignItems="center"
    justify="center"
  >
    {images.map((image, i) => (
      <Grid item className="Sponsors__Icon" xs={12} sm={4} md={mediumSize} lg={largeSize} key={image}>
        <Link href='#sponsors' onClick={sponsorLink(links[i])}>
          <img src={image} alt={image} />
        </Link>
      </Grid>
    ))}
  </Grid>
);

const Sponsors = () => (
  <Container className="Sponsors" maxWidth={false} id="sponsors">
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
        {sponsorLogos(topLogos, topLogosLinks, 6, 6)}
        {sponsorLogos(middleLogos, middleLogosLinks, 4, 4)}
        {sponsorLogos(bottomLogos, bottomLogosLinks, 6, 6)}
      </Grid>
    </Grid>

  </Container>
);

export default Sponsors;
