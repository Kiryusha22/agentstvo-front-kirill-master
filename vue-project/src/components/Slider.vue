<template>
  <div class="slider-container">
    <div class="ads">
      <h1>Лучшие предложения на рынке</h1>
    </div>
    <div class="slider" @mouseenter="stopAutoSlide" @mouseleave="startAutoSlide">
      <div class="slides" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
        <div v-for="(slide, index) in slides" :key="index" class="slide">
          <img :src="slide.image" alt="Slide" />
          <div class="slide-content">
            <h2>{{ slide.title }}</h2>
            <p>{{ slide.description }}</p>
            <button @click="removeAd(index)">Удалить</button> <!-- Кнопка удаления -->
          </div>
        </div>
      </div>
      <button @click="prevSlide" class="arrow-button left">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button> <!-- Стрелка влево -->
      <button @click="nextSlide" class="arrow-button right">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button> <!-- Стрелка вправо -->
      <div class="indicators">
        <div v-for="(slide, index) in slides" :key="index" class="indicator" :class="{ active: currentSlide === index }" @click="currentSlide = index"></div>
      </div>
    </div>
    <div class="add-form">
      <h2 class="form-title">Добавить новое объявление</h2>
      <form @submit.prevent="addNewAd" class="form">
        <div class="form-group">
          <label for="title" class="form-label">Заголовок:</label>
          <input type="text" id="title" v-model="newAd.title" class="form-input" required>
        </div>
        <div class="form-group">
          <label for="description" class="form-label">Описание:</label>
          <textarea id="description" v-model="newAd.description" class="form-textarea" required></textarea>
        </div>
        <div class="form-group">
          <label for="image" class="form-label">Изображение URL:</label>
          <input type="text" id="image" v-model="newAd.image" class="form-input" required>
        </div>
          <button type="submit" class="form-button">Разместить объявление</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 0,
      slides: JSON.parse(localStorage.getItem('slides')) || [
        {
          title: "Идеальный уголок для вашей семьи!",
          description: "Просторные дома в живописном районе. Школы, парки и удобный доступ к городу. Звоните для просмотра.",
          image: 'https://ropshada.ru/wp-content/uploads/2021/06/image-41-1.png'
        },
        {
          title: "Живите в роскоши!",
          description: "Элегантные и современные дома в эксклюзивном комплексе. Рядом с ресторанами, магазинами и развлекательными заведениями.",
          image: 'https://cdn.riastatic.com/photosnewr/ria/news_common/luchshee-vremya-dlya-prodazhi-doma__173040-620x0.jpg'
        },
        {
          title: "Ваш дом мечты ждет!",
          description: "Уютные дома с прекрасным видом на озеро и горы. Расположены в спокойном пригороде. Звоните сегодня!",
          image: 'https://images.cdn-cian.ru/images/dom-fominskoe-2-ya-fominskaya-ulica-2159612051-4.jpg'
        },
        {
          title: "Идеальный вариант для инвестиции!",
          description: "Многофункциональные дома в процветающем районе. Отличный потенциал для аренды или перепродажи. Звоните сейчас!",
          image: 'https://img.dmclk.ru/c960x640q80/vitrina/owner/69/20/6920a60635db47b8b24d5b6a2763b702.jpg'
        },
        {
          title: "Дома, созданные для вашего комфорта!",
          description: "Просторные, светлые и уютные дома с современными удобствами. Расположены в тихом районе с развитой инфраструктурой.",
          image: 'https://www.alfaplan.ru/upload/information_system_33/1/5/3/item_1534/information_items_property_182180.webp'
        },
      ],
      newAd: {
        title: '',
        description: '',
        image: ''
      },
      intervalId: null // идентификатор интервала
    };
  },
  methods: {
    addNewAd() {
      this.slides.push({
        title: this.newAd.title,
        description: this.newAd.description,
        image: this.newAd.image
      });
      localStorage.setItem('slides', JSON.stringify(this.slides)); // Сохранение в локальное хранилище
      // Очистка формы после добавления объявления
      this.newAd.title = '';
      this.newAd.description = '';
      this.newAd.image = '';
    },
    removeAd(index) {
      this.slides.splice(index, 1); // Удаление объявления из массива
      localStorage.setItem('slides', JSON.stringify(this.slides)); // Сохранение в локальное хранилище
    },
    nextSlide() {
      if (this.currentSlide < this.slides.length - 1) {
        this.currentSlide++;
      } else {
        this.currentSlide = 0;
      }
    },
    prevSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide--;
      } else {
        this.currentSlide = this.slides.length - 1;
      }
    },
    startAutoSlide() {
      this.intervalId = setInterval(() => {
        this.nextSlide();
      }, 3000);
    },
    stopAutoSlide() {
      clearInterval(this.intervalId);
    }
  },
  mounted() {
    this.startAutoSlide();
  },
  beforeDestroy() {
    clearInterval(this.intervalId);
  }
};
</script>

<style>
/* Стили формы */
.add-form {
  margin-top: 30px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

}

.form-title {
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
  text-align: center;
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}

.form-group {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-label {
  font-size: 16px;
  color: #555;
}

.form-input,
.form-textarea {
  width: 800px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  outline: none;
}

.form-textarea {
  resize: vertical;
}

.form-button {
  text-align: center;
  width: 800px;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.form-button:hover {
  background-color: #0056b3;
}

/* Стили слайдера */
.ads {
  padding-top: 50px;
  text-align: center;
}
.slider {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.slides {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.slide {
  flex-shrink: 0;
  width: 100%;
  height: 500px;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
}

.slide img {
  max-width: 100%;
  max-height: 100%;
  height: 300px;
  width: 300px;
  border-radius: 50%;
}

.slide-content {
  padding-top: 20px;
}

.slide h2 {
  font-size: 1.8em;
  margin-bottom: 10px;
}

.slide p {
  font-size: 1.2em;
  margin-bottom: 20px;
}

.arrow-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #fff;
  transition: background-color 0.3s ease, color 0.3s ease;
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  border-radius: 50%;
  padding: 10px;
  z-index: 1;
}

.arrow-button:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.arrow-button svg {
  width: 30px;
  height: 30px;
}

.arrow-button.left {
  left: 200px;
}

.arrow-button.right {
  right: 200px;
}

.indicators {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
}

.indicator {
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
  width: 12px;
  height: 12px;
  background-color: #fff;
  transition: background-color 0.3s ease;
}

.indicator.active {
  background-color: #000;
}
</style>
