import React from 'react';

import photo1 from './img/photo 1.png';
import photo2 from './img/photo 2.png';
import photo3 from './img/photo 3.png';
import photo4 from './img/photo 4.png';

import {
  WallContainer,
  WallInfoBlock,
  WallInfoUserAbout,
  InfoHeaderText,
  InfoHeaderTextBlock,
  InfoHeaderListItemLeft,
  InfoHeaderTextLeftBlock,
  InfoHeaderTextRightBlock,
  InfoHeaderListItemRight,
  InfoPhotoBlock,
  InfoUserPhoto,
} from '../../../common/styledComponents';
import WallCreateArticle from '../WallCreateArticle';
import FormStatus from './FormStatus';
import BlockNotes from '../Articles/blockNotes/BlockNotes';

const leftBlockItems = [
  'День рождения',
  'Образование',
  'Профессия',
  'Язык',
  'Город',
  'Личная информация',
];
const rigtBlockItems = [
  '01.01.1985г.',
  'МГУ им. Ломоносова’08',
  'Frontend-разработчик',
  'Русский, английский',
  'Москва',
  'Фрилансер по жизни',
];
const Wall = (): React.FunctionComponentElement<unknown> => (
  <WallContainer>
    <FormStatus />
    <WallInfoBlock>
      <WallInfoUserAbout>
        <InfoHeaderText>О себе</InfoHeaderText>
        <InfoHeaderTextBlock>
          <InfoHeaderTextLeftBlock>
            {leftBlockItems.map((el) => (
              <InfoHeaderListItemLeft key={el}>{el}</InfoHeaderListItemLeft>
            ))}
          </InfoHeaderTextLeftBlock>
          <InfoHeaderTextRightBlock>
            {rigtBlockItems.map((el) => (
              <InfoHeaderListItemRight key={el}>{el}</InfoHeaderListItemRight>
            ))}
          </InfoHeaderTextRightBlock>
        </InfoHeaderTextBlock>
      </WallInfoUserAbout>
      <WallInfoUserAbout>
        <InfoHeaderText>Фотографии</InfoHeaderText>
        <InfoPhotoBlock>
          <InfoUserPhoto img={photo1} />
          <InfoUserPhoto img={photo2} />
          <InfoUserPhoto img={photo3} />
          <InfoUserPhoto img={photo4} />
        </InfoPhotoBlock>
      </WallInfoUserAbout>
    </WallInfoBlock>
    <WallCreateArticle />
    <BlockNotes />
  </WallContainer>
);

export default Wall;
