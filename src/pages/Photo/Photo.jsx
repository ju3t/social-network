import React from 'react';
// import styled from 'styled-components';
// import PropTypes from 'prop-types';

import { MainContainer } from '../../common/styledComponents';
import Header from '../../common/header';
import LeftBlock from '../../common/leftBlock';
import RightBlock from '../../common/rightBlock';
import ContentBox from '../../common/contentBox/ContentBox';
import PhotoSlider from '../../components/PhotoSlider/PhotoSlider';
import SliderItemSt from '../../common/sliderItem/SliderItem';

import data from '../../common/mock-data/albums';

const sliderItems = data.map((item) => SliderItemSt(item));

const Photo = () => (
  <>
    <Header />
    <MainContainer>
      <LeftBlock />
      <RightBlock>
        <ContentBox headline="Фотографии">
          <PhotoSlider>{sliderItems}</PhotoSlider>
        </ContentBox>
      </RightBlock>
    </MainContainer>
  </>
);

export default Photo;
