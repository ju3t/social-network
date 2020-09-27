/* eslint-disable @typescript-eslint/no-use-before-define */
import * as React from 'react';
import { connect } from 'react-redux';

import { IStore } from './../../../redux-toolkit/store';
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
  user: {
    firstName: string,
    lastName: string,
  //  profession: string,
  //  lastStatus: Date | string,
    avatar: string
  }
}

/* TODO с onlineStatus и lastStatus */
const UserInfoHeader : React.FC<IUserInfoHeader> = ({
  user
}: IUserInfoHeader) => {
  const {
    firstName,
    lastName,
    avatar,
  } = user;
  const profession = 'Программист на HTML';
  const lastStatus = 'online';
  return (
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
}

const mapStateToProps = ( state: IStore ) => ({
  user: state?.user?.data
})

export default connect(mapStateToProps)(UserInfoHeader);
