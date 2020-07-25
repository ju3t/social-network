import React from 'react';
import styled from 'styled-components';
import { Input } from 'antd';
import { useFormik } from 'formik';
import sendMessageSrc from '../../img/icons/send-message.svg';
import addFileSrc from '../../img/icons/add-file.svg';

const { TextArea } = Input;
const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
`;

const TextWrap = styled.div`
  position: relative;
  display: flex;
  flex-grow: 1;
`;
const Text = styled(TextArea)`
  width: 100%;
  background: #fff5e3;
  border-radius: 15px;
  padding: 10px 40px 15px 15px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  resize: none;
  line-height: 20px;
  height: 20px;

  &:focus {
    box-shadow: 0 0 0 2pt red;
    border: 1px solid #fff5e3;
    outline: none;
    box-shadow: 0 0 3pt 2pt #ffb11b;
  }
`;

const FileIcon = styled.img`
  position: absolute;
  cursor: pointer;
  top: 10px;
  padding: 5px;
  left: calc(100% - 35px);
`;

const SubmitMessageIcon = styled.img`
  margin-left: 25px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

export default () => {
  const formik = useFormik({
    initialValues: { message: '' },
    onSubmit: () => {},
  });

  return (
    <Wrap>
      <TextWrap>
        <Text
          placeholder="Напишите что-нибудь..."
          id="message"
          value={formik.values.message}
          onChange={formik.handleChange}
        />
        <FileIcon src={addFileSrc} />
      </TextWrap>
      <SubmitMessageIcon src={sendMessageSrc} onClick={formik.handleSubmit} />
    </Wrap>
  );
};
