import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SingleGroup = ({
  avatar, name, category, followers,
}) => (
  <SingleGroupContainer>
    <LeftWrapper>
      <GroupAvatar src={avatar} alt="avatar" />
      <GroupDescriptionContainer>
        <GroupTitle>
          {name}
        </GroupTitle>
        <GroupCategory>
          {category}
        </GroupCategory>
        <GroupFollowers>
          {followers}
        </GroupFollowers>
      </GroupDescriptionContainer>
    </LeftWrapper>
    <FollowButton>
      Вступить в группу
    </FollowButton>
  </SingleGroupContainer>
);

SingleGroup.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  followers: PropTypes.string.isRequired,

};
const SingleGroupContainer = styled.div`
display:flex;
flex-direction: row;
justify-content: space-between;
flex-wrap: no-wrap;
padding:31px 0px;
align-items: center;
border-bottom: 1px solid #b2b2b2;
flex-wrap;no-wrap;
`;

const GroupAvatar = styled.img`
border-radius: 50%;
overflow: hidden;
width: 90px;
height:90px;
`;

const GroupDescriptionContainer = styled.div`
display: flex;
flex-direction: column;
text-align:left;
margin-left: 30px;
justify-self: flex-start;
padding-top:8px;
`;
const GroupTitle = styled.span`
font-size: 18px;
font-weight: 500;
margin-bottom:8px
`;

const GroupCategory = styled.span`
color: #515151;
font-size:16px;
margin-bottom: 4px;
`;
const GroupFollowers = styled.span`
color: #515151;
font-size:16px;
`;
const LeftWrapper = styled.div`
display:flex;
flex-direction:row;
`;
const FollowButton = styled.button`
background-color:#FFB11B;
border-radius:5px;
border:none;
cursor:pointer;
font-size: 16px;
font-weight: 500;
padding: 15px 40px;
&:focus{
outline:none;
}
`;
export default SingleGroup;
