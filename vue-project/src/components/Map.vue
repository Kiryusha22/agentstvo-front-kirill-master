<script setup>

  ymaps.ready(init);
  function init() {
  var myMap = new ymaps.Map("map", {
  center: [55.76, 37.64], // Координаты центра карты
  zoom: 7 // Масштаб карты
});
}
</script>

<template>
  <div class="container">
    <div class="container-main">
      <div class="maps" id="map" style="width: 600px; height: 400px;"></div>
      <div class="container-map">
        <h1>Контакты</h1>
        <div class="im">
          <img src="../assets/images/location.png" height="24" width="24" alt="location" />
          <p>614015, г. Пермь, ул. Монастырская, д.57</p>
        </div>
        <div class="im">
          <img src="../assets/images/email.png" height="24" width="24" alt="email" />
          <p>domovoi@mail.ru</p>
        </div>
        <div class="im">
          <img src="../assets/images/phone-call.png" height="24" width="24" alt="phone" />
          <p>+79325812435</p>
        </div>
        <div class="social">
          <p>Наши соц сети</p>
          <div class="social-img">
            <img src="../assets/images/telegram.png" height="24" width="24" alt="telegram" />
            <img src="../assets/images/vk.png" height="24" width="24" alt="vk" />
            <img src="../assets/images/whatsapp.png" height="24" width="24" alt="whatsapp" />
          </div>
          <div class="social-footer">
            <p>Приходите к нам по будням с 10:00 до 19:00</p>
            <p>© Бизнес-мой господин. 2024</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-map {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

}
.container {
  margin: 0 auto;
  height: 600px;
  background-color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: ;
}
p, h1{
  color: white;
}
.container-main {
  max-width: 1440px;
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Два столбца */

}
.maps {
  display: flex;
  margin: 0 auto;

}
.im {
  display: flex;
  flex-direction: row;
  padding-top: 15px;
  font-size: 1.3em;
}
.im img {
  padding-right: 10px;
  background-size: cover;
  height: auto;
  width: 30px;
}
.social {
  padding-top: 100px;
}
.social p {
  font-size: 1.1em;
  padding-bottom: 10px;
  padding-top: 10px;
}
.social-img {
  flex-direction: row;
  display: flex;
  justify-content: center;
}
.social-img img {
  margin-right: 10px;
  margin-left: 10px;
}
</style>