<template>
  <div class="container">
    <h1 class="title-ads">Объявления о недвижимости</h1>
    <!-- Итерация по объявлениям -->
    <div class="card-grid">
      <div v-for="(advertisement, index) in ads" :key="advertisement.id" class="card-house">
        <!-- Карточка объявления -->
        <div class="card">
          <!-- Изображение -->
          <div class="image-section">
            <!-- Стилизованная кнопка для загрузки изображения -->
            <label class="custom-file-upload">
              <input type="file" accept="image/jpeg" @change="handleFileUpload($event, index)">
              Загрузить изображение
            </label>
            <!-- Используем директиву v-if, чтобы показывать изображение только если оно загружено -->
            <img v-if="advertisement.photoURL" :src="advertisement.photoURL" alt="Изображение недвижимости">
          </div>
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { makeRequest } from "@/api/makeRequest.js";

export default {
  data() {
    return {
      ads: []
    };
  },
  methods: {
    async handleFileUpload(event, index) {
      const file = event.target.files[0];
      if (!file) return;

      // Проверяем формат файла
      if (!file.type.match('image/jpeg')) {
        alert('Пожалуйста, загрузите файл в формате JPG.');
        return;
      }

      // Создаем временный URL-адрес для изображения
      const photoURL = URL.createObjectURL(file);

      // Обновляем URL-адрес фото в соответствующем объявлении
      if (this.ads[index]) {
        this.ads[index].photoURL = photoURL;
      }

      // Сохраняем обновленные данные в локальном хранилище
      this.saveAdsToLocalStorage();
    },
    saveAdsToLocalStorage() {
      // Сохраняем объявления в локальном хранилище
      localStorage.setItem('ads', JSON.stringify(this.ads));
    },
    loadAdsFromLocalStorage() {
      // Загружаем объявления из локального хранилища
      const adsData = localStorage.getItem('ads');
      if (adsData) {
        this.ads = JSON.parse(adsData);
      }
    },
    async fetchAdvertisements() {
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

        // Сохраняем объявления в локальном хранилище
        this.saveAdsToLocalStorage();
      } catch (error) {
        console.error('Ошибка при загрузке объявлений:', error.message);
      }
    }
  },
  created() {
    // Загружаем объявления из локального хранилища
    this.loadAdsFromLocalStorage();

    // Выводим данные из локального хранилища в консоль для проверки
    console.log('Загруженные объявления из локального хранилища:', this.ads);

    // Загружаем объявления с сервера
    this.fetchAdvertisements();
  }
};
</script>

<style scoped>
/* Стили для кастомной кнопки */
.custom-file-upload {
  border: 1px solid #ccc;
  display: inline-block;
  padding: 4px 8px; /* Уменьшаем отступы кнопки */
  cursor: pointer;
  border-radius: 5px;
  background-color: #f0f0f0;
  color: #333;
  position: absolute;
  top: 10px; /* Располагаем кнопку сверху карточки */
  left: 50%; /* Располагаем кнопку по центру */
  transform: translateX(-50%); /* Смещаем кнопку на половину ее ширины влево, чтобы она была по центру */
}
.custom-file-upload input[type="file"] {
  display: none;
}

.container {
  padding: 20px 0;
}
.image-section {
  text-align: center;
  padding: 15px;
  position: relative;
}

.image-section img {
  max-width: 100%;
  height: auto;
  border-radius: 5px;/* Для закругления верхних углов изображения */
}

.title-ads {
  font-size: 2em;
  margin-bottom: 33px;
  text-align: center;
}

.card-house {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.card {
  width: 550px; /* Устанавливаем ширину карточки как 1/3 от родительского контейнера с отступами */
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
.card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
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
.text-primary {
  color: #333;
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
