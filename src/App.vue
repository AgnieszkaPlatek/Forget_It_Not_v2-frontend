<template>
  <AppHeader />
  <div class="content-section">
    <div class="mx-3 mx-md-5">
      <router-view />
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";

export default {
  name: "App",
  components: {
    AppHeader,
  },
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
}
</style>
