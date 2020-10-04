import styled from 'styled-components';
import { Form } from 'formik';

export const InputName = styled.input`
  margin-left: 0;
  margin-top: 32px;
  margin-bottom: 20px;
  width: 100%;
  border: none;
  border-bottom: 1px solid #b3b3b3;
  outline: none !important;
  font-size: 24px;
`;

export const InputText = styled.textarea`
  margin-left: 0;
  margin-top: 42px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #b2b2b2;
  outline: none !important;
  font-size: 16px;
  resize: none;
`;

export const ArticleStyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  position: relative;
  transition: 1s;
  color: black;
`;

export const ArticleButton = styled.button`
  width: 331px;
  height: 67px;
  margin-top: 100px;
  background: #ffb11b;
  border-radius: 15px;
  border: none;
  font-family: Montserrat, serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 29px;
  letter-spacing: 0.065em;
  color: #000000;
  &:hover {
    cursor: pointer;
  }
`;
