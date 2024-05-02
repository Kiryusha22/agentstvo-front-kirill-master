<script setup>

</script>

<template>
  <div id="About" class="container">
    <div>
      <h1>Немного о нашей комании</h1>
      <p>Всем людям постоянно нужна недвижимость - для того, чтобы жить, работать или отдыхать. Каждый из нас<br> хоть один раз в жизни решал вопрос по покупке или продаже жилья. И перед каждым вставал вопрос: стоит ли
        <br> обращаться к риэлтору? Кто-то принимал решение действовать самостоятельно, кто-то обращался к специалистам<br> по недвижимости. Какое решение из них правильное - это другой вопрос.</p>
    </div>
    <div class="grid">
      <div>
        <h1>01</h1>
        <div class="border-h1"></div>
        <h3>Своя база</h3>
        <p>В моей базе более 20 000 предложений по продаже недвижимости в Москве</p>
      </div>
      <div>
        <h1>02</h1>
        <div class="border-h1"></div>
        <h3>Скорость работы</h3>
        <p>Подберу Вам выгодные варианты недвижимости в течении нескольких часов с момента отправки заявки</p>
      </div>
      <div>
        <h1>03</h1>
        <div class="border-h1"></div>
        <h3>Гарантия результата</h3>
        <p>Продам Вашу квартиру за месяц и максимально дорого</p>
      </div>
      <div>
        <h1>04</h1>
        <div class="border-h1"></div>
        <h3>Сопровождение</h3>
        <p>Обеспечу полную юридическую чистоту сделки</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

.container {
  background-color: white; /* Серый цвет фона */
  max-width: 1440px;
  margin: 0 auto;
  padding-top: 75px;
  padding-bottom: 150px;
}

.container .grid {
  max-width: 600px;
  padding-top: 45px;
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Два столбца */
  gap: 50px; /* Расстояние между столбцами */

}

.container div h1 {
  color: var(--persik);
  text-align: left;
  margin-bottom: 15px;
}
.border-h1 {
  border-bottom: 2px solid var(--persik); /* Подчеркивание заголовка */
  width: 600px;
  margin-bottom: 10px;
}
.container p {
  font-size: 1.2em;
  color: #333;
  text-align: left;
}

.container h3 {
  text-align: left;
  font-size: 1.5em;
  margin-bottom: 15px;
  font-weight: 800;
  color: #333;
}

.container h1 {
  text-align: left;
  font-weight: 800;
  color: #333;
}
</style>