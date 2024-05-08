<template>
  <div class="profile-container">
    <div class="profile-card">
      <div class="profile-header">
        <div class="profile-avatar">
          <img :src="user.photo" alt="User photo">
        </div>
        <h2 class="profile-name">{{ user.firstName }} {{ user.lastName }}</h2>
        <p class="profile-role">{{ user.role }}</p>
      </div>
      <div class="profile-body">
        <div class="profile-info">
          <p><strong>Имя:</strong> {{ user.firstName }}</p>
          <p><strong>Фамилия:</strong> {{ user.lastName }}</p>
          <p><strong>Отчество:</strong> {{ user.middleName }}</p>
          <p><strong>Телефон:</strong> {{ user.phoneNumber }}</p>
        </div>
        <router-link to="/favorites" class="favorite-button">Избранное</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const user = ref({
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST91PHlPmNzZvst2rrEmr0AP4rCqwa2Hu1i3V9Z0nx7A&s',
      firstName: 'Максим',
      lastName: 'Максимов',
      middleName: 'Максимович',
      phoneNumber: '+1234567890',
      role: 'Администратор'
    });

    return { user };
  }
}
</script>

<style scoped>
.profile-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
}

.profile-card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 100%;
  max-width: 400px;
}

.profile-header {
  text-align: center;
  margin-bottom: 20px;
}

.profile-avatar {
  margin-bottom: 10px;
}

.profile-avatar img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 3px solid #ddd;
}

.profile-name {
  font-size: 24px;
  margin: 10px 0;
}

.profile-role {
  font-size: 16px;
  color: #666;
}

.profile-body {
  padding-top: 20px;
  border-top: 1px solid #ddd;
}

.profile-info p {
  margin: 10px 0;
  font-size: 16px;
  color: #333;
}

.profile-info p strong {
  font-weight: bold;
  color: #666;
}

.favorite-button {
  display: inline-block;
  background-color: #666666;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none; /* Убираем подчеркивание для ссылки */
  transition: background-color 0.3s ease; /* Добавляем плавный переход */
}

.favorite-button:hover {
  background-color: #ff6b6b;
}

.favorite-button:focus {
  outline: none; /* Убираем фокусировку при нажатии Tab */
}
</style>