import React, { useEffect, useState } from 'react';
import ScrollBar from 'react-scrollbars-custom';
import { connect, ConnectedProps } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../redux-toolkit/store';
import moreOptionSrc from '../../img/icons/chat-more-options.svg';
import MessagesChat from '../../common/chat/messages';
import massagesClass from './Messages.module.scss';
import SubmitMessage from '../../common/chat/submit-message';
import PageSearchInput from '../../common/Inputs/PageSearch';
import PageWrapper from '../../common/pageWrapper';
import { groupMessagesByUser } from '../../common/chat/helper';
import { Ichat, IsingleChat } from '../../types/chat';
// import {
//   getChats,
//   getGroupChats,
//   getSingleChats,
//   removeUserFromChat,
//   setTitleGroup,
// } from '../../services/chat-controller';

import { getChats, getSingleChats } from '../../services/chat-controller/testFetch'; // !! TEST API

const scrollBarStyles = { width: '100%', height: '100%', paddingRight: 10 };

const mapStateToProps = (state:RootState) => {
  const { chats, currentChat } = state.chat;
  const { data } = state.user;
  return {
    chats,
    currentChat,
    user: data,
  };
};

// const mapDispatch = action;
const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

const Messages: React.FC<Props> = (props) => {
  const [listChats, setListChats] = useState<Ichat[]>([]);
  const [currentChat, setCurrentChat] = useState<IsingleChat[]>([]);
  console.log(props);

  useEffect(() => {
    getChats().then((chats) => {
      setListChats(chats);
      if (currentChat.length === 0) {
        getSingleChats(chats[0].id)
          .then((massages) => {
            setCurrentChat(massages);
          })
          .catch((err) => console.log(err));
      }
    })
      .catch((err) => console.log(err));
  }, []);

  const renderMessages = () => currentChat.map((el) => {
    if (el.username === 'bogdan13') {
      return (
        <div className={massagesClass.messageWrapper} key={el.idMassage}>
          <MessagesChat messages={el.message} messagesType="our" date={el.persistDate} />
          <img alt="avatar" src={el.userSenderImage} />
        </div>
      );
    }
    return (
      <div className={massagesClass.messageWrapper} key={el.idMassage}>
        <img alt="avatar" src={el.userSenderImage} />
        <MessagesChat messages={el.message} messagesType="their" date={el.persistDate} />
      </div>
    );
  });

  console.log(currentChat);

  const contentChatList = listChats.length === 0 ? <h1>Loading...</h1>
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

export default connector(Messages);
