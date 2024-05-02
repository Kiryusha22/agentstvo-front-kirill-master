<template>
  <main>
    <div class="container">
      <!-- Используем динамический класс для применения анимации -->
      <h1 :class="{ 'animate-title': titleVisible }">Наша компания "Домовой" предоставит вам<br> личного риэлтора</h1>
      <h3>Продадим ваше имущество или сдадим быстро и по приятной цене</h3>
      <button class="more-info">
        Получить бесплатную консультацию
      </button>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const titleVisible = ref(false);

// Задержка перед появлением текста тайтла
const delay = 2000;

onMounted(() => {
  // Постепенное появление текста тайтла после задержки
  setTimeout(() => {
    titleVisible.value = true;
  }, delay);
});
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

.container {
  color: white;
}

.more-info {
  background-color: #ff6b6b;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-top: 20px;
  cursor: pointer;
}

.more-info:hover {
  background-color: #ff6b2b;
}

h1 {
  font-size: 3.2em;
  padding: 50px;
  position: relative;
  color: transparent; /* Сделаем текст невидимым изначально */
}

/* Анимация для появления текста */
.animate-title {
  animation: fadeIn 2s ease forwards;
}

h3 {
  color: #f0f0f0; /* Светлый цвет текста */
  padding-bottom: 50px;
  font-size: 1.5em;
}

button {
  font-size: 1.3em;
}

/* Ключевые кадры для анимации */
@keyframes fadeIn {
  0% {
    opacity: 0;
    color: white; /* Постепенно меняем цвет текста на белый */
  }
  100% {
    opacity: 1;
    color: #f0f0f0; /* Устанавливаем окончательный цвет текста */
  }
}
</style>
