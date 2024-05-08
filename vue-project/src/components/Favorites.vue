<template>
  <div class="favorites-page">
    <div class="favorites-container">
      <h1 class="favorites-header">Избранное</h1>
      <div class="favorites-list">
        <div v-if="favoriteAds.length === 0" class="no-favorites">Нет избранных объявлений</div>
        <div v-for="(ad, index) in favoriteAds" :key="index" class="favorite-item">
          <div class="favorite-item-content">
            <!-- Здесь должна быть информация об объявлении -->
            <p>{{ ad }}</p>
          </div>
          <div class="favorite-item-actions">
            <button @click="removeFromFavorites(index)">Удалить из избранного</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      favoriteAds: [] // Список избранных объявлений
    };
  },
  methods: {
    addToFavorites(ad) {
      this.favoriteAds.push(ad);
    },
    removeFromFavorites(index) {
      this.favoriteAds.splice(index, 1);
    }
  }
};
</script>

<style scoped>
.favorites-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
}

.favorites-container {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 100%;
  max-width: 600px;
}

.favorites-header {
  font-size: 28px;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
}

.favorites-list {
  list-style-type: none;
  padding: 0;
}

.favorite-item {
  margin-bottom: 15px;
  padding: 15px;
  background-color: #f9f9f9;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.favorite-item-content {
  flex-grow: 1;
}

.favorite-item-actions {
  margin-left: 15px;
}

.favorite-item-actions button {
  background-color: #ff4d4d;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

.favorite-item-actions button:hover {
  background-color: #ff2d2d;
}

.no-favorites {
  color: #666;
  font-style: italic;
  text-align: center;
  padding: 20px;
  border: 1px dashed #ddd;
  border-radius: 5px;
}
</style>