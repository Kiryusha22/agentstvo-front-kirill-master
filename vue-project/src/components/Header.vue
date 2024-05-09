<template>
  <header :class="{ 'header-fixed': isHeaderFixed }">
    <nav>
      <div class="logo">
        <a href="/">Домовой</a>
      </div>
      <div class="center-nav">
        <ul>
          <li><router-link to="/">Главная</router-link></li>
          <li><router-link to="/real-estate">Недвижимость</router-link></li>
          <router-link class="profile" to="/profile">Личный профиль</router-link>
        </ul>
      </div>
      <div class="auth-reg">
        <router-link class="vhod" to="/login">Вход</router-link>
        <router-link to="/register">Регистрация</router-link>
      </div>
    </nav>
  </header>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'Header',
  setup() {
    const isHeaderFixed = ref(false);

    const checkAuthentication = () => {
      const user = JSON.parse(localStorage.getItem('user'));
      return !!user;
    };

    const logout = () => {
      localStorage.removeItem('user');
      this.$router.push('/');
    };

    const handleScroll = () => {
      isHeaderFixed.value = window.scrollY > 0;
    };

    window.addEventListener('scroll', handleScroll);

    return {
      isHeaderFixed,
      checkAuthentication,
      logout,
    };
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style>
.header-fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  animation: slideDown 0.3s ease;
}

@keyframes slideDown {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
}
header {
  background-color: #333;
  color: #fff;
  padding: 20px 0;
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 20px;
}


.logo {
  font-size: 1.5em;
}

.logo a {
  color: #ff6b6b;
}


.center-nav ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.center-nav li {
  margin: 0 10px;
}

.center-nav a {
  color: #fff;
  text-decoration: none;
}


.auth-reg{
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.auth-reg a {
  color: #fff;
  text-decoration: none;
}


router-link {
  color: #fff;
  text-decoration: none;

}

nav ul li a:hover,
nav ul :hover {
  color: #ff6b6b;
}

nav ul li a,
nav ul li button {
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
  border: none;
  background: none;
  cursor: pointer;
}

@media (max-width: 600px) {
  nav {
    flex-direction: column;
  }

  .center-nav ul,
  .auth-reg ul {
    margin-top: 10px;
  }
}

.auth-reg  {
  color: white;
  display: flex;

}

.vhod {
  padding-right: 20px;
}
.auth-reg:hover {
  color: #ff6b6b;
}
.user {
  padding-left: 10px;
}

</style>