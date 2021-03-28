<template>
  <AppHeader :username="username" />
  <!-- <main role="main" class="container">
    <div class="col-xl-11">
      <div class="content-section">
        <div class="mx-3 mx-md-5">
          <router-view />
          <br class="mb-4" />
          <NavArrows />
        </div>
      </div>
    </div>
  </main> -->
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
// import NavArrows from "./components/NavArrows.vue";
export default {
  name: "App",
  components: {
    AppHeader,
    // NavArrows,
  },
  data() {
    return {
      username: "",
    };
  },
  // mounted() {
  //   console.log(this.$store.state);
  // },
};
</script>

<style>
#app {
  background: #cccccc;
  background-image: url(./assets/textured_paper.jpg); /* Background pattern from Toptal Subtle Patterns */
  background-position: top left;
  background-repeat: repeat;
  margin-top: 5rem;
  font-family: "Source Sans Pro", sans-serif;
  padding-bottom: 1000px;
}
router-link {
  cursor: pointer;
  text-decoration: none;
}
</style>
