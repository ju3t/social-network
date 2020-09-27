/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useCallback, useState } from 'react';

import avatar from '../UserInfoHeader/img/main photo.png';
import photo from './img/photo.svg';
import music from './img/music.svg';
import video from './img/video.svg';
import note from './img/note.svg';
import dots from './img/dots.svg';
import add from './img/add.svg';

import {
  AvatarMin,
  IconArticle,
  WallCreateArticleContainer,
  WallCreateArticleHeaderBlock,
  WallCreateArticleHeaderBlockLeft,
  WallCreateArticleHeaderBlockLeftText,
  WallCreateArticleHeaderBlockRight,
} from '../../../common/styledComponents';
import ArticleForm from '../ArticleForm';

const renderIcons = () => {
  const icons = [photo, music, video, note, dots];
  return icons.map((el) => <IconArticle img={el} key={el} />);
};

const WallCreateArticle: React.FC = () => {
  const [isOpen, setOpen] = useState(false);

  const changeOpen = useCallback(
    () => setOpen(false),
    [setOpen]
  );

  const renderPlus = useCallback(
    () => <IconArticle img={add} onClick={() => setOpen(true)} />,
    [setOpen],
  );

  return (
    <WallCreateArticleContainer>
      <WallCreateArticleHeaderBlock>
        <WallCreateArticleHeaderBlockLeft>
          <AvatarMin img={avatar} />
          <WallCreateArticleHeaderBlockLeftText>
            Напишите заметку или статью...
          </WallCreateArticleHeaderBlockLeftText>
        </WallCreateArticleHeaderBlockLeft>
        <WallCreateArticleHeaderBlockRight>
          {isOpen ? renderIcons() : renderPlus()}
        </WallCreateArticleHeaderBlockRight>
      </WallCreateArticleHeaderBlock>
      <ArticleForm isOpen={isOpen} changeOpen={changeOpen} />
    </WallCreateArticleContainer>
  );
};

export default WallCreateArticle;
