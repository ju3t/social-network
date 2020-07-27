import React from 'react';
import { useFormik } from 'formik';
import PropTypes from 'prop-types';

import './index.css';
import buttonMore from './img/BTN more.svg';
import { ArticleName, ButtonMore } from '../../../common/styledComponents';

const ArticleForm = (props) => {
  const formik = useFormik({
    initialValues: {
      articleName: '',
      articleText: '',
    },
    onSubmit: (values) => {
      // eslint-disable-next-line no-console
      console.log(values);
    },
  });
  const { changeOpen } = props;
  return (
    <form className="articleForm" onSubmit={formik.handleSubmit}>
      <ArticleName>Название статьи</ArticleName>
      <input
        className="inputName"
        id="articleName"
        name="articleName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.articleName}
      />
      <ArticleName>Текст</ArticleName>
      <textarea
        className="inputText"
        id="articleText"
        name="articleText"
        onChange={formik.handleChange}
        value={formik.values.articleText}
        rows="12"
      />
      <button className="articleButton" type="submit">
        Опубликовать
      </button>
      <ButtonMore img={buttonMore} onClick={changeOpen} />
    </form>
  );
};

ArticleForm.propTypes = {
  changeOpen: PropTypes.func.isRequired,
};

export default ArticleForm;
