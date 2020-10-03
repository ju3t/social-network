/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { uniqueId } from 'lodash';
import { connect, useDispatch } from 'react-redux';
import { Spin } from 'antd';
import SingleFriend from './SingleFriend';
import PageSearchInput from '../../common/Inputs/PageSearch';
import { IFrendsProps, IStore } from './FriendsInterface';
import { IUser } from '../../types/user';
import { loadFrendsList, setFrendFilter } from '../../redux-toolkit/frendsListSlice';

export const FriendsWrapper = styled.div` 
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap');
  background: #ffffff;
  font-family: 'Montserrat', sans-serif;
  border-radius: 15px;
  padding: 114px 114px 114px 91px;
  margin-top: 275px;
  position: relative;
  min-height: 1200px;
`;

export const PageMarker = styled.h2`
  margin: 0;
  left: 90px;
  top: -91px;
  padding: 58px 77px;
  position: absolute;
  border-radius: 15px;
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;
  background: #ffb11b;
`;

const Friends: React.FC<IFrendsProps> = ({
  loadFrendsList: _loadFrendsList,
  frendsList,
  frendsFilter,
  loading,
  error,
}: IFrendsProps) => {
  useEffect(() => {
    _loadFrendsList(2);
  }, [_loadFrendsList]);

  const dispatch = useDispatch();

  const filterInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => dispatch(
    setFrendFilter(event.target.value.toLowerCase()),
  );

  const userFiltered = (): IUser[] => {
    if (frendsFilter.length > 0) {
      return frendsList.filter(({ firstName, lastName }) => {
        const fullName = `${firstName} ${lastName}`.toLowerCase();
        return fullName.includes(frendsFilter);
      });
    }
    return frendsList;
  };

  const deleteButtonHandler = (event: React.MouseEvent, id: number) => {
    console.log('Удалем пользовател из друзей, его id ', id);
  };

  const messegeButtonHandler = (event: React.MouseEvent, id: number) => {
    console.log(id);
  };

  return (
    <FriendsWrapper>
      <PageMarker>Друзья</PageMarker>
      <PageSearchInput action={filterInputHandler} placeholder="Начните поиск друзей..." />
      {frendsList ? (
        <div>
          {userFiltered().map((item) => (
            <SingleFriend
              key={uniqueId()}
              deleteButtonHandler={deleteButtonHandler}
              messegeButtonHandler={messegeButtonHandler}
              firstname={item.firstName}
              lastname={item.lastName}
              profesion="No field in api"
              avatarka={item.avatar}
              id={item.userId}
            />
          ))}
        </div>
      ) : <Spin size="large" />}

    </FriendsWrapper>
  );
};

const mapStateToProps = (state: IStore) => ({
  frendsList: state.frendList.data,
  loading: state.frendList.loading,
  error: state.frendList.error,
  frendsFilter: state.frendList.frendsFilter,
});

const mapDispatchToProps = {
  loadFrendsList,
};

export default connect(mapStateToProps, mapDispatchToProps)(Friends);
