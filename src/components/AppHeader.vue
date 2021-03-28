<template>
  <header class="site-header">
    <nav class="navbar navbar-expand-lg navbar-dark bg-darkblue fixed-top">
      <div class="container-fluid mx-md-3">
        <span class="navbar-brand" id="logo" @click="logoRedirect">
          <img src="@/assets/logo.png" alt="Logo" />
        </span>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggle"
          aria-controls="mainmenu"
          aria-expanded="false"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarToggle">
          <div v-if="authenticated" class="navbar-nav mr-auto">
            <router-link :to="{ name: 'SetList' }" class="nav-item nav-link"
              >Your Flashcard Sets</router-link
            >
            <router-link
              :to="{ name: 'LearnList' }"
              class="nav-item nav-link"
              href=""
              >Learn</router-link
            >
          </div>
          <div class="dropdown-divider"></div>
          <!-- Navbar Right Side -->
          <div v-if="authenticated" class="navbar-nav">
            <img class="rounded-circle nav-img" src="@/assets/default.jpg" />
            <router-link
              :to="{ name: 'UserProfile' }"
              class="nav-item nav-link"
              href=""
              >{{ username }}</router-link
            >
            <router-link
              :to="{ name: 'UserLogout' }"
              @click="logout"
              class="nav-item nav-link"
              >Log out</router-link
            >
          </div>
          <!-- {% else %} -->
          <div v-else class="navbar-nav ml-auto">
            <router-link
              :to="{ name: 'UserLogin' }"
              class="nav-item nav-link mr-4"
              href=""
              >Log in</router-link
            >
            <router-link
              :to="{ name: 'UserRegister' }"
              class="nav-item nav-link mr-5"
              href=""
              >Register</router-link
            >
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Nav",
  computed: {
    authenticated() {
      return this.$store.state.isAuthenticated;
    },
    username() {
      return this.$store.state.authUser;
    },
  },
  methods: {
    logout() {
      this.$store.commit("removeToken");
    },
    logoRedirect() {
      if (this.authenticated) {
        console.log("authenticated");
        this.$router.push({ name: "Home" });
      } else {
        this.$router.push({ name: "Welcome" });
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg-darkblue {
  background-color: #2c3779;
  padding-top: 10px;
  padding-bottom: 10px;
}
.site-header .navbar-nav .nav-link {
  color: #cbd5db;
  padding-left: 30px;
  font-size: 1.5rem;
}

.site-header .navbar-nav .nav-link:hover {
  color: #ffffff;
  font-weight: bold;
}

.site-header .navbar-nav .nav-link.active {
  font-weight: bold;
}

.nav-img {
  height: 60px;
  width: 60px;
  margin-right: 0;
  margin-bottom: 5px;
}

header img {
  display: block;
  margin: 0 auto 0 auto;
}

.navbar-brand img {
  height: 50px;
}

@media (max-width: 991px) {
  .nav-img {
    display: none;
  }
}

@media (max-width: 575px) {
  .navbar-brand img {
    height: 40px;
  }
}

.dropdown-menu {
  background-color: #ffffff;
  color: #000000 !important;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
  margin-top: 0px !important;
  width: 100% !important;
}

.dropdown-item {
  color: #000000 !important;
}

.dropdown-item:hover {
  background-color: #cccccc;
  color: #000000 !important;
}
#logo {
  cursor: pointer;
}
</style>
