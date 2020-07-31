import React from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import 'swiper/swiper.scss';
import { uniqueId } from 'lodash';
import Slider from '../../common/slider/Slider';
import StyledButton from '../../common/button/VideoPageButton';
// import Header from '../../common/header';
// import LeftBlock from '../../common/leftBlock';
// import RightBlock from '../../common/rightBlock';
// import { MainContainer } from '../../common/styledComponents';
import almostCircleIcon from '../../common/img/icons/almost_circle.svg';
import arrowFilled from '../../common/img/icons/arrow_filled.svg';

const PageWrapper = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap');
  background: #ffffff;
  font-family: 'Montserrat', sans-serif;
  border-radius: 15px;
  padding: 114px 114px 114px 91px;
  margin-top: 275px;
  width: 1291px;
  position: relative;
`;

const PageMarker = styled.h2`
  margin: 0;
  left: 90px;
  top: -91px;
  padding: 58px 77px;
  position: absolute;
  border-radius: 15px;
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;
  background: #ffb11b;
`;

const VideoImgOverlay = styled.a`
  height: 326px;
  display: block;
  /* width: 535px; */
  border-radius: 5px;
  overflow: hidden;
  margin: 0;
  margin-bottom: 46px;
  &::before {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.42);
    z-index: 2;
    width: 100%;
    height: 326px;
    content: '';
  }
  &::after {
    background-image: url(${almostCircleIcon}), url(${arrowFilled});
    height: 73px;
    width: 73px;
    position: absolute;
    content: '';
    z-index: 3;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    left: 0px;
    height: 326px;
  }
`;

// const VideoOverlay = styled.div`
//   content: '';
//   background-image: url(${almostCircleIcon}), url(${arrowFilled});
// `

const ImgModifed = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const SliderWrapper = styled.div`
  margin: 0;
`;

const MyVideos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const PreContentLine = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 47px;
`;

const PreContenTitle = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 37px;
`;

const SliderText = styled.span`
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #000000;
`;

//
const videoArr = [
  {
    id: 'lTRiuFIWV54',
    name: 'video 1',
  },
  {
    id: 'lTRiuFIWV54',
    name: 'video 2',
  },
  {
    id: 'lTRiuFIWV54',
    name: 'video 3',
  },
  {
    id: 'lTRiuFIWV54',
    name: 'video 4',
  },
];

const GetYoutubeThumb = (id) => `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;

const VideoPage = () => (
  <>
    <PageWrapper>
      <PageMarker>Видеозаписи</PageMarker>
      <MyVideos>
        <PreContentLine>
          <PreContenTitle>Мои видео</PreContenTitle>
          <StyledButton>Добавить</StyledButton>
        </PreContentLine>
        <Slider spaceBetween={52} slidesPerView={2} loop>
          {videoArr.map((obj) => (
            <SliderWrapper key={uniqueId()}>
              <VideoImgOverlay href="#">
                <ImgModifed src={GetYoutubeThumb(obj.id)} alt="" />
              </VideoImgOverlay>
              <SliderText>{obj.name}</SliderText>
            </SliderWrapper>
          ))}
        </Slider>
      </MyVideos>
    </PageWrapper>
  </>
);

export default VideoPage;
