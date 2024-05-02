<template>
  <div class="slider" @mouseenter="stopAutoSlide" @mouseleave="startAutoSlide">
    <div class="slides" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
      <div v-for="(slide, index) in slides" :key="index" class="slide">
        <img :src="slide.image" alt="Slide" />
        <h2>{{ slide.title }}</h2>
        <p>{{ slide.description }}</p>
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
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 0,
      slides: [
        {

          description: 'Описание для слайда 1',
          image: 'https://ropshada.ru/wp-content/uploads/2021/06/image-41-1.png'
        },
        {

          description: 'Описание для слайда 2',
          image: 'https://cdn.riastatic.com/photosnewr/ria/news_common/luchshee-vremya-dlya-prodazhi-doma__173040-620x0.jpg'
        },
        {

          description: 'Описание для слайда 3',
          image: 'https://images.cdn-cian.ru/images/dom-fominskoe-2-ya-fominskaya-ulica-2159612051-4.jpg'
        },
        {

          description: 'Описание для слайда 4',
          image: 'https://img.dmclk.ru/c960x640q80/vitrina/owner/69/20/6920a60635db47b8b24d5b6a2763b702.jpg'
        },
        {

          description: 'Описание для слайда 5',
          image: 'https://www.alfaplan.ru/upload/information_system_33/1/5/3/item_1534/information_items_property_182180.webp'
        },
      ],
      intervalId: null // идентификатор интервала
    };
  },
  methods: {
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
  height: 700px;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #e80000;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

.slide img {
  max-width: 100%;
  max-height: 100%;
  height: 400px;
  width: 400px;
}

.slide h2 {
  font-size: 2em;
  margin-bottom: 10px;
}

.slide p {
  font-size: 1.2em;
}

.arrow-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #e80000;
  transition: color 0.3s ease;
  background-color: transparent;
  border: 2px solid black;
  border-radius: 50%;
  padding: 10px;
}

.arrow-button:hover {
  background-color: palevioletred;
  color: white;
}

.arrow-button svg {
  width: 40px;
  height: 40px;
}

.arrow-button.left {
  left: 100px;
}

.arrow-button.right {
  right: 100px;
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
  background-color: #ccc;
  transition: background-color 0.3s ease;
}

.indicator.active {
  background-color: black;
}
</style>
