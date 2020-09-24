import styled from 'styled-components';
import { Form } from 'formik';
import openNote from '../../icons/open_note.svg';
import closeNote from '../../icons/close_note.svg';
import sendComments from '../../icons/send_comments.svg';

export const WrapperForm = styled(Form)`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
`;

export const Input = styled.input`
  width: 808px;
  height: 46px;
  background: #ffffff;
  border: 1px solid #515151;
  border-radius: 5px;
  margin: 0 25px;
  font-size: 16px;
  line-height: 20px;
  color: #515151;
  padding: 10px;
`;
export const BtnSend = styled.button`
  width: 21px;
  height: 18px;
  background-image: url(${sendComments});
  background-position: center center;
  background-repeat: no-repeat;
  cursor: pointer;
  border: none;
  transform: translateX(-50%);
  background-color: #fff;
  &:focus {
    outline: none;
  }
`;

export const BtnOpenNote = styled.button`
  width: 34px;
  height: 34px;
  border-radius: 17px;
  background-color: #ffb11b;
  transform: translateX(100%);
  background-image: ${({ isOpen }) => (isOpen ? `url(${openNote})` : `url(${closeNote})`)};
  background-position: center center;
  background-repeat: no-repeat;
  cursor: pointer;
  border: none;
  position: absolute;
  bottom: 18px;
  right: 0;

  &:focus {
    outline: none;
  }
`;
