/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import { Field, Formik } from 'formik';
import { ArticleButton, ArticleStyledForm, InputName, InputText } from './styles';
import imgButtonMore from './img/BTN more.svg';
import { ArticleName, ButtonMore } from '../../../common/styledComponents';
import createPost from './createPost';
import { IUser } from '../../../types/user';
import LoadingBlock from '../../../common/loadingBlock';

interface IArticleForm {
  changeOpen: () => void;
  setLoading: ( state: boolean ) => void;
  isOpen: boolean;
  loading: boolean;
  user: IUser | null;
}

const ArticleForm: React.FC<IArticleForm> = ({ 
  changeOpen, 
  setLoading, 
  loading, 
  isOpen, 
  user }): JSX.Element => (
  <Formik
    initialValues={{
      articleName: '',
      articleText: '',
    }}
    onSubmit={(values, actions): void => {
      alert(`Sending article: ${values.articleName} with text: ${values.articleText}`);
      setLoading(true);
      // await createPost({ title: values.articleName, text: values.articleText, user });
      setLoading(false);
      actions.resetForm();
    }}
  >
    <ArticleStyledForm $isOpen={isOpen}>
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
      { loading && <LoadingBlock /> }
      <ArticleButton className="articleButton" type="submit">
        Опубликовать
      </ArticleButton>
      <ButtonMore img={imgButtonMore} onClick={changeOpen} />
    </ArticleStyledForm>
  </Formik>
);

export default ArticleForm;
