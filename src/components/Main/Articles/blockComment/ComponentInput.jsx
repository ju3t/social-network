import React from 'react';
import styled from 'styled-components';
import { Avatar } from 'antd';

import userFoto from '../blockNotes/userFoto.png';
import openNote from '../icons/open_note.svg';
import closeNote from '../icons/close_note.svg';
import sendComments from '../icons/send_comments.svg';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`;

const Input = styled.input`
  width: 808px;
  height: 46px;
  background: #ffffff;
  border: 1px solid #515151;
  box-sizing: border-box;
  border-radius: 5px;
  margin: 0 25px;
  font-size: 16px;
  line-height: 20px;
  color: #515151;
  padding: 10px;
`;
const BtnSend = styled.button`
  width: 21px;
  height: 18px;
  background-image: url(${sendComments});
  background-position: center center;
  background-repeat: no-repeat;
  cursor: pointer;
  border: none;
  background-color: #fff;
  &:focus {
    outline: none;
  }
`;

const BtnOpenNote = styled.button`
  width: 34px;
  height: 34px;
  border-radius: 17px;
  background-color: #ffb11b;
  background-image: ${({ isOpen }) => (isOpen ? `url(${openNote})` : `url(${closeNote})`)};
  background-position: center center;
  background-repeat: no-repeat;
  cursor: pointer;
  border: none;
  position: absolute;
  bottom: 18px;
  right: 0;

  &:focus {
    outline: none;
  }
`;

const ComponentInput = () => (
  <Wrapper>
    <Avatar src={userFoto} />
    <Input placeholder="Напишите что-нибудь..." />
    <BtnSend />
    <BtnOpenNote />
  </Wrapper>
);
export default ComponentInput;
