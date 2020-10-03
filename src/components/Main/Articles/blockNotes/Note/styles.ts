import styled from 'styled-components';
import openNote from '../../icons/open_note.svg';
import closeNote from '../../icons/close_note.svg';
import actionAddNone from '../../icons/action_addNote.svg';
import actionLike from '../../icons/action_like.svg';
import actionComment from '../../icons/action_comment.svg';
import actionRepost from '../../icons/action_repost.svg';

export const Wrapper = styled.div`
position: relative;
border-bottom: 1px solid #515151;
`;

export const WrapperNote = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
position: relative;
margin: 30px 0;
`;

export const UserInfo = styled.div`
display: flex;
align-items: center;
`;

export const Avatar = styled.img`
width: 70px;
height: 70px;
border-radius: 50%;
`;

export const TitleWrap = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
margin-left: 25px;
`;
export const Title = styled.h3`
font-weight: 500;
font-size: 16px;
line-height: 20px;
margin: 0 0 5px 0;
color: black;
`;
export const SubtitleTime = styled.span`
font-weight: 500;
font-size: 13px;
line-height: 16px;
color: #515151;
`;

export const UserActions = styled.div`
display: flex;
align-items: center;
`;
export const UserAction = styled.button`
width: 30px;
height: 30px;
background-position: center center;
background-repeat: no-repeat;
cursor: pointer;
border: none;
background-color: transparent;
`;

export const Action = styled.div`
display: flex;
align-items: center;
&:not(:last-child) {
  margin-right: 45px;
}
`;

export const ActionAddNote = styled(UserAction)`
background-image: url(${actionAddNone});
`;
export const ActionLike = styled(UserAction)`
background-image: url(${actionLike});
`;
export const ActionComment = styled(UserAction)`
background-image: url(${actionComment});
`;
export const ActionRepost = styled(UserAction)`
background-image: url(${actionRepost});
`;

export const CountAction = styled.span`
margin-left: 10px;
font-size: 18px;
line-height: 160.9%;
color: black;
`;

export const TitleText = styled.p`
font-weight: 600;
font-size: 20px;
line-height: 160.9%;
margin: 0 0 10px 0;
color: #000000;
text-align: start;
`;
export const Text = styled.div`
width: 95%;
font-weight: normal;
font-size: 16px;
line-height: 165%;
margin: 0 0 40px 0;
color: #000000;
text-align: start;
height: auto;
max-height: ${({ isOpen }:{ isOpen: boolean}) => (isOpen ? '100%' : '100px')};
//transition: 1s;
overflow: hidden;
`;

export const BtnOpenNote = styled.button`
width: 34px;
height: 34px;
border-radius: 17px;
background-color: #ffb11b;
background-image: ${({ isOpen }:{ isOpen: boolean}) => (isOpen ? `url(${closeNote})` : `url(${openNote})`)};
background-position: center center;
background-repeat: no-repeat;
cursor: pointer;
border: none;
position: absolute;
bottom: 50px;
right: 0;

&:focus {
  outline: none;
}
`;

export const TagsList = styled.ul`
padding: 0;
display: flex;
align-items: center;
margin: 45px 0 55px 0;
`;
export const TagItem = styled.li`
list-style: none;
font-size: 16px;
color: black;
&:not(:last-child) {
  margin-right: 10px;
}
`;

export const StyledLoadingBlock = styled.div`
  top: 0;
  right: 0;
  transform: translate(-172%, -160%);
  position: absolute;
`;

export const NoteErrorBlock = styled.div`
  position: absolute;
  transform: translate(3.5em, -3em);
  right: 0;
  bottom: 0;
  border: 1px solid rgba(1,1,1,0.5);
  color: rgba(1,1,1,0.5);
  background-color: transparent;
`;
