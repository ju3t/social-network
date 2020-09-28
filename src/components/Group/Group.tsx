import React from 'react';
import styled from 'styled-components';
import { connect, ConnectedProps } from 'react-redux';
import Navbar from './Navbar';
import NewsList from './NewsList';
import Comments from './Comments';
import InputComment from './InputComment';
import { mockData } from './mockData';
import photogroup from '../../img/icons/photogroup.svg';
import { getGroups } from '../../redux-toolkit/groupSlice';

interface RootState {
  groups: [];
}

const mapDispatch = { getGroups };
const mapState = (state: RootState) => ({
  groups: state.groups,
});
const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
interface Idata {
  data: {
    date: Date;
    description: string;
    link: string;
    owner: string;
    news: Inews[];
  };
  comments: Icomment[];
}
interface Inews {
  id: number;
  title: string;
  img: string;
  text: string;
  tags: string[];
  author: string;
  time: string;
  favoritesCount: number;
  likesCount: number;
  commentsCount: number;
  repostsCount: number;
}
interface Icomment {
  avatar: string;
  author: string;
  date: Date;
  text: string;
}
type GroupProps = {
  getGroups: () => void;
};
interface Iprops {
  getGroups: () => void;
}
const Group = (props: PropsFromRedux) => {
  // const Group: React.FC<GroupProps> = (props) => {
  const { getGroups } = props;
  const handle = () => {
    getGroups('qweeee');
  };
  console.log(props);
  console.log(getGroups);
  const { data, comments }: Idata = mockData;
  return (
    <Wrapper>
      <Container>
        <Label>
          <GroupIco>
            <Img src={photogroup} alt="Фото группы" />
          </GroupIco>
          <DataContainer>
            <button onClick={handle}>Test</button>
            <NameGroup>Группа для красивых</NameGroup>
            <Category>Категория</Category>
          </DataContainer>
        </Label>
        <Navbar data={data} />
        <NewsList data={mockData} />
        <Comments data={comments} />
        <InputComment />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-family: Montserrat;
  background: #111222;
  padding: 100px 0;
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap');
  font-family: 'Montserrat', sans-serif;
  background: #111111;
  border-radius: 15px;
  padding: 114px 0 114px 0;
  margin-top: 30px;
  position: relative;
  min-height: 1200px;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-left: 95px;
  padding-right: 95px;
  padding-top: 80px;
  background: #ffffff;
  text-align: center;

  margin-top: 50px;
  border-radius: 15px 15px 15px 15px;
`;

const Label = styled.div`
  position: absolute;
  top: -90px;

  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;
  display: flex;
`;

const GroupIco = styled.div`
  width: 155px;
  height: 155px;
  border: 50%;
  margin-right: 20px;
`;

const Img = styled.img`
  display: block;
  object-fit: cover;
  width: 155px;
  height: 155px;
`;

const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 15px;
`;

const NameGroup = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #ffffff;
  text-align: left;
  margin-bottom: 6px;
`;

const Category = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #b2b2b2;
  text-align: left;
`;

export default connector(Group);
