<script setup>
import axios from "axios";
axios.defaults.baseURL = 'https://api.upfollow.ru';
axios.defaults.withCredentials = true;// Добавьте это для использования useRoute
import { ref } from 'vue'
import { useRoute } from 'vue-router';
const route = useRoute(); 
const form = ref({
  email: '',
  password: ''
})
const eye = ref('/glaz.png')
const type = ref('password')
const setEye = () => {
  if (eye.value == '/glaz.png') {
    eye.value = '/closeeye.png'
    type.value = 'password'
  } else {
    eye.value = '/glaz.png'
    type.value = 'text'
  }
}

const error = ref("")



const login = async () => {
  try {
    const res = await axios.post('/login', {
      email: form.value.email,
      password: form.value.password
    });
    if (res.data.message === 'ok') {
      error.value = 'Ok';
      route.push('/');
    } else if (res.data.message === 'wrong!') {
      error.value = 'Пароль и почта не совпадают!';
    } else {
      error.value = 'Неизвестная ошибка.';
    }
  } catch (error) {
    console.error('Ошибка при отправке запроса:', error);
    error.value = 'Ошибка при отправке запроса.';
  }
};



</script>

<template>
  <div class="all-container">
    <h6>UF</h6>
    <div class="login-container container">
      <div class="img-container">
        <img src="/mounted.png" alt="" class="img" />
      </div>
      <div class="head">
        <h1>Войти</h1>
      </div>
      <form @submit.prevent="login()">
      <div class="input-container">
        <div class="div-nickname">
          <input type="text" v-model="form.email" class="input" autofocus required />
          <span сlass="nick">Почта</span>
        </div>
        <div class="password">
          <input :type="type" v-model="form.password" class="input" required />
          <span>Пароль</span>
          <img :src="eye" alt="" class="eye" @click="setEye" />
        </div>
      </div>
      <div class="btn-container">
        <button class="bt reg">Регистрация</button>
        <button class="bt login" type="submit">Войти</button>
      </div>
    </form>
      <div class="mail">
        <a href=""><img src="/mail.svg" alt="" /></a>
      </div>
      <a href="" class="a">Забыли пароль?</a>
      <div class="errors"><p class="err">{{error}}</p></div>
    </div>
  </div>
</template>

<style scoped>
:root {
  --font-family: 'Rubik', sans-serif;
  --second-family: 'Inter', sans-serif;
}
.err {
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 20px;
  color: #f00;
  position: absolute;
  top: 550px;
  left: 530px;
}
.a {
  position: absolute;
  top: 500px;
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 20px;
  color: #3b82f6;
  text-decoration: none;
  z-index: 8000;
  left: 530px;
}
.mail {
  position: relative;
}
h6 {
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 25px;
  color: #3b82f6;
  position: absolute;
  top: 10px;
  left: 10px;
  display: block;
}
.img-container {
  display: block;
}
.mail img {
  position: absolute;
  top: 550px;
  cursor: pointer;
  right: -130px;
}
.all-container {
  display: flex;
  background-color: #ecedee;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  position: relative;
}
.login-container {
  display: flex;
  border-radius: 50px;
  margin: 80px;
  width: 1100px;
  height: 620px;
  background: #fff;
  position: relative;
}
.img {
  height: 620px;
  transform: translateX(-50px);
  transition: all 0.3s;
}
.head {
  height: 50px;
}
.password {
  /* display: flex; */
  /* align-items: center; */
  position: relative;
  width: 30px;
}
.password span {
  position: absolute;
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 25px;
  color: #5b5a5a;
  top: 14px;
  left: 18px;
  pointer-events: none;
  transition: 0.3s ease;
  border-radius: 15px;
}
h1 {
  font-weight: 700;
  font-size: 80px;
  color: #000;
  width: 100%;
  margin: 80px 0px 0px 40px;
}
.input-container {
  display: flex; /* Добавляем flexbox */
  flex-direction: column; /* Устанавливаем вертикальное направление */
  margin: 230px 0px 0px -250px; /* Меняем отступ */
  width: 400px; /* Добавляем ширину для блока инпутов */
  z-index: 300;
}

.input {
  margin-bottom: 40px;
  border-radius: 15px;
  width: 430px;
  height: 60px;
  background: #eae9e9;
  border: none;
  padding: 20px;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 20px;
  color: #000000;
}
.btn-container {
  display: flex;
  justify-content: center; /* Выравниваем кнопки по центру */
  margin-top: -10px; /*  Вертикальный отступ */
  gap: 30px;
  margin-left: -250px;
}

.bt {
  border-radius: 15px;
  width: 200px;
  height: 60px;
  background: blue;
  border: none;
  cursor: pointer;
  z-index: 7000;
}
.reg {
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 25px;
  text-align: center;
  color: #5b5a5a;
  background: #eae9e9;
  cursor: pointer;
}

.login {
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 25px;
  text-align: center;
  color: #fff;
  background: #3b82f6;
  text-align: center;
  cursor: pointer;
}
.eye {
  position: absolute;
  width: 50px;
  height: 50px;
  z-index: 400;
  cursor: pointer;
  top: 7px;
  right: -380px;
}
.div-nickname {
  position: relative;
  width: 300px;
}
.div-nickname span {
  position: absolute;
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 25px;
  color: #5b5a5a;
  top: 14px;
  left: 18px;
  pointer-events: none;
  transition: 0.3s ease;
  border-radius: 15px;
  width: 115px;
}
.reg:hover {
  color: #5b5a5a;
  background: #d7d5d5;
  transition: all 0.3s;
}
.input:focus {
  outline: none;
  border: none;
  border: 4px solid #3b82f6;
  transition: all 0.1s;
}
.login:hover {
  color: #fff;
  background: #2e77ed;
}
.input:focus ~ span,
.input:valid ~ span {
  transform: translateY(-115%);
  font-size: 20px;
  left: 25px;
  border: solid #3b82f6;
  background: #3b82f6;
  color: #fff;
  width: 110px;
  text-align: center;
  border-radius: 15px;
}
@media (max-width: 1260px) {
  .mail img {
    position: absolute;
    top: 550px;
    cursor: pointer;
    right: -110px;
  }
}
@media (max-width: 1235px) {
  .mail img {
    position: absolute;
    top: 550px;
    cursor: pointer;
    right: -70px;
  }
}

@media (max-width: 1199px) {
  .mail img {
    position: absolute;
    top: 550px;
    cursor: pointer;
    right: 30px;
  }
}

@media (max-width: 1175px) {
  .img-container {
    display: none;
  }
  .a {
    position: absolute;
    left: 300px;
  }
  .mail img {
    position: absolute;
    top: 550px;
    cursor: pointer;
    right: -30px;
  }
  .login-container {
    display: flex;
    border-radius: 50px;
    margin: 80px;
    width: 550px;
    height: 600px;
    background: #fff;
    position: relative;
  }
}
@media (max-width: 705px) {
  .mail img {
    position: absolute;
    top: 550px;
    cursor: pointer;
    right: -40px;
  }
}
@media (max-width: 685px) {
  .mail img {
    position: absolute;
    top: 550px;
    cursor: pointer;
    right: 50px;
  }
  .a {
    position: absolute;
    left: 250px;
  }
  .input {
    margin-bottom: 40px;
    border-radius: 15px;
    width: 330px;
    height: 60px;
    background: #eae9e9;
    border: none;
    padding: 20px;
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 20px;
    color: #000000;
  }
  .bt {
    border-radius: 15px;
    width: 150px;
    height: 60px;
    border: none;
    cursor: pointer;
    z-index: 7000;
  }
  .login-container {
    display: flex;
    border-radius: 50px;
    margin: 80px;
    width: 430px;
    height: 600px;
    background: #fff;
    position: relative;
  }
  .eye {
    position: absolute;
    width: 50px;
    height: 50px;
    z-index: 100;
    cursor: pointer;
    top: 7px;
    right: -280px;
  }
  .reg {
    font-family: var(--font-family);
    margin-left: -70px;
    font-weight: 700;
    font-size: 20px;
    text-align: center;
    color: #5b5a5a;
    background: #eae9e9;
    cursor: pointer;
  }
  .login {
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 20px;
    text-align: center;
    color: #fff;
    background: #3b82f6;
    text-align: center;
    cursor: pointer;
  }
}

/* @media (max-width: 567px) {
  .input {
    margin-bottom: 40px;
    border-radius: 15px;
    width: 300px;
    height: 60px;
    background: #eae9e9;
    border: none;
    padding: 20px;
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 17px;
    color: #000000;
  }
  .eye {
    position: absolute;
    width: 50px;
    height: 50px;
    z-index: 100;
    cursor: pointer;
    top: 7px;
    right: -250px;
  }
  .bt {
    border-radius: 15px;
    width: 135px;
    height: 60px;
    border: none;
    cursor: pointer;
    z-index: 7000;
  }
  .login {
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 20px;
    margin-right: 30px;
  }
  .mail img {
    right: 20px;
  }
  h6 {
    display: none;
  }
  .reg {
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 18px;
  }
} */
@media (max-width: 505px) {
  .all-container {
    background: #fff;
  }
  /* .login-container {
    -webkit-box-shadow: 4px 4px 100px 0px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 4px 4px 100px 0px rgba(34, 60, 80, 0.2);
    box-shadow: 4px 4px 100px 0px rgba(34, 60, 80, 0.2);

    margin-left: 50px;
  } */
}
</style>
