import React, { useState } from 'react';
// import { connect } from 'react-redux'; import PropTypes from 'prop-types';
import styled from 'styled-components';
import 'swiper/swiper.scss';
import { uniqueId } from 'lodash';
import Slider from '../../common/slider/Slider';
import StyledButton from '../../common/button/VideoPageButton';
// import Header from '../../common/header'; import LeftBlock from
// '../../common/leftBlock'; import RightBlock from '../../common/rightBlock';
// import { MainContainer } from '../../common/styledComponents';
import almostCircleIcon from '../../common/img/icons/almost_circle.svg';
import arrowFilled from '../../common/img/icons/arrow_filled.svg';
import arrowNotFilled from '../../common/img/icons/arr_left.svg';

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
  overflow: hidden;
  margin: 0;
  position: relative;
  margin-bottom: 46px;
  border-radius: 5px;
  &::before {
    border-radius: 5px;
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

const ImgModifed = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const VideoItem = styled.div`
  margin: 0;
`;

const MyVideos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #000000;
  padding-bottom: 43px;
  margin-bottom: 63px;
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

const SliderUnderline = styled.div`
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #000000;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const AddButton = styled.button`
  cursor: pointer;
  content: '+';
  border: none;
  padding: 0;
  margin: 0;
  font-size: 32px;
  background: none;
`;

const PopulerVideos = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const PopularVideosItemWrapper = styled.div`
  flex-shrink: 0;
  margin-bottom: 48px;
  flex-basis: 48%;
`;

const SliderItemWrapper = styled.div`
  margin-right: 25px;
  margin-left: 25px;
`;

const PopularVideoList = styled.div`
  flex-wrap: wrap;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  overflow: hidden;
  transition: all 0.5s;
  max-height: ${({ show }) => (show ? 'auto' : '340px')};
`;

const ShowHideButton = styled.button`
  transition: all 0.2s;
  position: absolute;
  right: -40px;
  content: '';
  border: none;
  height: 25px;
  width: 15px;
  transform: ${({ show }) => (show ? 'rotate(90deg)' : 'rotate(-90deg)')};
  background: #515151;
  mask-image: url(${arrowNotFilled});
  mask-position: center;
  mask-repeat: no-repeat;
  cursor: pointer;
`;

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

const VideoPage = () => {
  const [showPopupar, setShowPopupar] = useState(false);
  console.log(showPopupar);
  return (
    <>
      {' '}
      <PageWrapper>
        {' '}
        <PageMarker>Видеозаписи</PageMarker>
        <MyVideos>
          <PreContentLine>
            <PreContenTitle>Мои видео</PreContenTitle>
            <StyledButton>Добавить</StyledButton>
          </PreContentLine>
          <Slider spaceBetween={52} margin={50} slidesToShow={2} loop="loop">
            {videoArr.map((obj) => (
              <SliderItemWrapper key={uniqueId()}>
                <VideoItem>
                  <VideoImgOverlay href="#">
                    <ImgModifed src={GetYoutubeThumb(obj.id)} alt="" />
                  </VideoImgOverlay>
                  <SliderUnderline>{obj.name}</SliderUnderline>
                </VideoItem>
              </SliderItemWrapper>
            ))}
          </Slider>
        </MyVideos>
        <PopulerVideos>
          <PreContentLine>
            <PreContenTitle>Мои видео</PreContenTitle>
          </PreContentLine>
          <PopularVideoList show={showPopupar}>
            <ShowHideButton show={showPopupar} onClick={() => setShowPopupar(!showPopupar)} />{' '}
            {videoArr.map((obj) => (
              <PopularVideosItemWrapper key={uniqueId()}>
                <VideoItem>
                  <VideoImgOverlay href="#">
                    <ImgModifed src={GetYoutubeThumb(obj.id)} alt="" />
                  </VideoImgOverlay>
                  <SliderUnderline>
                    <span>{obj.name}</span>
                    <AddButton>+</AddButton>
                  </SliderUnderline>
                </VideoItem>
              </PopularVideosItemWrapper>
            ))}
          </PopularVideoList>
        </PopulerVideos>
      </PageWrapper>
    </>
  );
};

export default VideoPage;
