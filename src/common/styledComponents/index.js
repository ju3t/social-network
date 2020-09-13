import styled from 'styled-components';

export const bgColorBlack = '#111111';

export const HeaderContainer = styled.div`
  background: ${bgColorBlack};
  height: 109px;
  color: white;
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: fixed;
  z-index: 15;
`;

export const Logo = styled.img.attrs((props) => ({ src: props.img }))`
  height: 32px;
  width: 67px;
  margin-top: 57px;
  margin-left: 146px;
  &:hover {
    cursor: pointer;
  }
`;

export const IconHeader = styled.img.attrs((props) => ({ src: props.img }))`
  height: 30px;
  width: 30px;
  margin-left: 55px;
  &:hover {
    cursor: pointer;
  }
`;
export const IconSearch = styled.img.attrs((props) => ({ src: props.img }))`
  height: 30px;
  width: 30px;
  &:hover {
    cursor: pointer;
  }
`;

export const RightBlockHeader = styled.div`
  margin-right: 110px;
  margin-top: 58px;
  display: flex;
`;

export const ButtonSearch = styled.button`
  background: none;
  border: none;
  margin-bottom: 20px;
  outline: none !important;
`;

export const InputHeader = styled.input`
  width: 295px;
  margin-left: 10px;
  background: none;
  border: none;
  border-bottom: 1px solid #ffb11b;
  color: white;
  outline: none !important;
  font-size: 24px;
`;

export const MainContainer = styled.div`
  display: flex;
  width: 100%;
  background: ${bgColorBlack};
`;

export const LeftBlockContainer = styled.div`
  margin-top: 109px;
  background: ${bgColorBlack};
  min-height: 100%;
  flex-basis: 40%;
  padding: 23px;
  color: white;
  display: flex;
  flex-direction: column;
`;

export const RightBlockContainer = styled.div`
  background: ${bgColorBlack};
  position: relative;
  padding-right: 23px;
  height: 100%;
  width: 100%;
  overflow: hidden;
  color: white;
  margin-top: 109px;
`;

export const UserInfoHeaderContainer = styled.div`
margin-left: 75px;
position: absolute;
height: 344px;
display: flex;
justify-content: flex-start;
z-index: 10;
`;

export const UserInfoAvatar = styled.div`
max-width: 340px;
height: 340px;
border-radius: 170px;
`;

export const UserInfoNameBlock = styled.div`
height: 340px;
display: flex;
flex-direction: column;
`;

export const Avatar = styled.img.attrs((props) => ({ src: props.img }))`
max-width: 340px;
max-height: 340px;
border-radius: 170px;
box-shadow: 9px 9px 25px rgba(0, 0, 0, 0.25);
&:hover {
  cursor: pointer;
}
`;

export const AddPhotoIcon = styled.img.attrs((props) => ({ src: props.img }))`
position: absolute;
left: 230px;
bottom: -28px;
max-width: 110px;
height: 110px;
border-radius: 55px;
&:hover {
  cursor: pointer;
}
`;

export const UserName = styled.div`
margin-top: 136px;
margin-left: 32px;
font-family: Montserrat, serif;
font-style: normal;
font-weight: bold;
font-size: 30px;
line-height: 37px;
color: #ffffff;
`;

export const UserProfession = styled.div`
margin-top: 13px;
margin-left: 32px;
font-family: Montserrat, serif;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 20px;
color: #c1c1c1;
`;

export const UserOnlineStatus = styled.div`
margin-top: 91px;
margin-left: 32px;
font-family: Montserrat, serif;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 20px;
color: #c1c1c1;
`;

export const UserOnlineIcon = styled.div`
position: absolute;
top: 35px;
left: 277px;
width: 28px;
height: 28px;
border-radius: 14px;
background: #ffb11b;
`;

export const WallContainer = styled.div`
  position: relative;
  margin-top: 250px;
  padding: 0 103px;
  overflow: hidden;
  height: 100%;
  background: #ffffff;
  border-radius: 15px 15px 0px 0px;
  display: flex;
  flex-direction: column;
`;

export const StatusContainer = styled.div`
  width: 530px;
  margin-top: 149px;
  font-family: Montserrat, serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #515151;
`;

export const WallInfoBlock = styled.div`
  max-width: 100%;
  margin-top: 25px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const WallInfoUserAbout = styled.div`
  width: 531px;
  height: 511px;
  border-top: 1px solid #515151;
`;

export const InfoHeaderText = styled.div`
  margin-top: 47px;
  font-family: Montserrat, serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
`;

export const InfoHeaderTextBlock = styled.div`
  width: 530px;
  margin-top: 47px;
  display: flex;
`;

export const InfoHeaderTextLeftBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoHeaderTextRightBlock = styled.div`
  margin-left: 100px;
  display: flex;
  flex-direction: column;
`;

export const InfoHeaderListItemLeft = styled.div`
  margin-bottom: 23px;
  font-family: Montserrat, serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #515151;
`;

export const InfoHeaderListItemRight = styled.div`
  margin-bottom: 23px;
  font-family: Montserrat, serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
`;

export const InfoPhotoBlock = styled.div`
  margin-top: 55px;
  width: 560px;
  height: 350px;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
`;

export const InfoUserPhoto = styled.img.attrs((props) => ({ src: props.img }))`
  width: 256px;
  height: 162px;
  margin-right: 22px;
  border-radius: 15px;
  &:hover {
    cursor: pointer;
  }
`;

// Wall Create Article
export const WallCreateArticleContainer = styled.div`
  margin-top: 49px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #515151;
  border-bottom: 1px solid #515151;
  padding-bottom: 40px;
`;

export const WallCreateArticleHeaderBlock = styled.div`
  margin-top: 27px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const WallCreateArticleHeaderBlockLeft = styled.div`
  display: flex;
`;

export const AvatarMin = styled.img.attrs((props) => ({ src: props.img }))`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  &:hover {
    cursor: pointer;
  }
`;

export const WallCreateArticleHeaderBlockLeftText = styled.div`
  margin-left: 24px;
  margin-top: 25px;
  font-family: Montserrat, serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #515151;
`;

export const WallCreateArticleHeaderBlockRight = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const IconArticle = styled.img.attrs((props) => ({ src: props.img }))`
  margin-left: 13px;
  &:hover {
    cursor: pointer;
  }
`;

export const ArticleName = styled.div`
  margin-top: 20px;
  font-family: Montserrat, serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 160.9%;
  color: #000000;
`;

// Article Form
export const ButtonMore = styled.img.attrs((props) => ({ src: props.img }))`
  position: absolute;
  right: 0;
  bottom: 0;
  &:hover {
    cursor: pointer;
  }
`;

// Sidebar

export const Wrapper = styled.div`
  margin-top: 150px;
  margin-left: 60px;
  max-width: 280px;
  width: 100%;
  background-color: #111;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0;
  margin: 0 0 40px 0;
`;
