import React from 'react';
import __ from 'lodash';

import PageWrapper from '../../common/pageWrapper';

import ContentBox from '../../common/contentBox/ContentBox';
import PhotoSlider from './PhotoSlider';
import SliderItemSt from '../../common/sliderItem';
import SectionHeader from '../../common/sectionHeader';
import Button from '../../common/button';

import data from './albums';
import AllPhotosGrid from './AllPhotosGrid';
import AllPhotosItem from './AllPhotosItem';

const sliderItems = data.map((item) => SliderItemSt(item));
const allPhotoItems = data.map((item) => (
  <AllPhotosItem src={item.image} alt="q" key={__.uniqueId()} />
));

const Photo = () => (
  <>
    <PageWrapper>
      <ContentBox headline="Фотографии">
        <SectionHeader headline="Альбомы">
          <Button>Создать</Button>
        </SectionHeader>
        <PhotoSlider itemsToShow={3} itemsToScroll={3} pagination={false} itemPadding={[0]}>
          {sliderItems}
        </PhotoSlider>
        <hr />
        <SectionHeader headline="Все фотографии">
          <Button>Добавить</Button>
        </SectionHeader>
        <AllPhotosGrid gap="44px">{allPhotoItems}</AllPhotosGrid>
      </ContentBox>
    </PageWrapper>
  </>
);

export default Photo;
