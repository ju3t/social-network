// eslint-disable-next-line
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadUser } from '../../redux-toolkit/userSlice';
import { IStore } from '../../redux-toolkit/store';
import { IUser } from '../../types/user';

import Header from '../../common/header';
import PageWrapper from '../../common/pageWrapper';
import { MainContainer } from '../../common/styledComponents';
import UserInfoHeader from './UserInfoHeader';
import Wall from './Wall';
import ErrorBlock from '../../common/errorBlock';
import LoadingBlock from '../../common/loadingBlock';

interface MainProps {
  loadUser: (arg: number) => void;
  user: IUser;
  loading: boolean;
  error: Error;
}

const Main: React.FC<MainProps> = ({
  loadUser: _loadUser, user, loading, error,
}: MainProps) => {
  useEffect(() => {
    _loadUser(2);
  }, [_loadUser]);
  const renderContent = () => {
    if (user) {
      const profession = 'Программист на HTML';
      const lastStatus = 'online';
      const {
        firstName,
        lastName,
        avatar,
      } = user;
      return (
        <>
          <UserInfoHeader
            firstName={firstName}
            lastName={lastName}
            profession={profession}
            lastStatus={lastStatus}
            avatar={avatar}
          />
          <Wall />
        </>
      );
    }
    if (loading) {
      return <LoadingBlock />;
    }
    return <ErrorBlock errorMessage={error?.message} />;
  };
  return (
    <>
      <Header />
      <MainContainer>
        <PageWrapper messages={false}>{renderContent()}</PageWrapper>
      </MainContainer>
    </>
  );
};

const mapStateToProps = (state: IStore) => ({
  user: state.user.data,
  loading: state.user.loading,
  error: state.user.error,
});

const mapDispatchToProps = {
  loadUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
