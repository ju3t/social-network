/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useState } from 'react';
import ScrollBar from 'react-scrollbars-custom';
import Author from '../message-author';
import Messages from '../../chat/messages';
import SubmitMessage from '../../chat/submit-message';
import { groupMessagesByUser } from '../../chat/helper';

import {
  Content,
  ContentWrapper,
  Header,
  ModalChatMessageWrapper,
  ModalChatOpen,
  ModalChatWrapper,
  SubmitMessageWrap,
} from './styles';

const scrollBarStyles = { width: '100%', height: '100%', paddingRight: 35 };


const ModalChat = () => {
  const [isOpen, setIsOpen] = useState(true);

  const switchModalStatus = () => {
    setIsOpen(!isOpen);
  };
  const renderMessages = () => groupMessagesByUser.map((el) => {
    if (el.username === 'bogdan13') {
      return (
        <ModalChatMessageWrapper key={el.id}>
          <Messages messages={el.messages} messagesType="our" />
          <Author img={el.image} name={el.name} />
        </ModalChatMessageWrapper>
      );
    }
    return (
      <ModalChatMessageWrapper key={el.id}>
        <Author img={el.image} name={el.name} />
        <Messages messages={el.messages} messagesType="their" />
      </ModalChatMessageWrapper>
    );
  });
  return (
    <ModalChatWrapper isOpen={isOpen}>
      <ContentWrapper isOpen={isOpen}>
        <Header>Чат JMSN</Header>
        <Content>
          <ScrollBar style={scrollBarStyles}>{renderMessages()}</ScrollBar>
        </Content>
        <SubmitMessageWrap>
          <SubmitMessage />
        </SubmitMessageWrap>
      </ContentWrapper>
      <ModalChatOpen onClick={switchModalStatus} isOpen={isOpen} />
    </ModalChatWrapper>
  );
};

export default ModalChat;
