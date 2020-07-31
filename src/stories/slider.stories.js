import React from 'react';
import SliderSt from '../common/slider/Slider2';
import SliderItemSt from '../common/sliderItem/SliderItem';
import PhotoSliderSt from '../components/Photo/PhotoSlider';

import data from '../components/Photo/albums';

export default { title: 'Slider2' };

export const SliderItem = () => SliderItemSt(data[0]);

const sliderItems = data.map((item) => SliderItemSt(item));
export const Slider = () => (
  <SliderSt slidesPerView={4} spaceBetween={20}>
    {sliderItems}
  </SliderSt>
);

export const PhotoSlider = () => (
  <PhotoSliderSt slidesPerView={4} spaceBetween={20}>
    {sliderItems}
  </PhotoSliderSt>
);
