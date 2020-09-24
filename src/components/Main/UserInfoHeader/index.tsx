/* eslint-disable @typescript-eslint/no-use-before-define */
import * as React from 'react';

import addPhotoIcon from './img/add photo.svg';
import {
  UserInfoHeaderContainer,
  UserInfoAvatar,
  UserInfoNameBlock,
  Avatar,
  AddPhotoIcon,
  UserName,
  UserProfession,
  UserOnlineStatus,
  UserOnlineIcon,
} from '../../../common/styledComponents';

export interface IUserInfoHeader {
    firstName: string,
    lastName: string,
    profession: string,
    lastStatus: Date | string,
    avatar: string
}

/* TODO с onlineStatus и lastStatus */
const UserInfoHeader : React.FC<IUserInfoHeader> = ({
  firstName,
  lastName,
  profession,
  lastStatus,
  avatar,
}: IUserInfoHeader) => (
  <UserInfoHeaderContainer>
    <UserInfoAvatar>
      <Avatar img={avatar} />
      <AddPhotoIcon img={addPhotoIcon} />
      { lastStatus === 'online' && <UserOnlineIcon />}
    </UserInfoAvatar>
    <UserInfoNameBlock>
      <UserName>
        {firstName}
        {' '}
        {lastName}
      </UserName>
      <UserProfession>{profession}</UserProfession>
      <UserOnlineStatus>{lastStatus}</UserOnlineStatus>
    </UserInfoNameBlock>
  </UserInfoHeaderContainer>
);

export default UserInfoHeader;
