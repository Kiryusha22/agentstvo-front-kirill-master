<template>
  <div class="container">
    <div>
      <h1>Количество совершенных сделок</h1>
      <p>Мы рады сообщить вам о достижении рекордного результата в сфере недвижимости. За последние 2 года наше агентство заключило более 2000 успешных сделок, что является лучшим результатом за всю историю нашей компании.
        Наша команда профессионалов в области недвижимости работает с клиентами по всему миру, предлагая им широкий выбор жилых и коммерческих объектов. Мы стремимся обеспечить нашим клиентам максимальную выгоду и комфорт, используя свое знание рынка и опыт в заключении сделок.Наши успешные сделки включают в себя продажу и покупку жилых домов, квартир, офисных и коммерческих помещений, а также инвестиции в недвижимость</p>
    </div>
    <div class="transfer">
      <h1>2300</h1>
      <p>Успешно проведенных сделок</p>
    </div>
  </div>
</template>

<style scoped>
.container {
  background-color: white; /* Серый цвет фона */
  max-width: 1440px;
  margin: 0 auto;
  padding-top: 150px;
  padding-bottom: 150px;
}

.container div h1 {
  color: var(--persik);
  text-align: left;
  margin-bottom: 15px;
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

.transfer h1 {
  font-size: 5em;
  display: inline-block;
  margin-right: 10px; /* Добавляем отступ между числом и текстом */
}

.transfer p {
  display: inline-block;
  font-size: 1.5em;
  color: #333;
  text-align: left;
}
.transfer {
  display: flex;
  align-items: center;
  padding-top: 75px;
}
</style>