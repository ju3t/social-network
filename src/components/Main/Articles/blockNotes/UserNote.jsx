// import React from 'react';
// import styled from 'styled-components';
// import { Avatar } from 'antd';
//
// import userFoto from './userFoto.png';
// import actionAddNone from '../icons/action_addNote.svg';
// import actionLike from '../icons/action_like.svg';
// import actionComment from '../icons/action_comment.svg';
// import actionRepost from '../icons/action_repost.svg';
//
// const Wrapper = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin: 30px 0;
// `;
//
// const UserInfo = styled.div`
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
// `;
//
// const TitleWrap = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: flex-start;
//   margin-left: 25px;
// `;
// const Title = styled.h3`
//   font-weight: 500;
//   font-size: 16px;
//   line-height: 20px;
//   margin: 0 0 5px 0;
//   color: black;
// `;
// const SubtitleTime = styled.span`
//   font-weight: 500;
//   font-size: 13px;
//   line-height: 16px;
//   color: #515151;
// `;
//
// const UserActions = styled.div`
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
// `;
// const UserAction = styled.div`
//   width: 30px;
//   height: 30px;
//   background-position: center center;
//   background-repeat: no-repeat;
//   cursor: pointer;
// `;
//
// const Action = styled.div`
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
//   &:not(:last-child) {
//     margin-right: 45px;
//   }
// `;
//
// const ActionAddNote = styled(UserAction)`
//   background-image: url(${actionAddNone});
// `;
// const ActionLike = styled(UserAction)`
//   background-image: url(${actionLike});
// `;
// const ActionComment = styled(UserAction)`
//   background-image: url(${actionComment});
// `;
// const ActionRepost = styled(UserAction)`
//   background-image: url(${actionRepost});
// `;
//
// const CountAction = styled.span`
//   margin-left: 10px;
//   font-size: 18px;
//   line-height: 160.9%;
//   color: black;
// `;
//
// const UserNote = () => (
//   <Wrapper>
//     <UserInfo>
//       <Avatar src={userFoto} />
//       <TitleWrap>
//         <Title>Богдан Леста</Title>
//         <SubtitleTime>07.07.2020 в 00:07</SubtitleTime>
//       </TitleWrap>
//     </UserInfo>
//     <UserActions>
//       <Action>
//         <ActionAddNote />
//         <CountAction>7</CountAction>
//       </Action>
//       <Action>
//         <ActionLike />
//         <CountAction>15</CountAction>
//       </Action>
//       <Action>
//         <ActionComment />
//         <CountAction>1</CountAction>
//       </Action>
//       <Action>
//         <ActionRepost />
//         <CountAction>4</CountAction>
//       </Action>
//     </UserActions>
//   </Wrapper>
// );
// export default UserNote;
