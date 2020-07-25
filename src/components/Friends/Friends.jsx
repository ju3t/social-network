import React, { useState } from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { uniqueId } from 'lodash';
import SingleFriend from './SingleFriend';
import PageSearchInput from '../../common/Inputs/PageSearchInput';

const FriendsWrapper = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap');
  background: #ffffff;
  font-family: 'Montserrat', sans-serif;
  border-radius: 15px 15px 0px 0px;
  padding: 114px 114px 114px 91px;
  margin-top: 275px;
  position: relative;
`;

const PageMarker = styled.h2`
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

const friendsArr = [
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

const Friends = () => {
  const [filterString, setfilterString] = useState('');

  const filterInputHandler = (event) => setfilterString(event.target.value.toLowerCase());

  const userFiltered = () => {
    if (filterString.length > 0) {
      return friendsArr.filter(({ firstName, lastName }) => {
        const fullName = `${firstName} ${lastName}`.toLowerCase();
        return fullName.includes(filterString);
      });
    }
    return friendsArr;
  };

  const deleteButtonHandler = (id) => () => {
    console.log(`delete ${id}`);
  };

  const messegeButtonHandler = (id) => () => {
    console.log(`message ${id}`);
  };

  return (
    <FriendsWrapper>
      <PageMarker>Друзья</PageMarker>
      <PageSearchInput action={filterInputHandler} placeholder="Начните поиск друзей..." />
      <div>
        {userFiltered().map((item) => (
          <SingleFriend
            key={uniqueId()}
            deleteButtonHandler={deleteButtonHandler(item.id)}
            messegeButtonHandler={messegeButtonHandler(item.id)}
            firstname={item.firstName}
            lastname={item.lastName}
            profesion={item.profesion}
            avatarka={item.avatarka}
          />
        ))}
      </div>
    </FriendsWrapper>
  );
};

export default Friends;
