import React from 'react';
import styled from 'styled-components';
import moreOptionSrc from '../../img/icons/chat-more-options.svg';

const Wrapper = styled.div`
  width: 1456px;
  min-width: auto;
  display: flex;
  flex-direction: row;
  margin-top: 150px;
  background-color: #111111;
`;

const SelectChat = styled.div`
  border-radius: 15px 15px 0px 0px;
  background-color: white;
  position: relative;
  display: flex;
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
    background-color: #FFB11B;
    text-align: center;
    line-height: 155px;
    border-radius: 15px;
    position: absolute;
    left: 56px;
    top: -90px;
  }
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
    background-color: #FFF5E3;
  }
  
  &::after {
    content: "";
    border-bottom: 1px solid #B3B3B3;
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
  height: 100vh;
`;

const ContentHeader = styled.div`
  position: absolute;
  top: -90px;;
  left: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const ContentUserImg = styled.img`
  height: 155px;
  width: 155px;
  border-radius: 50%;
  object-fit: cover;
`;

const ContentUserInfo = styled.div`
  margin: -40px 0 0 30px;
`

const ContentUserName = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  color: #FFFFFF;
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
`;

const MessagesWrapper = styled.div`
  border-top: 1px solid #B3B3B3;
  width: 100%;
  margin-top: 50px;
`;

const Messages = () => {
  return (
    <Wrapper>
      <SelectChat>
        <SelectChatElementsWrapper>
          <SelectChatElement>
            <SelectChatUserImg src='https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg' />
            <SelectChatUserInfo>
              <UserName>Имя Фамилия</UserName>
              <UserLastMessage>Текст последнего сообщения</UserLastMessage>
            </SelectChatUserInfo>
          </SelectChatElement>

          <SelectChatElement>
            <SelectChatUserImg src='https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg' />
            <SelectChatUserInfo>
              <UserName>Имя Фамилия</UserName>
              <UserLastMessage>Текст последнего сообщения</UserLastMessage>
            </SelectChatUserInfo>
          </SelectChatElement>

          <SelectChatElement>
            <SelectChatUserImg src='https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg' />
            <SelectChatUserInfo>
              <UserName>Имя Фамилия</UserName>
              <UserLastMessage>Текст последнего сообщения</UserLastMessage>
            </SelectChatUserInfo>
          </SelectChatElement>

          <SelectChatElement>
            <SelectChatUserImg src='https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg' />
            <SelectChatUserInfo>
              <UserName>Имя Фамилия</UserName>
              <UserLastMessage>Текст последнего сообщения</UserLastMessage>
            </SelectChatUserInfo>
          </SelectChatElement>

          <SelectChatElement>
            <SelectChatUserImg src='https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg' />
            <SelectChatUserInfo>
              <UserName>Имя Фамилия</UserName>
              <UserLastMessage>Текст последнего сообщения</UserLastMessage>
            </SelectChatUserInfo>
          </SelectChatElement>
        </SelectChatElementsWrapper>
      </SelectChat>

      <ContentWrapper>
        <ContentHeader>
          <ContentUserImg src='https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg' />
          <ContentUserInfo>
            <ContentUserName>Павел Нечаев</ContentUserName>
            <ContentUserProfession>Программист</ContentUserProfession>
          </ContentUserInfo>
        </ContentHeader>

        <Content>
          <MoreOptionButton src={moreOptionSrc} />
          <MessagesWrapper>

          </MessagesWrapper>
        </Content>
      </ContentWrapper>
    </Wrapper>
  )
}

export default Messages;
