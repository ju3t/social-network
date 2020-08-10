import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow } from 'swiper';
import 'swiper/swiper.scss';
import { Slider } from 'antd';
import 'antd/dist/antd.css';
// import Card from './Card';
import forward from '../../../common/img/icons/forward.svg';
import play from '../../../common/img/icons/play.svg';
import back from '../../../common/img/icons/back.svg';

const Main = styled.div`
  //border: 1px solid #000000;
  position: absolute;
  width: 980px;
  top: -150px;
`;

const ButtonsArea = styled.div`
  padding-top: 20px;
  position: absolute;
  top: 15%;
  left: 18%;
  z-index: 2;
`;

const ControlsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ControlsBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  button {
    outline: none;
    background: none;
    border: none;
    box-shadow: none;
    cursor: pointer;
  }
`;

const Play = styled.button`
  width: 181px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  img {
    width: 181px;
  }
`;

const Next = styled.button`
  margin-left: 30px;
`;

const Img = styled.img`
  display: block;
  margin: 0 auto;
  border-radius: 10px;
  width: 800px;
  height: 400px;
`;

let mySwiper;

const Deck = () => {
  const handleNext = () => {
    mySwiper.slideNext();
  };

  const handlePrev = () => {
    mySwiper.slidePrev();
  };

  SwiperCore.use([EffectCoverflow]);

  return (
    <>
      <Main>
        <ButtonsArea>
          <ControlsContainer>
            <ControlsBlock>
              <button onClick={handlePrev} type="button">
                <img src={back} alt="" />
              </button>
              <Play>
                <img src={play} alt="" />
              </Play>
              <Next onClick={handleNext}>
                <img src={forward} alt="" />
              </Next>
            </ControlsBlock>
            <Slider defaultValue={30} />
          </ControlsContainer>
        </ButtonsArea>
        <Swiper
          spaceBetween={10}
          slidesPerView="auto"
          effect="coverflow"
          centeredSlides
          loopedSlides={1}
          // loopAdditionalSlides={1}
          loop
          onSwiper={(swiper) => {
            mySwiper = swiper;
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 1100,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          }}
        >
          <SwiperSlide>
            <Img alt="sd" src="http://lorempixel.com/600/600/abstract/1" />
          </SwiperSlide>
          <SwiperSlide>
            <Img alt="sd" src="http://lorempixel.com/600/600/abstract/2" />
          </SwiperSlide>
          <SwiperSlide>
            <Img alt="sd" src="http://lorempixel.com/600/600/abstract/3" />
          </SwiperSlide>
          <SwiperSlide>
            <Img alt="sd" src="http://lorempixel.com/600/600/abstract/4" />
          </SwiperSlide>
        </Swiper>
      </Main>
    </>
  );
};

export default Deck;
