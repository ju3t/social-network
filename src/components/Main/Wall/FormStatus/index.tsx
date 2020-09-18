/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import { Formik, Field } from 'formik';

import {
  StatusForm,
  StatusInput,
} from './styles.js';

interface Props {
}

const FormStatus: React.FC<Props> = () => {
  return (
    <Formik
      initialValues={{
        statusText: '',
      }}
      onSubmit={
        (values, actions) => {
        alert(`Sending ${values.statusText}`);
      }}>
      <StatusForm>
        <Field
          name="statusText"
          placeholder="Обновите свой статус"
          as={StatusInput}
          autoComplete="off"
        />
      </StatusForm>
    </Formik>
  );
};

export default FormStatus;
