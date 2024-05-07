<template>
  <div class="container">
    <h1>Отзывы наших клиентов</h1>
  </div>
  <div class="reviews-container">
    <div class="review">
      <div class="review-content">
        <p class="review-text">Компания отлично справилась с ремонтом моего дома. Рабочие были очень аккуратными и внимательными к деталям. Результат превзошел все мои ожидания!</p>
      </div>
      <div class="user-avatar-container">
        <img src="https://cdn-icons-png.flaticon.com/512/1/1142.png" alt="Аватар клиента 1" class="user-avatar">
      </div>
    </div>
    <div class="review">
      <div class="review-content">
        <p class="review-text">Я обратился в эту компанию за помощью в разработке дизайна для моего нового дома. Дизайнеры проявили творческий подход и предложили множество интересных идей. В итоге, мой дом выглядит стильно и уютно.</p>
      </div>
      <div class="user-avatar-container">
        <img src="https://cdn-icons-png.flaticon.com/512/53/53106.png" alt="Аватар клиента 1" class="user-avatar">
      </div>
    </div>
    <div class="review">
      <div class="review-content">
        <p class="review-text">Отличное качество работы и высокий профессионализм сотрудников компании. Они справились с установкой системы отопления в моем доме в кратчайшие сроки и с минимальным количеством шума и беспорядка.</p>
      </div>
      <div class="user-avatar-container">
        <img src="https://cdn-icons-png.flaticon.com/512/53/53104.png" alt="Аватар клиента 1" class="user-avatar">
      </div>
    </div>
    <div class="review">
      <div class="review-content">
        <p class="review-text">Компания провела для меня энергоаудит дома. Рекомендации специалистов оказались очень полезными, и после внедрения их советов моя квартира стала намного энергоэффективнее.</p>
      </div>
      <div class="user-avatar-container">
        <img src="https://cdn-icons-png.flaticon.com/512/53/53154.png" alt="Аватар клиента 1" class="user-avatar">
      </div>
    </div>
    <div class="review">
      <div class="review-content">
        <p class="review-text">Я обратился в компанию "Домовой" за услугой по утеплению фасада моего дома. Работники компании справились с задачей быстро и качественно, теперь мой дом теплее и уютнее.</p>
      </div>
      <div class="user-avatar-container">
        <img src="https://cdn-icons-png.flaticon.com/512/79/79783.png" alt="Аватар клиента 1" class="user-avatar">
      </div>
    </div>
    <div class="review">
      <div class="review-content">
        <p class="review-text">Компания провела для меня реконструкцию кухни. Дизайнеры предложили множество интересных идей, а строители справились с работой на высшем уровне. Кухня теперь выглядит современно и функционально.</p>
      </div>
      <div class="user-avatar-container">
        <img src="https://cdn-icons-png.flaticon.com/512/634/634758.png" alt="Аватар клиента 1" class="user-avatar">
      </div>
    </div>
    <div class="review">
      <div class="review-content">
        <p class="review-text">Я обратилась в компанию "Домовой" за услугой по установке нового сайдинга на моем доме. Работники компании справились с задачей быстро и качественно, теперь мой дом выглядит аккуратно и привлекательно.</p>
      </div>
      <div class="user-avatar-container">
        <img src="https://cdn-icons-png.freepik.com/512/53/53101.png" alt="Аватар клиента 1" class="user-avatar">
      </div>
    </div>
    <div class="review">
      <div class="review-content">
        <p class="review-text">Компания провела для меня ремонт ванной комнаты. Рабочие были очень аккуратными и внимательными к деталям, а результат превзошел все мои ожидания. Ванная комната теперь выглядит стильно и уютно.</p>
      </div>
      <div class="user-avatar-container">
        <img src="https://cdn-icons-png.freepik.com/512/53/53133.png" alt="Аватар клиента 1" class="user-avatar">
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding-top: 50px;
  padding-bottom: 30px;
  text-align: center;
}

.reviews-container {
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  overflow-x: auto;
  padding: 20px;
}

.review {
  position: relative;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center; /* Выравнивание по центру */
  padding: 10px;
}

.review-content {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center; /* Выравнивание текста по центру */
}

.review-text {
  font-size: 14px;
  text-align: center;
}

.user-avatar-container {
  margin-top: 10px;
}

.user-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}


</style>
