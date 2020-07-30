import React from 'react';
import SliderSt from '../common/slider/Slider';
import SliderItemSt from '../common/sliderItem/SliderItem';
import PhotoSliderSt from '../components/PhotoSlider/PhotoSlider';

import data from '../common/mock-data/albums';

export default { title: 'Slider' };

export const SliderItem = () => SliderItemSt(data[0]);

const sliderItems = data.map((item) => SliderItemSt(item));
export const Slider = () => (
  <SliderSt slidesPerView="4" spaceBetween="20">
    {sliderItems}
  </SliderSt>
);

export const PhotoSlider = () => (
  <PhotoSliderSt slidesPerView="4" spaceBetween="20">
    {sliderItems}
  </PhotoSliderSt>
);
