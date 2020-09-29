import React, { useState, useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import SingleGroup from './SingleGroup';
import testAvatarka from '../../img/test-group-avatar.svg';
import PageSearchInput from '../../common/Inputs/PageSearch';
import { TypeRootReducer } from '../../redux-toolkit/rootReducer';
import { loadGroups } from '../../redux-toolkit/groupSlice';
import { IStore } from '../../redux-toolkit/store';

interface GroupData {
  avatarka: string;
  name: string;
  groupCategory: string;
  subscribers: number;
  id: number;
}
// interface GroupsProps {
//   loadGroups: (page?: number, size?: number) => void;
//   groups: GroupData[];
//   loading: boolean;
//   error: Error;
// }
interface GroupsProps {
  loadGroups: (page: number, size: number) => void;
  groups: GroupData[];
  loading: boolean;
  error: Error;
}
const Groups: React.FC<GroupsProps> = ({
  loadGroups: _loadGroups, loading, error, groups,
}: GroupsProps) => {
  // const dispatch = useDispatch();
  // const { groups } = useSelector((state: TypeRootReducer) => state.groups);
  const [groupsToShow, setGroupsToShow] = useState(groups);
  useEffect(() => {
    _loadGroups(1, 15);
    console.log(_loadGroups);
  }, []);

  const [groupName, setGroupName] = useState<string>('');
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setGroupName(value.toLowerCase());
  };
  // eslint-disable-next-line max-len
  const filterGroups = (data: GroupData[]) => data.filter((el) => el.name.toLowerCase().includes(groupName));

  const renderGroups = (data: GroupData[]) => data.map((el) => {
    const {
      avatarka = testAvatarka, name, groupCategory, subscribers,
    } = el;
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
      <PageSearchInput placeholder="Начните поиск группы..." action={handleInput} />
      <GroupsTitle>Группы</GroupsTitle>
      {groupName.length > 0 ? renderGroups(filterGroups(groups)) : renderGroups(groups)}
    </GroupsContainer>
  );
};

const mapStateToProps = (state: IStore) => ({
  groups: state.groups.groups,
  memberOf: state.groups.memberOf,
  loading: state.groups.loading,
  error: state.groups.error,
});

const mapDispatchToProps = {
  loadGroups,
};

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
export default connect(mapStateToProps, mapDispatchToProps)(Groups);
