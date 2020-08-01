import React from 'react';
import styled from 'styled-components';
import ScrollBar from 'react-scrollbars-custom';
import { uniqueId } from 'lodash';
import moreOptionSrc from '../../img/icons/chat-more-options.svg';
import Messages from '../../common/chat/messages';
import SubmitMessage from '../../common/chat/submit-message';
import PageSearchInput from '../../common/Inputs/PageSearch';

const Wrapper = styled.div`
  max-width: 1456px;
  width: 100%;
  min-width: auto;
  display: flex;
  flex-direction: row;
  margin: 150px auto 0 auto;
`;

const SelectChat = styled.div`
  border-radius: 15px 15px 0px 0px;
  background-color: white;
  position: relative;
  display: flex;
  flex-direction: column;
  flex-basis: 39%;

  &::before {
    content: 'Сообщения';
    width: 355px;
    height: 155px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    color: #000000;
    background-color: #ffb11b;
    text-align: center;
    line-height: 155px;
    border-radius: 15px;
    position: absolute;
    left: 56px;
    top: -90px;
  }
`;

const PageSearchInputWrapper = styled.div`
  margin-top: 119px;
  padding: 0 85px;
`;

const SelectChatElementsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const SelectChatElement = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  padding: 30px 85px;
  cursor: pointer;

  &:hover {
    background-color: #fff5e3;
  }

  &::after {
    content: '';
    border-bottom: 1px solid #b3b3b3;
    width: 200px;
    bottom: 0;
    padding: 0 85px;
    position: absolute;
  }
`;

const SelectChatUserImg = styled.img`
  height: 90px;
  width: 90px;
  border-radius: 50%;
  object-fit: cover;
`;

const SelectChatUserInfo = styled.div`
  margin-left: 30px;
`;

const UserName = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: #000000;
`;

const UserLastMessage = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #515151;
`;

const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-grow: 1;
  min-width: auto;
  margin: 0 35px;
  background-color: white;
  border-radius: 15px;
  max-height: 1600px;
  height: 1600px;
`;

const ContentHeader = styled.div`
  position: absolute;
  top: -90px;
  left: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ContentHeaderUserImg = styled.img`
  height: 155px;
  width: 155px;
  border-radius: 50%;
  object-fit: cover;
`;

const ContentUserInfo = styled.div`
  margin: -40px 0 0 30px;
`;

const ContentUserName = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  color: #ffffff;
`;

const ContentUserProfession = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  color: #515151;
  margin-top: 5px;
`;

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 60px;
  flex-grow: 1;

  text-align: right;
`;

const MoreOptionButton = styled.img`
  display: flex;
  align-self: flex-end;
  width: 40px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

const MessagesWrapper = styled.div`
  border-top: 1px solid #b3b3b3;
  width: 100%;
  height: -webkit-fill-available;
  max-height: 1500px;
  overflow: hidden;
  margin: 50px 0;
  padding-top: 50px;
`;

const MessageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-right: 35px;
`;

const SubmitWrapper = styled.div``;

const UserLink = styled.a``;

const ContentUserImg = styled.img`
  object-fit: cover;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  cursor: pointer;
`;

const scrollBarStyles = { width: '100%', height: '100%', paddingRight: 10 };

// добавить сообщениям id либо id придёт от сервера
// отсортировать по дате либо придут отсортированные
const testData = [
  {
    id: uniqueId(),
    username: 'kirill22',
    name: 'Кирилл',
    messages: 'Lorem! Aliquam erat volutpat?',
    dateSend: '05/06/20',
    timeSend: '12:55',
    image: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1746394.jpg',
  },
  {
    id: uniqueId(),
    username: 'bogdan13',
    name: 'Богдан',
    messages: 'Pellentesque blandit nibh at leo venenatis, in semper ipsum dictum',
    dateSend: '05/06/20',
    timeSend: '12:58',
    image: 'https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg',
  },
  {
    id: uniqueId(),
    username: 'kirill22',
    name: 'Кирилл',
    messages: 'Nulla porttitor ligula quam, quis auctor felis consectetur non',
    dateSend: '05/06/20',
    timeSend: '12:59',
    image: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1746394.jpg',
  },
  {
    id: uniqueId(),
    username: 'kirill22',
    name: 'Кирилл',
    messages: 'Nulla porttitor ligula quam, quis auctor felis consectetur non',
    dateSend: '05/06/20',
    timeSend: '12:59',
    image: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1746394.jpg',
  },
  {
    id: uniqueId(),
    username: 'bogdan13',
    name: 'Богдан',
    messages: 'Pellentesque blandit nibh at leo venenatis, in semper ipsum dictum',
    dateSend: '05/06/20',
    timeSend: '12:58',
    image: 'https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg',
  },
  {
    id: uniqueId(),
    username: 'kirill22',
    name: 'Кирилл',
    messages: 'Nulla porttitor ligula quam, quis auctor felis consectetur non',
    dateSend: '05/06/20',
    timeSend: '12:59',
    image: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1746394.jpg',
  },
  {
    id: uniqueId(),
    username: 'kirill22',
    name: 'Кирилл',
    messages: 'Lorem! Aliquam erat volutpat?',
    dateSend: '05/06/20',
    timeSend: '13:40',
    image: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1746394.jpg',
  },
  {
    id: uniqueId(),
    username: 'bogdan13',
    name: 'Богдан',
    messages: 'Pellentesque blandit nibh at leo venenatis, in semper ipsum dictum',
    dateSend: '05/06/20',
    timeSend: '12:58',
    image: 'https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg',
  },
  {
    id: uniqueId(),
    username: 'kirill22',
    name: 'Кирилл',
    messages: 'Lorem! Aliquam erat volutpat?',
    dateSend: '05/06/20',
    timeSend: '13:40',
    image: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1746394.jpg',
  },
  {
    id: uniqueId(),
    username: 'kirill22',
    name: 'Кирилл',
    messages: 'Lorem! Aliquam erat volutpat?',
    dateSend: '05/06/20',
    timeSend: '12:55',
    image: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1746394.jpg',
  },
  {
    id: uniqueId(),
    username: 'bogdan13',
    name: 'Богдан',
    messages: 'Pellentesque blandit nibh at leo venenatis, in semper ipsum dictum',
    dateSend: '05/06/20',
    timeSend: '12:58',
    image: 'https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg',
  },
  {
    id: uniqueId(),
    username: 'kirill22',
    name: 'Кирилл',
    messages: 'Nulla porttitor ligula quam, quis auctor felis consectetur non',
    dateSend: '05/06/20',
    timeSend: '12:59',
    image: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1746394.jpg',
  },
  {
    id: uniqueId(),
    username: 'kirill22',
    name: 'Кирилл',
    messages: 'Nulla porttitor ligula quam, quis auctor felis consectetur non',
    dateSend: '05/06/20',
    timeSend: '12:59',
    image: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1746394.jpg',
  },
  {
    id: uniqueId(),
    username: 'bogdan13',
    name: 'Богдан',
    messages: 'Pellentesque blandit nibh at leo venenatis, in semper ipsum dictum',
    dateSend: '05/06/20',
    timeSend: '12:58',
    image: 'https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg',
  },
  {
    id: uniqueId(),
    username: 'kirill22',
    name: 'Кирилл',
    messages: 'Nulla porttitor ligula quam, quis auctor felis consectetur non',
    dateSend: '05/06/20',
    timeSend: '12:59',
    image: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1746394.jpg',
  },
  {
    id: uniqueId(),
    username: 'kirill22',
    name: 'Кирилл',
    messages: 'Lorem! Aliquam erat volutpat?',
    dateSend: '05/06/20',
    timeSend: '13:40',
    image: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1746394.jpg',
  },
  {
    id: uniqueId(),
    username: 'bogdan13',
    name: 'Богдан',
    messages: 'Pellentesque blandit nibh at leo venenatis, in semper ipsum dictum',
    dateSend: '05/06/20',
    timeSend: '12:58',
    image: 'https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg',
  },
  {
    id: uniqueId(),
    username: 'kirill22',
    name: 'Кирилл',
    messages: 'Lorem! Aliquam erat volutpat?',
    dateSend: '05/06/20',
    timeSend: '13:40',
    image: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1746394.jpg',
  },
  {
    id: uniqueId(),
    username: 'kirill22',
    name: 'Кирилл',
    messages: 'Lorem! Aliquam erat volutpat?',
    dateSend: '05/06/20',
    timeSend: '12:55',
    image: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1746394.jpg',
  },
  {
    id: uniqueId(),
    username: 'bogdan13',
    name: 'Богдан',
    messages: 'Pellentesque blandit nibh at leo venenatis, in semper ipsum dictum',
    dateSend: '05/06/20',
    timeSend: '12:58',
    image: 'https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg',
  },
  {
    id: uniqueId(),
    username: 'kirill22',
    name: 'Кирилл',
    messages: 'Nulla porttitor ligula quam, quis auctor felis consectetur non',
    dateSend: '05/06/20',
    timeSend: '12:59',
    image: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1746394.jpg',
  },
  {
    id: uniqueId(),
    username: 'kirill22',
    name: 'Кирилл',
    messages: 'Nulla porttitor ligula quam, quis auctor felis consectetur non',
    dateSend: '05/06/20',
    timeSend: '12:59',
    image: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1746394.jpg',
  },
  {
    id: uniqueId(),
    username: 'bogdan13',
    name: 'Богдан',
    messages: 'Pellentesque blandit nibh at leo venenatis, in semper ipsum dictum',
    dateSend: '05/06/20',
    timeSend: '12:58',
    image: 'https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg',
  },
  {
    id: uniqueId(),
    username: 'kirill22',
    name: 'Кирилл',
    messages: 'Nulla porttitor ligula quam, quis auctor felis consectetur non',
    dateSend: '05/06/20',
    timeSend: '12:59',
    image: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1746394.jpg',
  },
  {
    id: uniqueId(),
    username: 'kirill22',
    name: 'Кирилл',
    messages: 'Lorem! Aliquam erat volutpat?',
    dateSend: '05/06/20',
    timeSend: '13:40',
    image: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1746394.jpg',
  },
  {
    id: uniqueId(),
    username: 'bogdan13',
    name: 'Богдан',
    messages: 'Pellentesque blandit nibh at leo venenatis, in semper ipsum dictum',
    dateSend: '05/06/20',
    timeSend: '12:58',
    image: 'https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg',
  },
  {
    id: uniqueId(),
    username: 'kirill22',
    name: 'Кирилл',
    messages: 'Lorem! Aliquam erat volutpat?',
    dateSend: '05/06/20',
    timeSend: '13:40',
    image: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1746394.jpg',
  },
];

const groupMessagesByUser = testData.reduce((acc, el) => {
  const lastAccElement = acc[acc.length - 1];
  const lastAccIndex = acc.length - 1;

  const initialMessagesArray = { ...el, messages: [{ title: el.messages, id: uniqueId() }] };
  if (lastAccElement === undefined) return [initialMessagesArray];

  if (lastAccElement.username === el.username) {
    const newObject = {
      ...acc[lastAccIndex],
      messages: [...acc[lastAccIndex].messages, { title: el.messages, id: uniqueId() }],
    };
    return [...acc.splice(0, lastAccIndex), newObject];
  }
  return [...acc, initialMessagesArray];
}, []);

const MessagesPage = () => {
  const renderMessages = () =>
    groupMessagesByUser.map((el) => {
      if (el.username === 'bogdan13') {
        return (
          <MessageWrapper key={el.id}>
            <Messages messages={el.messages} messagesType="our" />
            <UserLink to="#">
              <ContentUserImg src={el.image} />
            </UserLink>
          </MessageWrapper>
        );
      }
      return (
        <MessageWrapper key={el.id}>
          <UserLink to="#">
            <ContentUserImg src={el.image} />
          </UserLink>
          <Messages messages={el.messages} messagesType="their" />
        </MessageWrapper>
      );
    });

  return (
    <Wrapper>
      <SelectChat>
        <PageSearchInputWrapper>
          <PageSearchInput placeholder="Поиск..." />
        </PageSearchInputWrapper>

        <SelectChatElementsWrapper>
          <SelectChatElement>
            <SelectChatUserImg src="https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg" />
            <SelectChatUserInfo>
              <UserName>Имя Фамилия</UserName>
              <UserLastMessage>Текст последнего сообщения</UserLastMessage>
            </SelectChatUserInfo>
          </SelectChatElement>

          <SelectChatElement>
            <SelectChatUserImg src="https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg" />
            <SelectChatUserInfo>
              <UserName>Имя Фамилия</UserName>
              <UserLastMessage>Текст последнего сообщения</UserLastMessage>
            </SelectChatUserInfo>
          </SelectChatElement>

          <SelectChatElement>
            <SelectChatUserImg src="https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg" />
            <SelectChatUserInfo>
              <UserName>Имя Фамилия</UserName>
              <UserLastMessage>Текст последнего сообщения</UserLastMessage>
            </SelectChatUserInfo>
          </SelectChatElement>

          <SelectChatElement>
            <SelectChatUserImg src="https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg" />
            <SelectChatUserInfo>
              <UserName>Имя Фамилия</UserName>
              <UserLastMessage>Текст последнего сообщения</UserLastMessage>
            </SelectChatUserInfo>
          </SelectChatElement>

          <SelectChatElement>
            <SelectChatUserImg src="https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg" />
            <SelectChatUserInfo>
              <UserName>Имя Фамилия</UserName>
              <UserLastMessage>Текст последнего сообщения</UserLastMessage>
            </SelectChatUserInfo>
          </SelectChatElement>
        </SelectChatElementsWrapper>
      </SelectChat>

      <ContentWrapper>
        <ContentHeader>
          <ContentHeaderUserImg src="https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg" />
          <ContentUserInfo>
            <ContentUserName>Павел Нечаев</ContentUserName>
            <ContentUserProfession>Программист</ContentUserProfession>
          </ContentUserInfo>
        </ContentHeader>

        <Content>
          <MoreOptionButton src={moreOptionSrc} />

          <MessagesWrapper>
            <ScrollBar scrollTop={99999} style={scrollBarStyles}>
              {renderMessages()}
            </ScrollBar>
          </MessagesWrapper>

          <SubmitWrapper>
            <SubmitMessage />
          </SubmitWrapper>
        </Content>
      </ContentWrapper>
    </Wrapper>
  );
};

export default MessagesPage;
