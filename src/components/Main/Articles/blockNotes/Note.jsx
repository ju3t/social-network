import React, { useState } from 'react';
import styled from 'styled-components';

import openNote from '../icons/open_note.svg';
import closeNote from '../icons/close_note.svg';

const TextOne = `Dolor sit amet, consectetur adipiscing elit. Maecenas sed congue urna. Etiam in pretium
orci. Nunc id nulla sit amet ex lacinia euismod a eu risus. Sed consequat viverra libero
congue vestibulum. Ut dolor odio, posuere vitae accumsan a, placerat ut odio. Proin in lorem
dui. Maecenas viverra convallis nisi eget tincidunt. Vivamus nec tempus nunc, sit amet
auctor massa. Morbi lobortis, elit eu malesuada malesuada, quam mauris semper turpis, vitae
dapibus erat nibh at purus. Ut id odio massa.`;

const TextTwo = `Nulla in metus dictum, dapibus justo sit amet, tristique purus. Pellentesque blandit nibh at
leo venenatis, in semper ipsum dictum. Nulla porttitor ligula quam, quis auctor felis
consectetur non. Praesent at auctor metus. Etiam molestie tincidunt justo eget laoreet.
Quisque vestibulum pretium tortor in mattis. Nullam nec elit vitae tellus interdum vehicula.
Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
Praesent congue arcu at accumsan luctus. Nam sed diam nibh. In at lectus sodales, interdum
turpis at, semper nisl.`;

const Wrapper = styled.div`
  position: relative;
`;

const TitleText = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 160.9%;
  margin: 0 0 10px 0;
  color: #000000;
  text-align: start;
`;
const Text = styled.div`
  width: 95%;
  font-weight: normal;
  font-size: 16px;
  line-height: 165%;
  margin: 0 0 40px 0;
  color: #000000;
  text-align: start;
  //height: 100px;
  //height: 100%;
  height: ${(props) => props.height};
  overflow: hidden;
`;

const BtnOpenNote = styled.button`
  width: 34px;
  height: 34px;
  border-radius: 17px;
  background-color: #ffb11b;
  background-image: ${({ isOpen }) => (isOpen ? `url(${closeNote})` : `url(${openNote})`)};
  background-position: center center;
  background-repeat: no-repeat;
  cursor: pointer;
  border: none;
  position: absolute;
  bottom: 0;
  right: 0;

  &:focus {
    outline: none;
  }
`;

const TagsList = styled.ul`
  padding: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 45px 0 55px 0;
  margin-top: 10px;
`;
const TagItem = styled.li`
  list-style: none;
  font-size: 16px;
  color: black;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const arrayTags = [
  { id: 0, tag: '#nunc' },
  { id: 1, tag: '#dolor' },
];

const Note = () => {
  const [height, setHeight] = useState(`${100}px`);
  const minHeight = '100px';
  const fullHeight = '100%';
  return (
    <Wrapper>
      <TitleText>Lorem ipsum</TitleText>
      <Text height={height}>{TextOne + TextTwo}</Text>
      <BtnOpenNote
        isOpen={height !== minHeight}
        onClick={() => (height === minHeight ? setHeight(fullHeight) : setHeight(minHeight))}
      />
      <TagsList>
        {arrayTags.map((item) => (
          <TagItem key={item.id}>{item.tag}</TagItem>
        ))}
      </TagsList>
    </Wrapper>
  );
};
export default Note;
