import React from 'react';
import ItemsGridSt from '../components/Photo/AllPhotosGrid';
import AllPhotosItemSt from '../components/Photo/AllPhotosItem';

import data from '../components/Photo/albums';

export default { title: 'Grid' };

const items = data.map((item) => <AllPhotosItemSt src={item.image} alt="q" />);
export const AllPhotosGrid = () => (
  <ItemsGridSt template="1fr 1fr 1fr" gap="44px">
    {items}
  </ItemsGridSt>
);
