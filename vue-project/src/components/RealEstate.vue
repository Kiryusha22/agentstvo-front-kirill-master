<template>
  <div class="container">
    <h1 class="title-ads">🏡 Объявления о недвижимости</h1>
    <div class="card-grid">
      <div v-for="(advertisement, index) in ads" :key="advertisement.id" class="card-house">
        <div class="card">
          <div class="image-section">
            <label class="custom-file-upload">
              <input type="file" accept="image/jpeg" @change="handleFileUpload($event, index)">
              Загрузить изображение
            </label>
            <img v-if="advertisement.photoURL" :src="advertisement.photoURL" alt="Изображение недвижимости">
          </div>
          <div class="main-info">
            <div class="info-section" v-if="advertisement.address">
              <h3 class="card-title">📍 Адрес:</h3>
              <p v-if="advertisement.address.city">
                Город: <strong>{{ advertisement.address.city.name }}</strong>
              </p>
              <p v-if="advertisement.address.street">
                Улица: <strong>{{ advertisement.address.street.name }}</strong>
              </p>
              <p>Дом: <strong>{{ advertisement.address.house }}</strong></p>
              <!-- Проверяем наличие корпуса и квартиры перед их отображением -->
              <p v-if="advertisement.address.structure !== null">
                Корпус: <strong>{{ advertisement.address.structure }}</strong>
              </p>
              <p v-if="advertisement.address.apartment !== null">
                Квартира: <strong>{{ advertisement.address.apartment }}</strong>
              </p>
            </div>

            <div class="info-section">
              <h3 class="card-title">🏠 Тип недвижимости:</h3>
              <p>{{ advertisement.type.name }}</p>
              <p v-if="advertisement.type.is_commercial" class="text-success">Коммерческая недвижимость</p>
              <p v-else class="text-primary">Жилая недвижимость</p>
            </div>

            <div class="info-section">
              <h3 class="card-title">💼 Тип транзакции:</h3>
              <p>{{ advertisement.transaction_type }}</p>
            </div>

            <div class="info-section" v-if="advertisement.detailed">
              <h3 class="card-title">📐 Детали:</h3>
              <p>Площадь: <strong>{{ advertisement.detailed.area }} {{ advertisement.detailed.measurement_type }}</strong></p>
              <p>Количество комнат: <strong>{{ advertisement.detailed.count_rooms }}</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
  </div>
  <Footer />
</template>

<script>
import { makeRequest } from "@/api/makeRequest.js";
import Footer from "@/components/Footer.vue";

export default {
  components: {Footer},
  data() {
    return {
      ads: [],
      errorMessage: ''
    };
  },
  methods: {
    async handleFileUpload(event, index) {
      try {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('image', file);

        const serverURL = 'http://localhost:5173/upload/image'; // Условный адрес сервера
        const response = await fetch(serverURL, {
          method: 'POST',
          body: formData
        });

        if (!response.ok) {
          throw new Error('Ошибка при загрузке изображения');
        }

        const data = await response.json();
        this.ads[index].photoURL = data.imageUrl;
        this.saveAdsToLocalStorage();
        this.$forceUpdate();
      } catch (error) {
        console.error('Ошибка при загрузке изображения:', error.message);
        this.errorMessage = 'Ошибка при загрузке изображения: ' + error.message;
      }
    },
    saveAdsToLocalStorage() {
      localStorage.setItem('ads', JSON.stringify(this.ads));
    },
    loadAdsFromLocalStorage() {
      const adsData = localStorage.getItem('ads');
      if (adsData) {
        this.ads = JSON.parse(adsData);
      }
    },
    async fetchAdvertisements() {
      try {
        const response = await makeRequest('/advertisement/search');
        if (!response || !response.advertisements || response.advertisements.length === 0) {
          throw new Error('Отсутствуют объявления');
        }
        this.ads = response.advertisements;
        this.saveAdsToLocalStorage();
      } catch (error) {
        console.error('Ошибка при загрузке объявлений:', error.message);
        this.errorMessage = 'Ошибка при загрузке объявлений: ' + error.message;
      }
    }
  },
  created() {
    this.loadAdsFromLocalStorage();
    this.fetchAdvertisements();
  }
};
</script>



<style scoped>
.custom-file-upload {
  border: 1px solid #ccc;
  display: inline-block;
  padding: 4px 8px;
  cursor: pointer;
  border-radius: 5px;
  background-color: #f0f0f0;
  color: #333;
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
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
  border-radius: 5px;
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
  width: 550px;
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
.text-success {
  color: #28a745;
}
.error-message {
  color: #dc3545;
  text-align: center;
  margin-top: 20px;
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
