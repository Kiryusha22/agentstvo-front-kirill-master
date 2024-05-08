<template>
  <div>
    <button @click="toggleUserList">Online Users</button>
    <div v-if="showUserList" id="userList">
      <ul>
        <li v-for="user in onlineUsers" :key="user.id">{{ user.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const showUserList = ref(false);
const onlineUsers = ref([]);

const toggleUserList = () => {
  showUserList.value = !showUserList.value;
};

// Генерация случайных пользователей
const names = ['Alice', 'Bob', 'Charlie', 'David', 'Emma'];
for (let i = 0; i < 5; i++) {
  onlineUsers.value.push({ id: i, name: names[Math.floor(Math.random() * names.length)] });
}
</script>