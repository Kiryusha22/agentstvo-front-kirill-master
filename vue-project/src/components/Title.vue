<script setup>

</script>

<template>
  <main>
    <div class="container">
      <h1>Наша компания "Домовой" предоставит вам<br> личного риэлтора</h1>
      <h3>Продадим ваше имущество или сдадим ваше быстро и по приятной цене</h3>
      <button class="more-info">
        Получить бесплатную консультацию
      </button>
    </div>
  </main>
</template>

<style scoped>

main {
  background-image: url(../assets/images/modern-tokyo-street-background.png); /* Замените 'path_to_your_image.jpg' на путь к вашему фоновому изображению */
  background-size: cover;
  background-position: center;
  height: 100vh; /* Высота main блока будет равна высоте экрана */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

}

.container {
  color: white; /* Цвет текста */
}

.more-info {
  background-color: #ff6b6b; /* Стиль кнопки */
  color: white;
  border: none;
  padding: 10px 20px;
  margin-top: 20px;
  cursor: pointer;
}

.more-info:hover {
  background-color: #ff6b2b; /* Изменение стиля при наведении */
}

h1 {
  font-size: 3.2em;
  color: white;
  padding: 50px;
}
h3{
  color: white;
  padding-bottom: 50px;
  font-size: 1.5em;
}
button {
  font-size: 1.3em;

}
</style>
