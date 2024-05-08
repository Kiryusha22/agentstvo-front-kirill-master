<template>
  <div>
    <Profile :user="currentUser" />
  </div>
</template>

<script setup>
import Profile from './Profile.vue';

const currentUser = {
  photo: 'https://randomuser.me/api/portraits/women/2.jpg',
  firstName: 'Alice',
  lastName: 'Smith',
  middleName: 'Jane',
  phoneNumber: '+9876543210'
};
</script>

<style scoped>
/* стили */
</style>
