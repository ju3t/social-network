import React from 'react';
import { useFormik } from 'formik';

import {
  StatusForm,
  StatusInput,
} from './styles.js';

const FormStatus = (): React.FunctionComponentElement<unknown> => {
  const formik = useFormik({
    initialValues: {
      statusText: '',
    },
    onSubmit: (values) => {
      // eslint-disable-next-line no-console
      console.log(values);
    },
  });

  return (
    <StatusForm onSubmit={formik.handleSubmit}>
      <StatusInput
        id="statusText"
        name="statusText"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.statusText}
        placeholder="Обновите свой статус"
      />
    </StatusForm>
  );
};

export default FormStatus;
