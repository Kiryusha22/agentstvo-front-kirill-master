<script>
import {RouterView} from "vue-router";
import Header from './components/Header.vue';

export default {
  components: {
    Header,
    RouterView
  },
};
</script>

<template>
  <div id="app">
    <Header />
    <RouterView />
  </div>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}
:root {
  --persik: #ff6b6b;
}
::-webkit-scrollbar {
  position: absolute;
  left: 0;
  width: 4px;
}

*, :after, :before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: black;

  border: none;
  outline: none;
  text-decoration: none;
  list-style: none;
}

body {
  max-width: 1440px;
  min-width: 100%;
  margin: 0 auto;
  background: white;
}

.container {
  width: 100%;
}
</style>
