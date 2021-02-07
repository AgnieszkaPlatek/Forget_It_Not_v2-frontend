<template>
  <Nav />
</template>

<script>
import Nav from "./components/Nav.vue";

export default {
  name: "App",
  components: {
    Nav,
  },
};
</script>

<style>
#app {
  background: #cccccc;
  background-image: "textured_paper.jpg"; /* Background pattern from Toptal Subtle Patterns */
  background-position: top left;
  background-repeat: repeat;
  margin-top: 5rem;
  font-family: "Source Sans Pro", sans-serif;
}
</style>
