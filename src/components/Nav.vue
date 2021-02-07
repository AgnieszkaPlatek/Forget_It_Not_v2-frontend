<template>
  <header class="site-header">
    <nav class="navbar navbar-expand-lg navbar-dark bg-darkblue fixed-top">
      <div class="container">
        <a class="navbar-brand" href="">
          <img src="assets / logo.png" alt="Logo" />
        </a>
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
            <a class="nav-item nav-link" href="">Your Flashcard Sets</a>
            <a class="nav-item nav-link" href="">Learn</a>
          </div>
          <div class="dropdown-divider"></div>
          <!-- Navbar Right Side -->
          <div v-if="authenticated" class="navbar-nav">
            <img class="rounded-circle nav-img" src="default.jpg" />
            <a class="nav-item nav-link" href="">user</a>
            <a class="nav-item nav-link" href="">Log out</a>
          </div>
          <!-- {% else %} -->
          <div v-else class="navbar-nav">
            <a class="nav-item nav-link" href="">Log in</a>
            <a class="nav-item nav-link" href="">Register</a>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      authenticated: true,
    };
  },
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg-darkblue {
  background-color: #2c3779;
  padding-top: 10px;
  padding-bottom: 10px;
}
.bg-darkblue {
  background-color: #2c3779;
  padding-top: 10px;
  padding-bottom: 10px;
}
.site-header .navbar-nav .nav-link {
  color: #cbd5db;
  padding-left: 30px;
  font-size: 1.3rem;
}
</style>
