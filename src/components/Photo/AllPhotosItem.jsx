import React from 'react';
import styled from 'styled-components';

const AllPhotosItemStyled = styled.img`
  border-radius: 5px;
  background-color: #efefef;
`;

const AllPhotosItem = ({ ...props }) => <AllPhotosItemStyled {...props} />;

export default AllPhotosItem;
