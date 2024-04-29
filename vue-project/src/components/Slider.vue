<template>
  <div class="slider" @mouseenter="stopAutoSlide" @mouseleave="startAutoSlide">
    <div class="slides" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
      <div v-for="(slide, index) in slides" :key="index" class="slide">
        <img :src="slide.image" alt="Slide" />
        <h2>{{ slide.title }}</h2>
        <p>{{ slide.description }}</p>
      </div>
    </div>
    <button @click="prevSlide" class="arrow-button">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#e30000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left">
        <polyline points="15 18 9 12 15 6"></polyline>
      </svg>
    </button> <!-- Стрелка влево -->
    <button @click="nextSlide" class="arrow-button">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#e30000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right">
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    </button> <!-- Стрелка вправо -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 0,
      slides: [
        {
          title: 'Слайд 1',
          description: 'Описание для слайда 1',
          image: 'https://img.freepik.com/free-photo/the-adorable-illustration-of-kittens-playing-in-the-forest-generative-ai_260559-483.jpg?size=338&ext=jpg&ga=GA1.1.1413502914.1713657600&semt=ais'
        },
        {
          title: 'Слайд 2',
          description: 'Описание для слайда 2',
          image: 'https://img.freepik.com/free-photo/the-adorable-illustration-of-kittens-playing-in-the-forest-generative-ai_260559-483.jpg?size=338&ext=jpg&ga=GA1.1.1413502914.1713657600&semt=ais'
        },
        {
          title: 'Слайд 3',
          description: 'Описание для слайда 3',
          image: 'https://preview.colorlib.com/theme/estate/img/developments/5.jpg'
        },
        {
          title: 'Слайд 4',
          description: 'Описание для слайда 4',
          image: 'https://preview.colorlib.com/theme/estate/img/developments/5.jpg'
        },
        {
          title: 'Слайд 5',
          description: 'Описание для слайда 5',
          image: 'https://preview.colorlib.com/theme/estate/img/developments/5.jpg'
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
  transition: transform 0.5s ease;
}

.slide {
  flex-shrink: 0;
  width: 100%;
  height: 700px; /* Увеличим высоту слайда */
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
}

.slide img {
  max-width: 100%;
  max-height: 100%; /* Добавим максимальную высоту */
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
  background: transparent;
  border: none;
  cursor: pointer;
}

.arrow-button svg {
  width: 40px; /* Установите желаемый размер для иконки */
  height: 40px;
}

.arrow-button:first-of-type {
  left: 200px;
}

.arrow-button:last-of-type {
  right: 200px;
}
</style>
