import styled from 'styled-components';
import React, { useState } from 'react';
import ScrollBar from 'react-scrollbars-custom';
import { Button } from 'antd';
import Author from './message-author';
import Messages from '../chat/messages';
import SubmitMessage from '../chat/submit-message';
import OpenModalSrc from '../../img/icons/modal-message-open.svg';
import { groupMessagesByUser } from '../chat/helper';

const ModalChatWrapper = styled.div`
  position: relative;
  width: 476px;
  height: 840px;
  padding-bottom: 40px;
  overflow: hidden;
  margin: 0px auto;
`;

const ContentWrapper = styled.div`
  height: 100%;
  width: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: white;
  transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(870px)')};
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  transition: transform 1s ease-in-out, opacity 1s ease-in-out;
`;

const Header = styled.div`
  height: 112px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #ffb11b;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;

  color: #000000;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  max-width: 406px;
  padding: 35px 35px 0 35px;
  background-color: #ffffff;
  height: 560px;
  overflow-y: scroll;
  overflow: hidden;
`;

const ModalChatMessageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-right: 35px;
`;

const SubmitMessageWrap = styled.div`
  margin: 30px;
`;

const ModalChatOpen = styled(Button)`
  position: absolute;
  width: 60px;
  height: 60px;
  background: url(${OpenModalSrc}) #ffb11b center center no-repeat;
  margin: 0;
  padding: 0;
  border-radius: 50%;
  cursor: pointer;
  right: 50px;
  bottom: 10px;
  border: none;
  outline: none;
  transform: rotate(${({ isOpen }) => (isOpen ? '-180deg' : '0deg')});
  transition: transform 1s ease-in-out;
`;

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
    <ModalChatWrapper>
      <ContentWrapper isOpen={isOpen}>
        <Header>Чат JMSN</Header>
        <Content>
          <ScrollBar style={scrollBarStyles}>{renderMessages()}</ScrollBar>
        </Content>
        <SubmitMessageWrap>
          <SubmitMessage />
        </SubmitMessageWrap>
      </ContentWrapper>
      <ModalChatOpen onClick={switchModalStatus} />
    </ModalChatWrapper>
  );
};

export default ModalChat;
