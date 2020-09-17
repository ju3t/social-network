import React, { useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import __ from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import album from '../../common/img/png/album5.png';
import pic from '../../common/img/png/pic.png';
import Deck from './AudioSlider/Deck';
import search from '../../common/img/icons/musicSearch.svg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import backArrow from '../../common/img/icons/playlistarrowback.svg';
import nextArrow from '../../common/img/icons/playlistarrownext.svg';
import { TypeDispatch } from '../../redux-toolkit/store';
import { TypeRootReducer } from '../../redux-toolkit/rootReducer';
import { allAudiosAction } from '../../redux-toolkit/allAudiosSlice';
// import Slider from '../../common/slider';

const Main = styled.div`
  //width: 1300px;
  //height:1000vh;
`;

const SliderContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 300px;
  z-index: 2;
  border: 3px solid goldenrod;
`;

const ButtonsArea = styled.div`
  display: flex;
  margin-bottom: 100px;
  //margin-top: 250px;
  margin-left: 130px;
  border: 3px solid gold;
`;

// Для кнопок Моя музыка и т.д.


const SearchArea = styled.div`
  display: flex;
  justify-content: space-between;
  height: 130px;
  width: 1000px;
  margin: 10px auto 80px auto;
  border-top: 1px solid #000000;
  border-bottom: 1px solid #000000;
  align-items: center;
  input {
    border: none;
  }
`;

const PlayListArea = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  margin-left: 200px;
  width: 1000px;
  h3 {
    color: black;
    text-align: left;
    padding-bottom: 50px;
  }
  div {
    width: 1000px;
    display: flex;
    flex-direction: row;
    div {
      div {
        div {
          img {
            width: 113px;
            height: 113px;
            object-fit: cover;
            border-radius: 20px;
          }
          p {
            color: black;
            text-align: left;
            padding-left: 50px;
          }
        }
      }
    }
  }
`;
const SongsArea = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  p {
    font-size: 15px;
    color: black;
    padding: 0;
    margin: 0;
  }
  h4,
  h3 {
    color: black;
    padding: 0;
    margin: 0;
  }
  ul {
    width: 900px;
    max-height: 900px;
    overflow: scroll;
    ::-webkit-scrollbar {
      /* chrome based */
      width: 0; /* ширина scrollbar */
      background: transparent; /* опционально */
    }
    li {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 50px;
    }
  }
`;
const Next = styled.div`
  background-image: url(${nextArrow});
  position: absolute;
  left: 95%;
  background-repeat: no-repeat;
  max-width: 30px;
  height: 30px;
  margin-left: 70px;
  margin-top: 40px;
  cursor: pointer;
`;
const Prev = styled.div`
  background-image: url(${backArrow});
  position: absolute;
  background-repeat: no-repeat;
  max-width: 30px;
  height: 30px;
  margin-left: -150px;
  margin-top: 40px;
  cursor: pointer;
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  div {
    margin-right: 27px;
  }
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

// slick arrows and settings area
interface ISlickOnClick {
  onClick: any
}

const SampleNextArrow = ({ onClick }: ISlickOnClick) => <Next onClick={onClick} />;
const SamplePrevArrow = ({ onClick }: ISlickOnClick) => <Prev onClick={onClick} />;
const settings = {
  loop: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow onClick={onclick} />,
  prevArrow: <SamplePrevArrow onClick={onclick} />,
};

// end

const Audio = () => {
  const arr = [1, 2, 3, 4, 5, 6];
  const dispatch: TypeDispatch = useDispatch();
  const arrAllAudiosState = useSelector(({ allAudiosSlice }: TypeRootReducer) => {
    console.log('allAudiosSlice selector', allAudiosSlice);
    return allAudiosSlice.allAudios;
  });
  console.log('arrAllAudiosState', arrAllAudiosState);

  type TypeInitialStateActiveBtn<T extends string> = { [key in T]: boolean };

  interface IinitialStateActiveBtn {
    myAudios: boolean;
    allAudios: boolean;
    friendsAudios: boolean;
  }

  const initialStateActiveBtn: { [key: string]: boolean } = {
    myAudios: true,
    allAudios: false,
    friendsAudios: false,
    argCategoryAudio: false,
  };

  const [objCategoryAudios, setChosenCategoryAudios] = useState(initialStateActiveBtn);

  interface IAllAudios {
    album: string
    author: string
    icon: string
    id: number
    name: string
    persistDateTime: string
    url: string
  }

  // useEffect(() => {
  //   dispatch(allAudiosAction());
  // }, [dispatch]);

  const songsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // const songsItems = arrAllAudiosState.length > 0 && arrAllAudiosState.map(({ id, icon, author, name }) => (
  const songsItems = arrAllAudiosState.length > 0 && arrAllAudiosState.map(({ icon, author, name, id, persistDateTime }: IAllAudios) => (
    <li key={id}>
      <RightSide>
        <div>
          <img src={pic || icon} alt="icon" title="icon" />
        </div>
        <div>
          <h3>{author}</h3>
          <p>{name}</p>
        </div>
      </RightSide>
      <LeftSide>
        <h4>{persistDateTime}</h4>
      </LeftSide>
    </li>
  ));

  const myAudiosOnClick = (argActiveBtn: string) => async (evt: any) => {
    console.log('evt.target', evt.target);
    console.log('myAudiosOnClick');
    // dispatch(myAudiosAction());
    // setChosenCategoryAudios({
    //   myAudios: 'activeBtn--underline',
    //   allAudios: '',
    //   friendsAudios: '',
    // });
  };

  const allAudiosOnClick = (argActiveBtn: string) => (evt: any) => {
    console.log('allAudiosOnClick worked');
    console.log('argActiveBtn', argActiveBtn);
    if (argActiveBtn === 'allAudios') {
      setChosenCategoryAudios({
        myAudios: false,
        allAudios: true,
        friendsAudios: false,
      });
    }
    dispatch(allAudiosAction());
  };

  const chooseCategoryAudiosOnClick = (argCategoryAudio: string) => (): void => {
    console.log('argCategoryAudio', argCategoryAudio);
    // this.setState((prev: any): any => ({ [argCategoryAudio]: !prev[argCategoryAudio] }));
    setChosenCategoryAudios({
      [argCategoryAudio]: true,
    });
    if ('allAudios' in objCategoryAudios) {
      dispatch(allAudiosAction());
    }
  };

  interface IBtnCategAudio {
    type?: string;
    onClick?: (arg?: string) => void;
    selected?: boolean;
  }

  const BtnCategAudio = styled.button<IBtnCategAudio>`
border: none;
background: none;
padding: 0;
line-height: 30px;
border-bottom: ${(props: any): any => props.selected && '3px solid red'};
&:not(:last-child) {
margin-right: 51px;
}
`;

  return (
    <Main>
      <SliderContainer>
        <Deck />
      </SliderContainer>
      <ButtonsArea>
        <BtnCategAudio
          type="button"
          onClick={chooseCategoryAudiosOnClick('myAudios')}
          selected={objCategoryAudios.myAudios}
        >
          Моя музыка!!!
        </BtnCategAudio>
        <BtnCategAudio
          type="button"
          onClick={chooseCategoryAudiosOnClick('allAudios')}
          selected={objCategoryAudios.allAudios}
        >
          Вся музыка
        </BtnCategAudio>
        <BtnCategAudio
          type="button"
          onClick={chooseCategoryAudiosOnClick('friendsAudios')}
          selected={objCategoryAudios.friendsAudios}
        >
          Музыка друзей
        </BtnCategAudio>
      </ButtonsArea>
      <SearchArea>
        <input type="text" placeholder="Начните поиск музыки..." />
        <img src={search} alt="" />
      </SearchArea>
      <PlayListArea>
        <h3>Плейлисты</h3>
        <Slider {...settings}>
          {arr.map((el) => (
            <div key={__.uniqueId()}>
              <img src={album} alt="" />
              <p>{el}</p>
            </div>
          ))}
        </Slider>
      </PlayListArea>
      <SongsArea>
        <ul>{songsItems}</ul>
      </SongsArea>
    </Main>
  );
};

export default Audio;

// SampleNextArrow.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };
//
// SamplePrevArrow.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };

