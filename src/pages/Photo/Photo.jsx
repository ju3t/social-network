import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import __ from 'lodash';

import PageWrapper from '../../common/pageWrapper';

import ContentBox from '../../common/contentBox/ContentBox';
import PhotoSlider from '../../components/Photo/PhotoSlider';
import SliderItemSt from '../../common/sliderItem/SliderItem';
import Button from '../../common/button/Button';

import data from '../../components/Photo/albums';
import AllPhotosGrid from '../../components/Photo/AllPhotosGrid';
import AllPhotosItem from '../../components/Photo/AllPhotosItem';

const sliderItems = data.map((item) => SliderItemSt(item));
const allPhotoItems = data.map((item) => (
  <AllPhotosItem src={item.image} alt="q" key={__.uniqueId()} />
));

const Headline = styled.h2`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 37px;
  vertical-align: middle;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  height: 67px;
  margin: 50px 0;
`;

const Photo = () => (
  <>
    <PageWrapper>
      <ContentBox headline="Фотографии">
        <SectionHeader>
          <Headline>Альбомы</Headline>
          <Button>Создать</Button>
        </SectionHeader>
        <PhotoSlider itemsToShow={3} itemsToScroll={3} pagination={false} itemPadding={[0]}>
          {sliderItems}
        </PhotoSlider>
        <hr />
        <SectionHeader>
          <Headline>Все фотографии</Headline>
          <Button>Добавить</Button>
        </SectionHeader>
        <AllPhotosGrid gap="44px">{allPhotoItems}</AllPhotosGrid>
      </ContentBox>
    </PageWrapper>
  </>
);

export default Photo;
