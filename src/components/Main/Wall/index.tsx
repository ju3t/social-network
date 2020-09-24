/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import { connect } from 'react-redux';
import { IStore } from '../../../redux-toolkit/store';

import photo1 from './img/photo 1.png';
import photo2 from './img/photo 2.png';
import photo3 from './img/photo 3.png';
import photo4 from './img/photo 4.png';

import {
  WallContainer,
  WallInfoBlock,
  InfoPhotoBlock,
  InfoUserPhoto,
  InfoHeaderText,
  WallInfoUserAbout,
} from '../../../common/styledComponents';
import WallCreateArticle from '../WallCreateArticle';
import FormStatus from './FormStatus';
import BlockNotes from '../Articles/blockNotes/BlockNotes';
import UserAbout from '../UserAbout';
import { IUser } from '../../../types/user';

interface IWall {
  user: IUser | null,
}

const Wall: React.FC<IWall> = ({ user }: IWall) => (
  <WallContainer>
    <FormStatus />
    <WallInfoBlock>
      <UserAbout
        dateOfBirth={user?.dateOfBirth}
        education={user?.education}
              // profession={  }
        linkSite={user?.linkSite}
        city={user?.city}
        aboutMe={user?.aboutMe}
      />
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

const mapStateToProps = (state: IStore) => ({
  user: state.user.data,
});

export default connect(mapStateToProps)(Wall);
