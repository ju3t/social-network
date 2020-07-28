import React from 'react';
import styled from 'styled-components';

import Comment from './Comment';
import ComponentInput from './ComponentInput';
import userFotoComment1 from './userFotoComment1.png';

const arrayComments = [
  {
    id: 0,
    userName: 'Стефан Багдасар',
    userFoto: userFotoComment1,
    date: '07.07.2020 в 00:11',
    text:
      'Nulla in metus dictum, dapibus '
      + 'justo sit amet, tristique purus. '
      + 'Pellentesque blandit nibh at leo '
      + 'venenatis, in semper ipsum dictum. '
      + 'Nulla porttitor ligula quam, quis '
      + 'auctor felis consectetur non. Praesent '
      + 'at auctor metus. Etiam molestie '
      + 'tincidunt justo eget laoreet. Quisque '
      + 'vestibulum pretium tortor in mattis. '
      + 'Nullam nec elit vitae tellus interdum vehicula. '
      + 'Orci varius natoque penatibus et '
      + 'magnis dis parturient montes, nascetur ridiculus mus. '
      + 'Praesent congue arcu at accumsan '
      + 'luctus. Nam sed diam nibh. In at lectus sodales, '
      + 'interdum turpis at, semper nisl.',
  },
];

const Wrapper = styled.div`
  margin-left: 106px;
  width: 79%;
  padding: 40px 0 40px 60px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-bottom: 1px solid #515151;
  margin-bottom: 50px;
`;
const Title = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 160.9%;
  color: #515151;
  margin: 0 0 40px 0;
  font-family: Montserrat, serif;
`;

const BlockComments = () => (
  <Wrapper>
    <Title>Комментарии</Title>
    {arrayComments.map((item) => (
      <Comment key={item.id} comment={item} />
    ))}
    <ComponentInput />
  </Wrapper>
);

export default BlockComments;
