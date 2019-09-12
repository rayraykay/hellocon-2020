import React, {useRef, useCallback} from 'react';
import Slider from 'react-slick';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import speakers from '../resources/speakers';
import LindaPng from '../images/LindaFace.png';

import './Speakers.scss';

const largeSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
  nextArrow: <></>,
  prevArrow: <></>,
};

const smallSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <></>,
  prevArrow: <></>,
};

const Speakers = () => {
  const largeSlider = useRef(null);
  const goPrevLargeSlide = useCallback(() => largeSlider.current.slickPrev(), []);
  const goNextLargeSlide = useCallback(() => largeSlider.current.slickNext(), []);

  const smallSlider = useRef(null);
  const goPrevSmallSlide = useCallback(() => smallSlider.current.slickPrev(), []);
  const goNextSmallSlide = useCallback(() => smallSlider.current.slickNext(), []);

  return (
  <Container className="Speakers" maxWidth={false}>
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Grid item className="Speakers__Title">
        <Typography className="Text__Title">
          SPEAKERS
        </Typography>
      </Grid>
      <Hidden smDown>
        <Grid
          item
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
          className="Speakers__Title"
        >
          {/*<Hidden smDown>
            <Grid item>
              <Typography className="Speakers__Text--SpeakerTitle">
                SOFTWARE
              </Typography>
            </Grid>
            <Grid item>
              <Typography className="Speakers__Text--SpeakerTitle">
                HARDWARE
              </Typography>
            </Grid>
          </Hidden>*/}
        </Grid>
        <Grid
          item
          container
          direction="column"
          justify="flex-start"
          alignItems="stretch"
          xs={12}
          className="Speakers__Speakers"
        >
          <Container className="Speakers__Slider">
            <Slider ref={largeSlider} {...largeSettings}>
              {speakers.map((i, j) => (
                <Container className="Speakers__Container" key={j}>
                  <Paper className={'Speakers__Speaker Speakers__Speaker--' + (j % 2 ? 'second' : 'first')}>
                    <img className="Speakers__Image" src={LindaPng}/>
                    <Container className="Speakers__Info">
                      <Typography className="Speakers__Text--SpeakerName">
                        {i.name}
                      </Typography>
                      <Typography className="Speakers__Text--SpeakerPosition">
                        {i.position}
                      </Typography>
                      <Typography className="Speakers__Text--SpeakerDescription">
                        {i.description}
                      </Typography>
                    </Container>
                  </Paper>
                </Container>
              ))}
            </Slider>
          </Container>
        </Grid>
        <Grid item className="Speakers__Buttons">
          <Button onClick={goPrevLargeSlide}>
            PREV
          </Button>
          <Button onClick={goNextLargeSlide}>
            NEXT
          </Button>
        </Grid>
      </Hidden>
      <Hidden mdUp>
        <Grid
          item
          container
          direction="column"
          justify="flex-start"
          alignItems="stretch"
          xs={12}
          className="Speakers__Speakers"
        >
          <Container className="Speakers__Slider">
            <Slider className="Speakers__Andrew" ref={smallSlider} {...smallSettings}>
              {speakers.map((i, j) => (
                <Container className="Speakers__Container" key={j}>
                  <Paper className="Speakers__Speaker Speakers__Speaker--small">
                    <img className="Speakers__Image" src={LindaPng}/>
                    <Container className="Speakers__Info">
                      <Typography className="Speakers__Text--SpeakerName">
                        {i.name}
                      </Typography>
                      <Typography className="Speakers__Text--SpeakerPosition">
                        {i.position}
                      </Typography>
                      <Typography className="Speakers__Text--SpeakerDescription">
                        {i.description}
                      </Typography>
                    </Container>
                  </Paper>
                </Container>
              ))}
            </Slider>
          </Container>
        </Grid>
        <Grid item className="Speakers__Buttons">
          <Button onClick={goPrevSmallSlide}>
            PREV
          </Button>
          <Button onClick={goNextSmallSlide}>
            NEXT
          </Button>
        </Grid>
      </Hidden>
    </Grid>

  </Container>);
};

export default Speakers;
