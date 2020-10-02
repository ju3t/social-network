/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import { Field, Formik } from 'formik';
import { ArticleButton, ArticleStyledForm, InputName, InputText } from './styles';
import imgButtonMore from './img/BTN more.svg';
import { ArticleName, ButtonMore } from '../../../common/styledComponents';

interface Props {
  changeOpen: () => void;
  isOpen: boolean;
}

const ArticleForm: React.FC<Props> = ({ changeOpen, isOpen }): JSX.Element => (
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
      <Field name="articleName" as={InputName} autoComplete="off" />
      <ArticleName>Текст</ArticleName>
      <Field name="articleText" rows="12" as={InputText} />
      <ArticleButton className="articleButton" type="submit">
        Опубликовать
      </ArticleButton>
      <ButtonMore img={imgButtonMore} onClick={changeOpen} />
    </ArticleStyledForm>
  </Formik>
);

export default ArticleForm;
