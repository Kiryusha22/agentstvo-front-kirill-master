<script setup>
import Form from "@/components/Form.vue";
import FormItem from "@/components/FormItem.vue";
import {reactive, ref} from "vue";
import {register} from "@/api/methods/auth/register.js";
import router from "@/router/index.js";

const inputData = reactive({
  name: '',
  surname: '',
  patronymic: '',
  phone_number: '',
  birth:  '',
  login: '',
  password: '',
  email: '',

})

const errors = reactive({
  data: {},
  message: ''
})

const isLoading = ref(false)


const onSubmit = async () => {
  isLoading.value = true

  errors.data = {}
  const data = await register(inputData.name, inputData.surname, inputData.patronymic, inputData.login, inputData.password, inputData.email, inputData.birth, inputData.phone_number)

  isLoading.value = false


  if (data?.code === 422) {
    errors.data = data.errors
    return
  }
  if (data?.code === 401) {
    errors.data = data.errors
    return
  }
  await router.push({name: 'login'})

}
const onInputChange = (field, event) => {
  const value = event.target.value;
  errors.data[field] = [];

  inputData[field] = value;
}


</script>
<template>
  <main>
    <h1 class="reg">Регистрация</h1>
    <Form :submit="onSubmit" method="POST">
      <p v-if="isLoading">Загрузка...</p>
      <template v-else>
        <div class="div">
          <FormItem
              id="name"
              label="Введите имя"
              placeholder="Введите имя"
              type="text"
              :value="inputData.name"
              :error-message="errors.data?.name"
              @change="(event) => onInputChange('name', event)"
          />
          <FormItem
              id="surname"
              label="Введите фамилию"
              placeholder="Введите фамилию"
              type="text"
              :value="inputData.surname"
              :error-message="errors.data?.surname"
              @change="(event) => onInputChange('surname', event)"
          />
          <FormItem
              id="patronymic"
              label="Введите отчество"
              placeholder="Введите отчество"
              type="text"
              :value="inputData.patronymic"
              :error-message="errors.data?.patronymic"
              @change="(event) => onInputChange('patronymic', event)"
          />

          <FormItem
              id="birth"
              label="Введите дату рождения"
              placeholder="Введите дату рождения"
              type="date"
              :value="inputData.birth"
              :error-message="errors.data?.birth"
              @change="(event) => onInputChange('birth', event)"
          />
          <FormItem
              id="email"
              label="Введите почту"
              placeholder="Введите почту"
              type="email"
              :value="inputData.email"
              :error-message="errors.data?.email"
              @change="(event) => onInputChange('email', event)"
          />
          <FormItem
              id="telephone"
              label="Введите номер телефона"
              placeholder="Введите номер телефона"
              type="text"
              :value="inputData.phone_number"
              :error-message="errors.data?.phone_number"
              @change="(event) => onInputChange('phone_number', event)"
          />


          <FormItem
              id="login"
              label="Введите логин"
              placeholder="Введите логин"
              type="text"
              :value="inputData.login"
              :error-message="errors.data?.login"
              @change="(event) => onInputChange('login', event)"
          />
          <FormItem
              id="password"
              label="Введите пароль"
              placeholder="Введите пароль"
              type="password"
              :value="inputData.password"
              :error-message="errors.data?.password"
              @change="(event) => onInputChange('password', event)"
          />
        </div>
        <Button class="button" @submit.prevent="onSubmit" type="submit">Зарегистрироваться</Button>
      </template>
    </Form>
  </main>
</template>
<style scoped>
.reg {
  text-align: center;
  color: #fff;
}
.div{
  color: #fff;
}
.button {
  position: relative;
  padding: 10px 22px;
  border-radius: 6px;
  border: none;
  color: #fff;
  cursor: pointer;
  background-color: #7d2ae8;
  transition: all 0.2s ease;
}

.button:active {
  transform: scale(0.96);
}

.button:before,
.button:after {
  position: absolute;
  content: "";
  width: 150%;
  left: 50%;
  height: 100%;
  transform: translateX(-50%);
  background-repeat: no-repeat;
}

.button:hover:before {
  top: -70%;
  background-image: radial-gradient(circle, #7d2ae8 20%, transparent 20%),
  radial-gradient(circle, transparent 20%, #7d2ae8 20%, transparent 30%),
  radial-gradient(circle, #7d2ae8 20%, transparent 20%),
  radial-gradient(circle, #7d2ae8 20%, transparent 20%),
  radial-gradient(circle, transparent 10%, #7d2ae8 15%, transparent 20%),
  radial-gradient(circle, #7d2ae8 20%, transparent 20%),
  radial-gradient(circle, #7d2ae8 20%, transparent 20%),
  radial-gradient(circle, #7d2ae8 20%, transparent 20%),
  radial-gradient(circle, #7d2ae8 20%, transparent 20%);
  background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%, 15% 15%,
  10% 10%, 18% 18%;
  background-position: 50% 120%;
  animation: greentopBubbles 0.6s ease;
}

@keyframes greentopBubbles {
  0% {
    background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%,
    40% 90%, 55% 90%, 70% 90%;
  }

  50% {
    background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%,
    50% 50%, 65% 20%, 90% 30%;
  }

  100% {
    background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%,
    50% 40%, 65% 10%, 90% 20%;
    background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
  }
}

.button:hover::after {
  bottom: -70%;
  background-image: radial-gradient(circle, #7d2ae8 20%, transparent 20%),
  radial-gradient(circle, #7d2ae8 20%, transparent 20%),
  radial-gradient(circle, transparent 10%, #7d2ae8 15%, transparent 20%),
  radial-gradient(circle, #7d2ae8 20%, transparent 20%),
  radial-gradient(circle, #7d2ae8 20%, transparent 20%),
  radial-gradient(circle, #7d2ae8 20%, transparent 20%),
  radial-gradient(circle, #7d2ae8 20%, transparent 20%);
  background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 20% 20%, 18% 18%;
  background-position: 50% 0%;
  animation: greenbottomBubbles 0.6s ease;
}

@keyframes greenbottomBubbles {
  0% {
    background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%,
    70% -10%, 70% 0%;
  }

  50% {
    background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%,
    105% 0%;
  }

  100% {
    background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 95% 70%,
    110% 10%;
    background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
  }
}
</style>