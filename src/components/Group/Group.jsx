import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import NewsList from './NewsList';
import Comments from './Comments';
import InputComment from './InputComment';
import { mockData } from './mockData';
import photogroup from '../../img/icons/photogroup.svg';

export default function News() {
  const { data, comments } = mockData;
  return (
    <Wrapper>
      <Container>
        <Label>
          <GroupIco>
            <Img src={photogroup} alt="Фото группы" />
          </GroupIco>
          <DataContainer>
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
}

const Wrapper = styled.div`
  
  background: #111111;
  padding: 100px;
`;

const Container = styled.div`
  position: relative;
  max-width: 875px;
  display: flex;
  flex-direction: column;
  padding-left: 95px;
  padding-right: 95px;
  padding-top: 80px;
  background: #ffffff;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
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
