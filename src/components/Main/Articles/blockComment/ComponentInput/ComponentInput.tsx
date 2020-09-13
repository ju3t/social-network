/* eslint-disable react/prop-types */
import React from 'react';
import { Avatar } from 'antd';
import userFoto from '../../blockNotes/userFoto.png';
import {
  Wrapper,
  Input,
  BtnSend,
  BtnOpenNote,
} from './styles.js';

interface Props {
  setIsOpen: (state: boolean) => void;
}

const ComponentInput: React.FC<Props> = ({ setIsOpen }) => (
  <Wrapper>
    <Avatar src={userFoto} />
    <Input placeholder="Напишите что-нибудь..." />
    <BtnSend />
    <BtnOpenNote onClick={() => setIsOpen(false)} />
  </Wrapper>
);
export default ComponentInput;
