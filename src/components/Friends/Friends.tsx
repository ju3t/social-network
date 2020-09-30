/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useState } from 'react';
import styled from 'styled-components';
import { uniqueId } from 'lodash';
import SingleFriend from './SingleFriend';
import PageSearchInput from '../../common/Inputs/PageSearch';
import { IFriendsArr } from './FriendsInterface';

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

const friendsArr: IFriendsArr[] = [
  {
    firstName: 'Firstname1',
    lastName: 'Lastname1',
    profesion: 'profeson 1',
    avatarka: 'https://dummyimage.com/600x400/000/fff',
    id: 1,
  },
  {
    firstName: 'Firstname2',
    lastName: 'Lastname2',
    profesion: 'profeson 2',
    avatarka: 'https://dummyimage.com/600x400/000/fff',
    id: 2,
  },
  {
    firstName: 'Firstname3',
    lastName: 'Lastname3',
    profesion: 'profeson 3',
    avatarka: 'https://dummyimage.com/600x400/000/fff',
    id: 3,
  },
];

const Friends: React.FC = () => {
  const [filterString, setfilterString] = useState<string>('');

  const filterInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => setfilterString(event.target.value.toLowerCase());

  const userFiltered = (): IFriendsArr[] => {
    if (filterString.length > 0) {
      return friendsArr.filter(({ firstName, lastName }) => {
        const fullName = `${firstName} ${lastName}`.toLowerCase();
        return fullName.includes(filterString);
      });
    }
    return friendsArr;
  };

  const deleteButtonHandler = (event: React.MouseEvent, id: number) => {
    console.log(id);
  };

  const messegeButtonHandler = (event: React.MouseEvent, id: number) => {
    console.log(id);
  };

  console.log(uniqueId());
  return (
    <FriendsWrapper>
      <PageMarker>Друзья</PageMarker>
      <PageSearchInput action={filterInputHandler} placeholder="Начните поиск друзей..." />
      <div>
        {userFiltered().map((item, index) => (
          <SingleFriend
            key={uniqueId()}
            deleteButtonHandler={deleteButtonHandler}
            messegeButtonHandler={messegeButtonHandler}
            firstname={item.firstName}
            lastname={item.lastName}
            profesion={item.profesion}
            avatarka={item.avatarka}
            id={index}
          />
        ))}
      </div>
    </FriendsWrapper>
  );
};

export default Friends;
