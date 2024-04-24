<template>
  <header>
    <nav>
      <div class="logo">
        <a href="/">Домовой</a>
      </div>
      <div class="center-nav">
        <ul>
          <li><a href=""><router-link to="/">Главная</router-link></a></li>
          <li><a href="#"><router-link to="/">О нас</router-link></a></li>
          <li><a href="#"><router-link to="/">Контакты</router-link></a></li>
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
export default {
  name: 'Header',
  data() {
    return {
      isLoggedIn: false,
      hasLocalStorageUser: false,
    };
  },
  mounted() {
    this.checkAuthentication();
  },
  methods: {
    checkAuthentication() {
      const user = JSON.parse(localStorage.getItem('user'));
      this.hasLocalStorageUser = !!user;
      this.isLoggedIn = this.hasLocalStorageUser; // или дополнительная проверка на сервере, если у вас таковая
    },
    logout() {
      localStorage.removeItem('user');
      this.isLoggedIn = false;
      this.$router.push('/');
    },
  },
};
</script>

<style>
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
nav ul li button:hover {
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

</style>