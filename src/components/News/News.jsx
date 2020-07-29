/* eslint-disable linebreak-style */
import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import NewsList from './NewsList';
import { mockData } from './mockData';

export default function News() {
  return (
    <Wrapper>
      <Container>
        <Label>Новости</Label>
        <Navbar />
        <NewsList data={mockData} />
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-family: Montserrat;
  background: #111111;
  padding: 100px;
`;

const Container = styled.div`
  position: relative;
  max-width: 775px;
  display: flex;
  flex-direction: column;
  padding-left: 95px;
  padding-right: 95px;
  padding-top: 40px;
  background: #ffffff;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  margin-top: 50px;
  border-radius: 15px 15px 0px 0px;
`;

const Label = styled.div`
  position: absolute;
  width: 250px;
  height: 75px;
  top: -60px;
  background: #ffb11b;
  border-radius: 15px;
  padding-top: 20px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;
  color: #000000;
`;
