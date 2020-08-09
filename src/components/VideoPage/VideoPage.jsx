import React from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import 'swiper/swiper.scss';
import { uniqueId } from 'lodash';
import { Swiper, SwiperSlide } from 'swiper/react';

import Header from '../../common/header';
// import LeftBlock from '../../common/leftBlock';
import RightBlock from '../../common/rightBlock';
import { MainContainer } from '../../common/styledComponents';

const PageWrapper = styled.div`
  @font-face url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap');
  background: #ffffff;
  font-family: 'Montserrat', sans-serif;
  border-radius: 15px;
  padding: 114px 114px 114px 91px;
  /* margin-top: 275px; */
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

//
const videoArr = [
  {
    preview: 'https://dummyimage.com/600x400/000/fff',
    name: 'video 1',
  },
  {
    preview: 'https://dummyimage.com/600x400/000/fff',
    name: 'video 2',
  },
  {
    preview: 'https://dummyimage.com/600x400/000/fff',
    name: 'video 3',
  },
  {
    preview: 'https://dummyimage.com/600x400/000/fff',
    name: 'video 4',
  },
];

const VideoPage = () => (
  <>
    <Header />
    <MainContainer>
      <RightBlock>
        <PageWrapper>
          <PageMarker>Видеозаписи</PageMarker>
          <div>
            <Swiper
              spaceBetween={30}
              slidesPerView={2}
              // onSlideChange={() => console.log('change')}
              // onSwiper={(swiper) => console.log(swiper)}
            >
              {videoArr.map((obj) => (
                <SwiperSlide key={uniqueId()}>{obj.preview}</SwiperSlide>
              ))}
            </Swiper>
          </div>
        </PageWrapper>
      </RightBlock>
    </MainContainer>
  </>
);

export default VideoPage;
