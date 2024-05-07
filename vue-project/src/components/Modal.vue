<template>
  <div class="modal">
    <div class="modal-content">
      <span class="close" @click="close">&times;</span>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
function $emit(close1) {
  
}

// Удаляем import { emit } from "vue";
const close = () => {
  // Используем $emit для вызова события close
  $emit('close');
};
</script>

<style scoped>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 90%;
  margin: 20px;
  position: relative;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  color: #aaa;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
