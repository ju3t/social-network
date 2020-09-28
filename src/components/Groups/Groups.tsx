import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import SingleGroup from './SingleGroup';
import testAvatarka from '../../img/test-group-avatar.svg';
import PageSearchInput from '../../common/Inputs/PageSearch';
import { TypeRootReducer } from '../../redux-toolkit/rootReducer';
import { getGroups, fetchgroups } from '../../redux-toolkit/groupSlice';

interface GroupData {
  avatarka: string;
  name: string;
  groupCategory: string;
  subscribers: number;
  id: number;
}

const testData = [
  {
    avatarka: testAvatarka,
    name: 'Название группы',
    category: 'категория',
    followers: 228,
    id: 1,
  },
  {
    avatarka: testAvatarka,
    name: 'Название группы',
    category: 'категория',
    followers: 666,
    id: 2,
  },
  {
    avatarka: testAvatarka,
    name: 'Название группы',
    category: 'категория',
    followers: 777,
    id: 3,
  },
  {
    avatarka: testAvatarka,
    name: 'Название группы',
    category: 'категория',
    followers: 1234,
    id: 4,
  },
  {
    avatarka: testAvatarka,
    name: 'Название группы',
    category: 'категория',
    followers: 911,
    id: 5,
  },
  {
    avatarka: testAvatarka,
    name: 'Название группы',
    category: 'категория',
    followers: 3,
    id: 6,
  },
];

const Groups: React.FC = () => {
  const dispatch = useDispatch();
  const { groups } = useSelector((state: TypeRootReducer) => state.groupsReducer);
  const fetch = () => {
    dispatch(fetchgroups(1, 15));
  };
  const [groupsToShow, setGroupsToShow] = useState(groups);
  useEffect(() => {
    fetch();
  }, []);

  const [groupName, setGroupName] = useState<string>('');
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setGroupName(value.toLowerCase());
  };
  const filterGroups = (data: GroupData[]) =>
    data.filter((el) => el.name.toLowerCase().includes(groupName));

  const renderGroups = (data: GroupData[]) =>
    data.map((el) => {
      const { avatarka = testAvatarka, name, groupCategory, subscribers } = el;
      return (
        <SingleGroup
          key={el.id}
          avatar={avatarka}
          name={name}
          category={groupCategory}
          followers={subscribers}
        />
      );
    });
  return (
    <GroupsContainer>
      <button onClick={() => console.log(groupsToShow, groups)}>TEST</button>

      <PageSearchInput placeholder="Начните поиск группы..." action={handleInput} />
      <GroupsTitle>Группы</GroupsTitle>
      {groupName.length > 0 ? renderGroups(filterGroups(groups)) : renderGroups(groups)}
    </GroupsContainer>
  );
};

export default Groups;

export const GroupsContainer = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap');
  font-family: 'Montserrat', sans-serif;
  background: #ffffff;
  border-radius: 15px;
  padding: 114px 114px 114px 91px;
  margin-top: 275px;
  position: relative;
  min-height: 1200px;
`;

const GroupsTitle = styled.h2`
  margin: 0;
  font-size: 32px;
  font-weight: 600;
  line-height: 39px;
  background-color: #ffb11b;
  border-radius: 15px;
  position: absolute;
  padding: 58px 61px;
  top: -90px;
`;
