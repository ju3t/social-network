import React, { useEffect, useState } from 'react';
import ScrollBar from 'react-scrollbars-custom';
import { Link } from 'react-router-dom';
import moreOptionSrc from '../../img/icons/chat-more-options.svg';
import MessagesChat from '../../common/chat/messages';
import massagesClass from './Messages.module.scss';
import SubmitMessage from '../../common/chat/submit-message';
import PageSearchInput from '../../common/Inputs/PageSearch';
import PageWrapper from '../../common/pageWrapper';
import { groupMessagesByUser } from '../../common/chat/helper';
import { Ichat } from '../../types/chat';
// import {
//   getChats,
//   getGroupChats,
//   getSingleChats,
//   removeUserFromChat,
//   setTitleGroup,
// } from '../../services/chat-controller';

import getChats from './TestAPI/testFetch'; // !! TEST API

const scrollBarStyles = { width: '100%', height: '100%', paddingRight: 10 };

const Messages: React.FC = () => {
  const [listChats, setListChats] = useState<Ichat[]>([]);

  useEffect(() => {
    getChats().then((value) => {
      setListChats(value);
    })
      .catch((err) => console.log(err));
  }, []);

  const renderMessages = () => groupMessagesByUser.map((el) => {
    if (el.username === 'bogdan13') {
      return (
        <div className={massagesClass.messageWrapper} key={el.id}>
          <MessagesChat messages={el.messages} messagesType="our" />
          <Link to="/">
            <img alt="avatar" src={el.image} />
          </Link>
        </div>
      );
    }
    return (
      <div className={massagesClass.messageWrapper} key={el.id}>
        <Link to="/">
          <img alt="avatar" src={el.image} />
        </Link>
        <MessagesChat messages={el.messages} messagesType="their" />
      </div>
    );
  });

  const contentChatList = listChats.length === 0 ? <span>Loading...</span>
    : listChats.map((chat) => (
      <div key={chat.id} className={massagesClass.selectChatElement}>
        <img
          alt="avatar"
          src={chat.image}
        />
        <div className={massagesClass.selectChatUserInfo}>
          <span>{chat.title}</span>
          <p>{chat.lastMessage}</p>
        </div>
      </div>
    ));
  console.log(contentChatList);

  return (
    <PageWrapper messages>
      <div className={massagesClass.wrapper}>
        <div className={massagesClass.selectChat}>
          <div className={massagesClass.pageSearchInputWrapper}>
            <PageSearchInput placeholder="Поиск..." />
          </div>
          <div className={massagesClass.selectChatElementsWrapper}>
            {contentChatList}
          </div>
        </div>

        <div className={massagesClass.contentWrapper}>
          <div className={massagesClass.contentHeader}>
            <img alt="avatar" src="https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg" />
            <div className={massagesClass.contentUserInfo}>
              <span>Павел Нечаев</span>
              <p>Программист</p>
            </div>
          </div>

          <div className={massagesClass.content}>
            <button type="button" onClick={() => console.log('menu chats')}>
              <img alt="more" src={moreOptionSrc} />
            </button>

            <div className={massagesClass.messagesWrapper}>
              <ScrollBar scrollTop={9999} style={scrollBarStyles}>
                {renderMessages()}
              </ScrollBar>
            </div>

            <div>
              <SubmitMessage />
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Messages;
