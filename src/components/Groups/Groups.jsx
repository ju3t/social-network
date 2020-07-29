import React, { useState } from 'react';
import styled from 'styled-components';
import SingleGroup from './SingleGroup';
import testAvatarka from '../../img/test-group-avatar.svg';
import PageSearchInput from '../../common/inputs/PageSearch';

const testData = [{
  avatarka: testAvatarka, name: 'Название группы', category: 'категория', followers: 'количество подписчиков', id: 1,
}, {
  avatarka: testAvatarka, name: 'Название группы', category: 'категория', followers: 'количество подписчиков', id: 2,
}, {
  avatarka: testAvatarka, name: 'Название группы', category: 'категория', followers: 'количество подписчиков', id: 3,
}, {
  avatarka: testAvatarka, name: 'Название группы', category: 'категория', followers: 'количество подписчиков', id: 4,
}, {
  avatarka: testAvatarka, name: 'Название группы', category: 'категория', followers: 'количество подписчиков', id: 5,
}, {
  avatarka: testAvatarka, name: 'Название группы', category: 'категория', followers: 'количество подписчиков', id: 6,
}];

const Groups = () => {
  const [groupName, setGroupName] = useState('');
  const handleInput = (event) => {
    const { value } = event.target;
    setGroupName(value.toLowerCase());
  };
  const filterGroups = (data) => data.filter((el) => el.name.toLowerCase().includes(groupName));

  const renderGroups = (data) => data.map((el) => {
    const {
      avatarka, name, category, followers,
    } = el;
    return (
      <SingleGroup
        key={el.id}
        avatar={avatarka}
        name={name}
        category={category}
        followers={followers}
      />
    );
  });
  return (
    <GroupsContainer>
      <PageSearchInput
        placeholder="Начните поиск группы..."
        action={handleInput}
      />
      <GroupsTitle>
        Группы
      </GroupsTitle>
      {groupName.length > 0 ? renderGroups(filterGroups(testData)) : renderGroups(testData)}
    </GroupsContainer>
  );
};

export default Groups;
const GroupsContainer = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap');
  font-family: Montserrat, sans-serif;
display: flex;
flex-direction: column;
padding: 114px 94px 49px 94px;
border-radius: 15px 15px 0 0;
background-color:#FFFFFF;
position: relative;
`;

const GroupsTitle = styled.h2`
margin:0;
font-size:32px;
font-weight: 600;
line-height: 39px;
background-color: #FFB11B;
border-radius:15px;
position: absolute;
padding:58px 61px;
top: -90px;

`;
