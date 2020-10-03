// eslint-disable-next-line
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadUser } from '../../redux-toolkit/userSlice';
import { loadPostsByUser } from '../../redux-toolkit/postsSlice';
import { IStore } from '../../redux-toolkit/store';
import { IUser } from '../../types/user';

import Header from '../../common/header';
import PageWrapper from '../../common/pageWrapper';
import { MainContainer } from '../../common/styledComponents';
import UserInfoHeader from './UserInfoHeader';
import Wall from './Wall';
import ErrorBlock from '../../common/errorBlock';
import LoadingBlock from '../../common/loadingBlock';
import { StyledLoadingWrapped } from './styled';

interface MainProps {
  loadUser: (arg: number) => void;
  loadPostsByUser: (arg: number) => void;
  user: IUser;
  loading: boolean;
  error: Error;
}

const Main: React.FC<MainProps> = ({
  loadUser: _loadUser, loadPostsByUser: _loadPostsByUser, user, loading, error,
}: MainProps) => {
  useEffect(() => {
    _loadUser(1);
    _loadPostsByUser(1);
  }, [_loadUser, _loadPostsByUser]);
  const renderContent = () => {
    if (user) {
      return (
        <>
          <UserInfoHeader />
          <Wall />
        </>
      );
    }
    if (loading) {
      return <StyledLoadingWrapped><LoadingBlock /></StyledLoadingWrapped>;
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
  loadPostsByUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
