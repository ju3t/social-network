import styled from 'styled-components';
import { Form } from 'formik';
import sendMessageSrc from '../../../img/icons/send-message.svg';

export const WrapForm = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const TextWrap = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-grow: 1;
  
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
`;
export const Text = styled.input`
  height: 3rem;
  border: none;
  background: #FFF5E3;
  width: 100%;
  padding: 10px 40px 15px 15px;
  border-radius: 15px;
  resize: none;

  &:focus {
    box-shadow: 0 0 0 2pt red;
    border: 1px solid #fff5e3;
    outline: none;
    box-shadow: 0 0 3pt 2pt #ffb11b;
  }
`;

export const FileIcon = styled.img`
  position: absolute;
  cursor: pointer;
  top: 10px;
  padding: 5px;
  right: 0;
  transform: translateX(-100%);
`;

export const SubmitMessageButton = styled.button`
  min-width: 21px;
  min-height: 18px;
  margin-left: 25px;
  border: none;
  background: none;
  background-image: url(${sendMessageSrc});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  &:hover {
    opacity: 0.7;
  }
`;
