/* eslint-disable react/prop-types */
import React from 'react';
import { useFormik } from 'formik';

import {
  InputName,
  InputText,
  ArticleStyledForm,
  ArticleButton,
} from './styles.js';
import buttonMore from './img/BTN more.svg';
import { ArticleName, ButtonMore } from '../../../common/styledComponents';

interface Props {
  changeOpen?: () => void;
  isOpen?: boolean;
}

const ArticleForm : React.FC<Props> = ({ changeOpen, isOpen }) => {
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
  return (
    <ArticleStyledForm isOpen={isOpen} onSubmit={formik.handleSubmit}>
      <ArticleName>Название статьи</ArticleName>
      <InputName
        className="inputName"
        id="articleName"
        name="articleName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.articleName}
      />
      <ArticleName>Текст</ArticleName>
      <InputText
        className="inputText"
        id="articleText"
        name="articleText"
        onChange={formik.handleChange}
        value={formik.values.articleText}
        rows="12"
      />
      <ArticleButton className="articleButton" type="submit">
        Опубликовать
      </ArticleButton>
      <ButtonMore img={buttonMore} onClick={changeOpen} />
    </ArticleStyledForm>
  );
};

export default ArticleForm;
