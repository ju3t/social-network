import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow } from 'swiper';
import 'swiper/swiper.scss';
import { Slider } from 'antd';
import tracks from '../tracks';
import 'antd/dist/antd.css';
import Card from './Card';
import forward from '../../../common/img/icons/forward.svg';
import play from '../../../common/img/icons/play.svg';
import stop from '../../../common/img/icons/stop.svg';
import back from '../../../common/img/icons/back.svg';

SwiperCore.use([EffectCoverflow]);

const Deck = () => {
  const [currentTrackId, setCurrentTrackId] = useState(tracks[0].id);
  const [mySwiper, setMySwiper] = useState();
  const [playing, setPlaying] = useState(false);
  const [timePlayed, setTimePlayed] = useState(0);

  const handleNext = () => {
    mySwiper.slideNext();
    setCurrentTrackId(tracks[mySwiper.realIndex].id);
  };

  const handlePrev = () => {
    mySwiper.slidePrev();
    setCurrentTrackId(tracks[mySwiper.realIndex].id);
  };

  const handleToggle = () => {
    setPlaying((prevState) => !prevState);
  };

  const Slides = tracks.map((track) => (
    <SwiperSlide>
      <Card image={track.image} />
    </SwiperSlide>
  ));

  return (
    <Main>
      <ButtonsArea>
        <ControlsContainer>
          <ControlsBlock>
            <button onClick={handlePrev} type="button">
              <img src={back} alt="" />
            </button>
            <Play onClick={handleToggle}>
              <img src={playing ? stop : play} alt="" />
            </Play>
            <Next onClick={handleNext}>
              <img src={forward} alt="" />
            </Next>
          </ControlsBlock>
          <Slider defaultValue={0} value={timePlayed * 100} />
        </ControlsContainer>
        <TrackInfoArea>
          <TrackAlbum>{tracks.find((song) => song.id === currentTrackId).title}</TrackAlbum>
          <TrackInfo>
            <TrackPerformer>
              {tracks.find((song) => song.id === currentTrackId).performer}
            </TrackPerformer>
            <TrackTitle>{tracks.find((song) => song.id === currentTrackId).album}</TrackTitle>
          </TrackInfo>
        </TrackInfoArea>
      </ButtonsArea>

      <Swiper
        spaceBetween={10}
        slidesPerView="auto"
        effect="coverflow"
        centeredSlides
        loopedSlides={1}
        loopAdditionalSlides={1}
        loop
        allowTouchMove={false}
        onSwiper={(swiper) => {
          setMySwiper(swiper);
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 1100,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        }}
      >
        {Slides}
      </Swiper>
      <Player
        onEnded={() => {
          handleNext();
        }}
        onProgress={({ played }) => setTimePlayed(played)}
        playing={playing}
        url={tracks.find((song) => song.id === currentTrackId).url}
      />
    </Main>
  );
};

export default Deck;

const Main = styled.div`
  //border: 1px solid #000000;
  position: absolute;
  width: 980px;
  top: -150px;
  border: 10px solid gold;
`;

const ButtonsArea = styled.div`
  position: absolute;
  padding: 60px 10px;
  top: 40px;
  //left: 200px;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  width: 80%;
  margin: 0 100px;
`;

const ControlsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
`;

const ControlsBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
  button {
    outline: none;
    background: none;
    border: none;
    box-shadow: none;
    cursor: pointer;
  }
`;

const Play = styled.button`
  width: 110px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 0 20px;
  border: 2px solid #ff0000;
`;

const Next = styled.button`
  margin-left: 10px;
`;

const Player = styled(ReactPlayer)`
  display: none; // скрыт блок проигрывателя
  margin: 0 auto;
  border-radius: 10px;
  border: 1px solid #000000;
  background-color: #808080;
`;

const TrackInfoArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 40%;
  text-shadow: 1px 1px 2px #000000;
`;

const TrackTitle = styled.span`
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
`;

const TrackPerformer = styled.span`
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #ffffff;
`;

const TrackAlbum = styled.span`
  text-align: center;
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 37px;
  color: #ffffff;
`;

const TrackInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
