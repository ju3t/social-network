/* eslint-disable @typescript-eslint/no-use-before-define */
import * as React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { RootState } from '../../../redux-toolkit/store';
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

// export interface IUserInfoHeader {
//   user: {
//     firstName: string,
//     lastName: string,
//   //  profession: string,
//   //  lastStatus: Date | string,
//     avatar: string
//   }
// }

const mapStateToProps = (state: RootState) => ({
  firstName: state.user.data?.firstName,
  lastName: state.user.data?.lastName,
  avatar: state.user.data?.lastName,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

/* TODO с onlineStatus и lastStatus */
const UserInfoHeader : React.FC<Props> = ({ firstName = '', lastName = '', avatar = '' }) => {
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
};

export default connector(UserInfoHeader);
