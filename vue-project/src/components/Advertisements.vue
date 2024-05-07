<template>
  <div class="container">
    <div class="cards-container">
      <div v-for="advertisement in filteredAdvertisements" :key="advertisement.id" class="advertisement">
        <h2>{{ advertisement.title }}</h2>
        <img :src="advertisement.photos" alt="Фотография недвижимости" class="photo">
        <p>{{ advertisement.description }}</p>
        <p class="price">Цена: {{ advertisement.price }}</p>
        <p class="location">Расположение: {{ advertisement.location }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    advertisements: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      searchQuery: ''
    };
  },
  computed: {
    filteredAdvertisements() {
      return this.advertisements.filter(advertisement => {
        return advertisement.title.toLowerCase().includes(this.searchQuery.toLowerCase());
      });
    }
  }
};
</script>

<style scoped>
.advertisement {
  padding: 10px;
  margin: 10px;
  max-width: 1440px;
}

.advertisement h2 {
  font-size: 20px;
  margin-bottom: 5px;
}

.advertisement .photo {
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
}

.advertisement p {
  margin-bottom: 5px;
}

.advertisement .price {
  font-weight: bold;
  color: #007bff;
}

.advertisement .location {
  font-style: italic;
  color: #666;
}
</style>
