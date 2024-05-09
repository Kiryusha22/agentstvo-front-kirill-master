<template>
  <main>
    <div class="container">
      <h1 :class="{ 'animate-title': titleVisible }">Наша компания "Домовой" предоставит вам<br> личного риэлтора</h1>
      <h3>Продадим ваше имущество или сдадим быстро и по приятной цене</h3>
      <button class="more-info" @click="showPhoneNumberModal">Получить бесплатную консультацию</button>
      <!-- Модальное окно с номером телефона -->
      <div v-if="showModal" class="modal">
        <div class="modal-content">
          <span class="close" @click="closePhoneNumberModal">&times;</span>
          <p>Номер телефона для консультации: 8932489324821</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue';

const titleVisible = ref(false);
const showModal = ref(false);

// Задержка перед появлением текста тайтла
const delay = 2000;

// Постепенное появление текста тайтла после задержки
setTimeout(() => {
  titleVisible.value = true;
}, delay);

// Функция для отображения модального окна
const showPhoneNumberModal = () => {
  console.log("Clicked on 'Get Free Consultation'");
  showModal.value = true;
};

// Функция для закрытия модального окна
const closePhoneNumberModal = () => {
  console.log("Clicked on 'Close Modal'");
  showModal.value = false;
};
</script>

<style scoped>
main {
  background-image: url(../assets/images/modern-tokyo-street-background.png);
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}
.modal {
  display: block;
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: auto;
}
.modal.show {
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content {
  background-color: #222;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
}
.close {
  color: #aaa;
  align-self: flex-end;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 10px;
}
.close:hover,
.close:focus {
  color: white;
}
.container {
  color: white;
  text-align: center;
}
.more-info {
  background-color: #ff6b6b;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-top: 20px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}
.more-info:hover {
  background-color: #ff6b2b;
}
h1 {
  font-size: 3.2em;
  padding: 50px;
  position: relative;
  color: transparent;
}
.animate-title {
  animation: fadeIn 2s ease forwards;
}
h3 {
  color: #f0f0f0;
  padding-bottom: 50px;
  font-size: 1.5em;
}
button {
  font-size: 1.3em;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
    color: white;
  }
  100% {
    opacity: 1;
    color: #f0f0f0;
  }
}
</style>