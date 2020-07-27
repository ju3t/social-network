import React from 'react';
import styled from 'styled-components';

export default function NewsItem(props) {
  const { item } = props;
  const { title, img, text, tags } = item;
  const listTags = tags.map((tag) => {
    return (
      <LiItem>
        <TagLink key={tag} href="localhost">
          {tag}
        </TagLink>
      </LiItem>
    );
  });
  return (
    <Container>
      <CardHeader>Хедер</CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardImage src={img} alt="" />
      <CardContent>{text}</CardContent>
      <CardTags>{listTags}</CardTags>
    </Container>
  );
}

const Container = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  border-bottom: 1px solid #515151;
`;

const CardHeader = styled.div`
  min-height: 100px;
`;

const CardTitle = styled.div`
  display: block;
  min-height: 40px;
  margin-bottom: 20px;
  text-align: left;
  margin-right: auto;
  font-weight: 600;
  font-size: 20px;
  line-height: 160%;
`;

const CardImage = styled.img`
  display: block;
  border-radius: 15px;
  width: 855px;
  object-fit: cover;
  margin-bottom: 45px;
  margin-right: auto;
`;

const CardContent = styled.span`
  display: block;
  overflow: hidden;
  min-width: 100px;
  max-width: 1000px;
  max-height: 100px;
  margin-bottom: 30px;
  font-size: 16px;
  line-height: 165%;
`;

const CardTags = styled.span`
  display: flex;
  min-width: 175px;
  min-height: 30px;
  align-content: center;
  font-size: 16px;
  line-height: 165%;
`;

const TagLink = styled.a`
  color: #000;
`;

const LiItem = styled.li`
  list-style-type: none;
  margin-left: 5px;
`;
// NewsItem.propTypes = {
//   item: PropTypes.objectOf(PropTypes.object()).isRequired,
//   title: PropTypes.string,
//   img: PropTypes.string,
//   text: PropTypes.string,
//   tags: PropTypes.arrayOf(PropTypes.string),
// };

NewsItem.defaultProps = {
  title: '',
  img: '',
  text: '',
  tags: [],
};
