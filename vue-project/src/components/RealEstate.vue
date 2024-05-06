<template>
  <div class="container">
    <h1 class="title-ads">Объявления о недвижимости</h1>
    <!-- Итерация по объявлениям -->
    <div v-for="(advertisement, index) in ads" :key="advertisement.id" class="card-house">
      <!-- Карточка объявления -->
      <div class="card">
        <div class="main-info">
          <!-- Информация об адресе -->
          <div class="info-section" v-if="advertisement.address">
            <h3 class="card-title">Адрес:</h3>
            <p v-if="advertisement.address.street && advertisement.address.street.city">
              Город: <strong>{{ advertisement.address.street.city.name }}</strong>
            </p>
            <p v-if="advertisement.address.street">
              Улица: <strong>{{ advertisement.address.street.name }}</strong>
            </p>
            <p>Дом: <strong>{{ advertisement.address.house }}</strong></p>
            <p>Корпус: <strong>{{ advertisement.address.structure }}</strong></p>
            <p>Строение: <strong>{{ advertisement.address.building }}</strong></p>
            <p>Квартира: <strong>{{ advertisement.address.apartament }}</strong></p>
          </div>

          <!-- Информация о типе -->
          <div class="info-section">
            <h3 class="card-title">Тип недвижимости:</h3>
            <p>{{ advertisement.type.name }}</p>
            <p v-if="advertisement.type.is_commercial" class="text-success">Коммерческая недвижимость</p>
            <p v-else class="text-primary">Жилая недвижимость</p>
          </div>

          <!-- Информация о транзакции -->
          <div class="info-section">
            <h3 class="card-title">Тип транзакции:</h3>
            <p>{{ advertisement.transaction_type }}</p>
          </div>

          <!-- Дополнительная информация -->
          <div class="info-section" v-if="advertisement.detailed">
            <h3 class="card-title">Детали:</h3>
            <p>Площадь: <strong>{{ advertisement.detailed.area }} {{ advertisement.detailed.measurement_type }}</strong></p>
            <p>Количество комнат: <strong>{{ advertisement.detailed.count_rooms }}</strong></p>
          </div>

          <!-- Фильтры -->
          <div class="info-section" v-if="advertisement.filters && advertisement.filters.length > 0">
            <h3 class="card-title">Фильтры:</h3>
            <ul class="list-group list-group-flush">
              <li v-for="filter in advertisement.filters" :key="filter.code" class="list-group-item">
                {{ filter.name }}: <strong>{{ filter.value }}</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Импортируем функцию для выполнения запросов
import { makeRequest } from "@/api/makeRequest.js";

export default {
  data() {
    return {
      ads: [] // Массив для хранения полученных объявлений
    };
  },

  async created() {
    // Выполняем запрос к серверу для получения объявлений
    try {
      const response = await makeRequest('/advertisement/search');

      if (!response.ok) {
        throw new Error(`Ошибка при получении объявлений: ${response.statusText}`);
      }

      // Преобразуем полученные данные в JSON
      const data = await response.json();

      // Сохраняем полученные объявления в data.ads
      this.ads = data.advertisements;
    } catch (error) {
      console.error('Ошибка при загрузке объявлений:', error.message);
    }
  }
};
</script>

<style scoped>
.container {
  padding: 20px 0;
}

.title-ads {
  font-size: 2em;
  margin-bottom: 30px;
  text-align: center;
}

.card-house {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.card {
  width: calc(33.33% - 20px); /* Устанавливаем ширину карточки как 1/3 от родительского контейнера с отступами */
  margin-right: 20px; /* Отступ между карточками */
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.card:last-child {
  margin-right: 0;
}

.main-info {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.info-section {
  padding: 15px;
}

.card-title {
  font-size: 1em;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
  text-transform: uppercase;
}

.text-success {
  color: green;
}

.text-primary {
  color: blue;
}

strong {
  font-weight: bold;
  color: #333;
}

.list-group-item {
  padding: 10px 15px;
  border: none;
  background-color: #f5f5f5;
  border-radius: 5px;
  margin-bottom: 5px;
}

.card-body > p,
.card-body > ul {
  margin-bottom: 15px;
}
</style>
