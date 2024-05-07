<template>
  <main>
    <h1 class="reg">Регистрация</h1>
    <Form @submit="onSubmit" method="POST">
      <div class="div">
        <label for="role" class="role-label">Выберите роль:</label>
        <select id="role" v-model="selectedRole" class="role-select">
          <option value="user">Пользователь</option>
          <option value="admin">Администратор</option>
        </select>
      </div>
      <FormItem
          id="name"
          label="Введите имя"
          placeholder="Введите имя"
          type="text"
          :value="inputData.name"
          :error-message="errors.name"
          @change="(event) => onInputChange('name', event)"
      />
      <FormItem
          id="surname"
          label="Введите фамилию"
          placeholder="Введите фамилию"
          type="text"
          :value="inputData.surname"
          :error-message="errors.surname"
          @change="(event) => onInputChange('surname', event)"
      />
      <FormItem
          id="patronymic"
          label="Введите отчество"
          placeholder="Введите отчество"
          type="text"
          :value="inputData.patronymic"
          :error-message="errors.patronymic"
          @change="(event) => onInputChange('patronymic', event)"
      />
      <FormItem
          id="telephone"
          label="Введите номер телефона"
          placeholder="Введите номер телефона"
          type="text"
          :value="inputData.phone_number"
          :error-message="errors.phone_number"
          @change="(event) => onInputChange('phone_number', event)"
      />
      <Button class="button" @click="showVerificationModal" type="button">Зарегистрироваться</Button>
    </Form>
    <!-- Модальное окно для ввода кода подтверждения -->
    <Modal v-if="showModal" @close="closeVerificationModal">
      <h2>Подтверждение регистрации</h2>
      <input v-model="verificationCode" placeholder="Введите код подтверждения" />
      <span style="color: red;">{{ verificationError }}</span>
      <button @click="confirmRegistration">Подтвердить</button>
    </Modal>
  </main>
</template>

<script setup>
import Form from "@/components/Form.vue";
import Modal from "@/components/Modal.vue";
import { ref } from "vue";
import router from "@/router/index.js";
import { register } from "@/api/methods/auth/register.js";
import FormItem from "@/components/FormItem.vue";

// Генерация случайного кода подтверждения
const generateVerificationCode = () => {
  return Math.random().toString(36).substring(2, 8);
};

const generatedCode = generateVerificationCode();

// Объявление реактивных переменных и методов
const selectedRole = ref('user');
const inputData = ref({
  name: '',
  surname: '',
  patronymic: '',
  phone_number: '',
});
const errors = ref({
  name: [],
  surname: [],
  patronymic: [],
  phone_number: [],
  message: ''
});

// Добавляем состояние и методы для кода подтверждения
const showModal = ref(false);
const verificationCode = ref('');
const verificationError = ref('');

// Показываем модальное окно для ввода кода подтверждения
const showVerificationModal = () => {
  showModal.value = true;
};

// Закрываем модальное окно для ввода кода подтверждения
const closeVerificationModal = () => {
  showModal.value = false;
  verificationCode.value = '';
};

// Подтверждаем регистрацию
const confirmRegistration = async () => {
  // Проверяем, правильный ли введен код подтверждения
  console.log("Подтверждение кода:", verificationCode.value, "Сгенерированный код:", generatedCode);
  if (verificationCode.value === generatedCode) {
    try {
      console.log("Отправка данных на сервер:", inputData.value);
      const data = await register({
        name: inputData.value.name,
        surname: inputData.value.surname,
        patronymic: inputData.value.patronymic,
        phone_number: inputData.value.phone_number
      });
      console.log("Ответ сервера:", data);
      // ваш код дальнейших действий
    } catch (error) {
      console.error(error);
      errors.value.message = 'Произошла ошибка при регистрации. Пожалуйста, попробуйте еще раз.';
    }
  } else {
    verificationError.value = 'Неправильный код подтверждения';
  }
  closeVerificationModal();
};

// Обработчик сабмита формы
const onSubmit = async () => {
  errors.value = {
    name: [],
    surname: [],
    patronymic: [],
    phone_number: [],
    message: ''
  };

  // Проверяем, правильный ли введен код подтверждения
  if (verificationCode.value !== generatedCode) {
    verificationError.value = 'Неправильный код подтверждения';
    return;
  }

  try {
    const data = await register({
      name: inputData.value.name,
      surname: inputData.value.surname,
      patronymic: inputData.value.patronymic,
      phone_number: inputData.value.phone_number,
      role: selectedRole.value // Отправляем выбранную роль
    });

    if (data?.code === 422 || data?.code === 401) {
      errors.value = data.errors;
      return;
    }

    await router.push({ name: 'login' });
  } catch (error) {
    console.error(error);
    // Обработка ошибки, например, показ сообщения пользователю
    errors.value.message = 'Произошла ошибка при регистрации. Пожалуйста, попробуйте еще раз.';
  }
};

// Обновляем значения полей ввода при изменении
const onInputChange = (field, event) => {
  const value = event.target.value;
  errors.value[field] = [];

  inputData.value[field] = value;
};
</script>


<style scoped>
.reg {
  text-align: center;
  color: #fff;
}
.role-label {
  font-size: 1.2em; /* Увеличиваем размер текста */
}

.role-select {
  font-size: 1.2em; /* Увеличиваем размер текста */
}
.div {
  color: #fff;
}
.button {
  position: relative;
  padding: 10px 22px;
  border-radius: 6px;
  border: none;
  color: #fff;
  cursor: pointer;
  background-color: var(--persik);
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