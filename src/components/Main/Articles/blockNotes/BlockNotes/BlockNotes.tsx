/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import Note from '../Note';
import { Wrapper, MenuWrapper, Menu, MenuItem, ComponentSearch, InputSearch, EmptyBlockNotes } from './styles';
import { IStore } from '../../../../../redux-toolkit/store';
import LoadingBlock from './../../../../../common/loadingBlock';
import ErrorBlock from './../../../../../common/errorBlock';
import { IDataPost } from '../../../../../types/post';

interface IBlockNotes {
  posts: IDataPost[],
  loading: boolean,
  error: Error
}

const BlockNotes: React.FC<IBlockNotes> = ({ posts, loading, error }) => {
  const [isOpenSearch, setIsOpenSearch] = useState(false);

  const renderSearch = () =>
    isOpenSearch ? (
      <InputSearch placeholder="Поиск..." onBlur={() => setIsOpenSearch(!isOpenSearch)} />
    ) : (
      <ComponentSearch onClick={() => setIsOpenSearch(!isOpenSearch)} />
  );

  const renderNotes = () => {
    if ( loading ) {
      return (<LoadingBlock />);
    }
    if ( error ) {
      return (<ErrorBlock errorMessage="Error occured with loading posts."/>);
    }
    if ( !posts ) {
      return (<EmptyBlockNotes>Ничего не найдено!</EmptyBlockNotes>);
    }
    return posts.map(( dataPost ) => <Note key={dataPost.post.id} dataPost={dataPost}/>);
  };

  return (
    <Wrapper>
      <MenuWrapper>
        <Menu>
          <MenuItem className="active">Все</MenuItem>
          <MenuItem>Мои заметки</MenuItem>
          <MenuItem>Рекомендации</MenuItem>
        </Menu>
        {renderSearch()}
      </MenuWrapper>
      {renderNotes()}
    </Wrapper>
  );
};

const mapStateToProps = ( state: IStore ) => ({
  posts: state?.posts?.data,
  loading: state?.posts?.loading,
  error: state?.posts?.error
});

export default connect( mapStateToProps )(BlockNotes);
