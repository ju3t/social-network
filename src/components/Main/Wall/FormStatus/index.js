import React from 'react';
import { useFormik } from 'formik';

import './index.css';

const FormStatus = () => {
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
    <form className="statusForm" onSubmit={formik.handleSubmit}>
      <input
        className="statusText"
        id="statusText"
        name="statusText"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.statusText}
        placeholder="Обновите свой статус"
      />
    </form>
  );
};

export default FormStatus;
