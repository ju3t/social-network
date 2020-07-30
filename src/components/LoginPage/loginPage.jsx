import React, { useState } from 'react';
import { Input } from 'antd';
import styled from 'styled-components';
import jm from '../../common/JM.svg';
import sn from '../../common/SN.svg';
import logo from '../../common/logo.svg';

const Wrapper = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap');
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  img {
    margin-left: 50px;
    margin-top: 30px;
  }
  min-height: 79vh;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Main = styled.div`
  background: url(${jm}), url(${sn});
  background-repeat: no-repeat, no-repeat;
  background-position: top, bottom;
  min-height: 79vh;
  min-width: 500px;
  margin: 30px auto 0;
`;

const Form = styled.form`
  max-width: 500px;
  margin: 100px 0;
  border-radius: 15px;
  background: #111111;
`;
const InputsArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
  margin-bottom: 60px;
`;

const SearchInpit = styled(Input)`
  background-color: rgba(0, 125, 215, 0);
  color: #959595;
  font-size: 14px;
  width: 360px;
  margin: 15px 20px;
  padding-bottom: 5px;
  border: none;
  border-bottom: 1px solid #ffb11b;
  outline: none;
  font-size: 16px;
  line-height: 20px;
`;

const ButtonsArea = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 17%;
  padding-top: 50px;
`;

const ButtonRight = styled.button`
  background-color: rgba(0, 125, 215, 0);
  border: none;
  border-bottom: ${(props) => (props.selected ? '2px solid #FFB11B' : 'none')};
  box-shadow: none;
  margin-right: 35px;
  padding-bottom: 2px;
  p {
    font-family: Montserrat;
    color: white;
    font-weight: 50;
    font-size: 26px;
    line-height: 32px;
    letter-spacing: 0.1em;
    margin-bottom: 8px;
  }
  &:hover {
    cursor: pointer;
  }
`;
const ButtonLeft = styled.button`
  background-color: rgba(0, 125, 215, 0);
  border: none;
  border-bottom: ${(props) => (props.selected ? '2px solid #FFB11B' : 'none')};
  box-shadow: none;
  margin-right: 35px;
  padding-bottom: 2px;
  p {
    font-family: Montserrat;
    color: white;
    font-weight: 50;
    font-size: 26px;
    line-height: 32px;
    letter-spacing: 0.1em;
    margin-bottom: 8px;
  }
  &:hover {
    cursor: pointer;
  }
`;

const SubmitArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 80px;
  h4,
  a {
    font-family: Montserrat;
    font-size: 14px;
    letter-spacing: 0.05em;
    color: #959595;
    align-self: flex-start;
    margin-left: 35px;
    text-decoration: none;
  }
  button {
    background-color: #ffb11b;
    border: none;
    width: 365px;
    margin-bottom: 10px;
    border-radius: 4px;
    p {
      font-family: Montserrat;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      letter-spacing: 0.05em;
    }
  }
`;

const Login = () => {
  const [value, setValue] = useState(true);
  const [border, setBorder] = useState({
    first: true,
    second: false,
  });
  const selectRegistration = () => {
    setBorder({
      first: false,
      second: true,
    });
    setValue(false);
  };
  const selectLogin = () => {
    setBorder({
      first: true,
      second: false,
    });
    setValue(true);
  };
  return (
    <Wrapper>
      <img src={logo} alt="" />
      <Main>
        {value === true && (
          <Form>
            <ButtonsArea>
              <ButtonRight selected={border.first} onClick={() => selectLogin()}>
                <p>Вход</p>
              </ButtonRight>
              <ButtonLeft selected={border.second} onClick={() => selectRegistration()}>
                <p>Регистрация</p>
              </ButtonLeft>
            </ButtonsArea>
            <InputsArea>
              <SearchInpit placeholder="Введите ваш e-mail" nostyle="false" />
              <SearchInpit placeholder="Введите ваш пароль" nostyle="true" />
            </InputsArea>
            <SubmitArea>
              <button type="button">
                <p>ВОЙТИ</p>
              </button>
              <h4>
                {' '}
                <a href="/"> Забыли пароль?</a>
              </h4>
            </SubmitArea>
          </Form>
        )}

        {value === false && (
          <Form>
            <ButtonsArea>
              <ButtonRight selected={border.first} onClick={() => selectLogin()}>
                <p>Вход</p>
              </ButtonRight>
              <ButtonLeft selected={border.second} onClick={() => selectRegistration()}>
                <p>Регистрация</p>
              </ButtonLeft>
            </ButtonsArea>{' '}
            <InputsArea>
              <SearchInpit placeholder="Введите ваше имя" nostyle="false" />
              <SearchInpit placeholder="Введите ваш e-mail" nostyle="true" />
              <SearchInpit placeholder="Придумайте ваш пароль" nostyle="false" />
              <SearchInpit placeholder="Повторите ваш пароль" nostyle="true" />
            </InputsArea>
            <SubmitArea>
              <button type="button">
                <p>ЗАРЕГИСТРИРОВАТЬСЯ</p>
              </button>
            </SubmitArea>
          </Form>
        )}
      </Main>
    </Wrapper>
  );
};

export default Login;
