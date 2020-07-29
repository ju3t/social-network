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

const arrayNotes = [
  { id: 0, note: ' Etiam lacus lorem, cursus eget maximus id, vestibulum ac turpis.' },
  { id: 1, note: 'Maecenas vulputate justo sed elit feugiat, vitae tempus quam euismod.' },
  { id: 2, note: 'Fusce sapien ante, faucibus eu lectus et, rhoncus varius leo.' },
  { id: 3, note: 'Nam nec lacus id ipsum eleifend rhoncus ac in elit.' },
  { id: 4, note: 'Nullam pretium nibh quis sapien aliquam.' },
];

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
const Text = styled.p`
  width: 95%;
  font-weight: normal;
  font-size: 16px;
  line-height: 165%;
  margin: 0 0 40px 0;
  color: #000000;
  text-align: start;
`;

const NotesList = styled.ul`
  padding: 0 0 0 20px;
`;
const NoteItem = styled.li`
  list-style-type: decimal;
  text-align: start;
  margin: 10px 0 0 0;
  color: black;
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

const renderFullNoteText = () => (
  <>
    <TitleText>Aliquam erat volutpat</TitleText>
    <Text>{TextTwo}</Text>
    <TitleText>Nunc eget venenatis justo</TitleText>
    <NotesList>
      {arrayNotes.map((item) => (
        <NoteItem key={item.id}>{item.note}</NoteItem>
      ))}
    </NotesList>
  </>
);

const Note = () => {
  const [isShowFullNoteText, setIsShowFullNoteText] = useState(false);
  return (
    <Wrapper>
      <TitleText>Lorem ipsum</TitleText>
      <Text>{TextOne}</Text>
      {isShowFullNoteText ? renderFullNoteText() : null}
      <BtnOpenNote
        isOpen={isShowFullNoteText}
        onClick={() => setIsShowFullNoteText(!isShowFullNoteText)}
      />
    </Wrapper>
  );
};
export default Note;
