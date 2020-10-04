// eslint-disable-next-line
import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { loadUser } from '../../redux-toolkit/userSlice';
import { loadPostsByUser } from '../../redux-toolkit/postsSlice';
import { RootState } from '../../redux-toolkit/store';
import Header from '../../common/header';
import PageWrapper from '../../common/pageWrapper';
import { MainContainer } from '../../common/styledComponents';
import UserInfoHeader from './UserInfoHeader';
import Wall from './Wall';
import ErrorBlock from '../../common/errorBlock';
import LoadingBlock from '../../common/loadingBlock';
import { StyledLoadingWrapped } from './styled';

const mapStateToProps = (state: RootState) => ({
  user: state.user.data,
  loading: state.user.loading,
  error: state.user.error,
});

const mapDispatch = {
  loadUser,
  loadPostsByUser,
};
const connector = connect(mapStateToProps, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

const Main: React.FC<Props> = ({
  loadUser: _loadUser, loadPostsByUser: _loadPostsByUser, user, loading, error,
}) => {
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

export default connector(Main);
