/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react/prop-types */
import React, { useCallback } from 'react';
import { Avatar } from 'antd';
import { Formik, Field } from 'formik';
import userFoto from '../../blockNotes/userFoto.png';
import {
  WrapperForm,
  Input,
  BtnSend,
  BtnOpenNote,
} from './styles.js';

interface Props {
  setIsOpen: (state: boolean) => void;
}

const ComponentInput: React.FC<Props> = ({ setIsOpen }) => {
  const openOnClick = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);
  return (
    <Formik
      initialValues={{
        inputText: ''
      }}
      onSubmit={
        (values, actions) => {
          alert(`Sending ${values.inputText}`);
          actions.resetForm();
        }
      }>
      <WrapperForm>
        <Avatar src={userFoto} />
        <Field 
          as={Input}
          name="inputText" 
          placeholder="Напишите что-нибудь..."
          autoComplete="off"
        />
        <BtnSend type="submit"/>
        <BtnOpenNote type="button" onClick={openOnClick} />
      </WrapperForm>
    </Formik>
  )
};
export default ComponentInput;
