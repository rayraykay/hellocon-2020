import React, {useRef, useCallback} from 'react';
import Slider from 'react-slick';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './Speakers.scss';

const Arrow = ({ className, style, onClick }) => (
  <Container
    className={className}
    style={{...style, display: "block"}}
    onClick={onClick}
  >
    Hello
  </Container>
);

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <></>,
  prevArrow: <></>,
};

const Speakers = () => {
  const slider = useRef(null);
  const goPrevSlide = useCallback(() => slider.current.slickPrev(), []);
  const goNextSlide = useCallback(() => slider.current.slickNext(), []);

  return (<Container className="Speakers">
    <Slider ref={slider} {...settings}>
      <Container>
        <Typography>
          1
        </Typography>
      </Container>
      <Container>
        <Typography>
          2
        </Typography>
      </Container>
    </Slider>
    <Button onClick={goPrevSlide}>
      PREV
    </Button>
    <Button onClick={goNextSlide}>
      NEXT
    </Button>
  </Container>);
};

export default Speakers;
