import * as React from 'react';

import avatar from './img/main photo.png';
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

const UserInfoHeader = () : React.FunctionComponentElement<unknown> => (
  <UserInfoHeaderContainer>
    <UserInfoAvatar>
      <Avatar img={avatar} />
      <AddPhotoIcon img={addPhotoIcon} />
      <UserOnlineIcon />
    </UserInfoAvatar>
    <UserInfoNameBlock>
      <UserName>Богдан Леста</UserName>
      <UserProfession>Frontend разработчик</UserProfession>
      <UserOnlineStatus>был 20.07.2020 в 15:07</UserOnlineStatus>
    </UserInfoNameBlock>
  </UserInfoHeaderContainer>
);

export default UserInfoHeader;
