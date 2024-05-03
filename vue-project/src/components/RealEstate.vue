<template>
  <div class="real-estate">
    <h1>Объявления о недвижимости</h1>
    <div v-for="advertisement in ads" :key="advertisement.id" class="">
      <!-- Отображение информации об адресе -->
      <div v-if="advertisement.address">
        <h3>Адрес:</h3>
        <p v-if="advertisement.address.street && advertisement.address.street.city">
          Город: {{ advertisement.address.street.city.name }}
        </p>
        <p v-if="advertisement.address.street">
          Улица: {{ advertisement.address.street.name }}
        </p>
        <p>Дом: {{ advertisement.address.house }}</p>
        <p>Корпус: {{ advertisement.address.structure }}</p>
        <p>Строение: {{ advertisement.address.building }}</p>
        <p>Квартира: {{ advertisement.address.apartament }}</p>
      </div>

      <!-- Отображение информации о типе -->
      <div>
        <h3>Тип недвижимости:</h3>
        <p>{{ advertisement.type.name }}</p>
        <p v-if="advertisement.type.is_commercial">Коммерческая недвижимость</p>
        <p v-else>Жилая недвижимость</p>
      </div>

      <!-- Отображение информации о транзакции -->
      <div>
        <h3>Тип транзакции:</h3>
        <p>{{ advertisement.transaction_type }}</p>
      </div>

      <!-- Отображение дополнительной информации -->
      <div v-if="advertisement.detailed">
        <h3>Детали:</h3>
        <p>Площадь: {{ advertisement.detailed.area }} {{ advertisement.detailed.measurement_type }}</p>
        <p>Количество комнат: {{ advertisement.detailed.count_rooms }}</p>
      </div>

      <!-- Отображение фильтров -->
      <div v-if="advertisement.filters && advertisement.filters.length > 0">
        <h3>Фильтры:</h3>
        <ul>
          <li v-for="filter in advertisement.filters" :key="filter.code">{{ filter.name }}: {{ filter.value }}</li>
        </ul>
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
