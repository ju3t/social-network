import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  margin-bottom: 25px;
`;

const MessagesWrap = styled.div`
  background-color: ${({ type }) => (type === 'our' ? '#FFF5E3' : '#EFEFEF')};
  border-radius: 15px;
  margin: ${({ type }) => (type === 'our' ? '0 30px 0 0' : '0 0 0 30px')};
  font-size: 16px;
  color: #000000;
  font-family: Montserrat;
  font-weight: 500;
  font-style: normal;

  & > p {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    margin: 0;
  }

  & > p:last-child {
    padding-bottom: 20px;
  }

  & > p:first-child {
    padding-top: 20px;
  }
`;

const MessageInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${({ type }) => (type === 'our' ? 'flex-start' : 'flex-end')};
  margin-top: 10px;
`;

const MessageDate = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  color: #b6b6b6;
  margin: ${({ type }) => (type === 'our' ? '0 15px 0 0' : '0 0 0 30px')};
`;

const MessageTime = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  color: #b6b6b6;
  margin: ${({ type }) => (type === 'our' ? '0 30px 0 0' : '0 0 0 15px')};
`;

const Messages = ({ messages, messagesType }) => {
  const renderMessages = () => messages.map((el) => <p>{el}</p>);

  return (
    <Container>
      <MessagesWrap type={messagesType}>{renderMessages()}</MessagesWrap>
      <MessageInfo type={messagesType}>
        <MessageDate type={messagesType}>05/05/20</MessageDate>
        <MessageTime type={messagesType}>20:55</MessageTime>
      </MessageInfo>
    </Container>
  );
};

export default Messages;

Messages.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string])),
  messagesType: PropTypes.string,
};

Messages.defaultProps = {
  messages: null,
  messagesType: null,
};
