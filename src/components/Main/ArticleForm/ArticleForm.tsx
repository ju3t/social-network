/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react/prop-types */
import React from 'react';
import { Formik, Field } from 'formik';

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
  return (
    <Formik
      initialValues={{
        articleName: '',
        articleText: '',
      }}
      onSubmit={(values, actions): void => {
        alert(`Sending article: ${values.articleName} with text: ${values.articleText}`);
        actions.resetForm();
      }}
      >
      <ArticleStyledForm isOpen={isOpen}>
        <ArticleName>Название статьи</ArticleName>
        <Field
          name="articleName"
          as={InputName}
          autoComplete="off"
        />
        <ArticleName>Текст</ArticleName>
        <Field
          name="articleText"
          rows="12"
          as={InputText}
        />
        <ArticleButton className="articleButton" type="submit">
          Опубликовать
        </ArticleButton>
        <ButtonMore img={buttonMore} onClick={changeOpen} />
      </ArticleStyledForm>
    </Formik>
  );
};

export default ArticleForm;
