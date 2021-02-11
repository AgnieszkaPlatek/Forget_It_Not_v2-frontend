<template>
  <section class="ml-5 mt-5 mb-3">
    <h1 class="h2 mb-3">
      Hello <b>{{ username }}</b
      >!
    </h1>
    <span v-if="num_sets === 1" class="h5">You have <b>1</b> set</span
    ><span v-else class="h5"
      >You have <b>{{ num_sets }}</b> sets</span
    >
    <span v-if="num_flashcards === 1" class="h5">
      and <b>1</b> flashcard. Keep it up!</span
    >
    <span v-else class="h5">
      and <b>{{ num_flashcards }}</b> flashcards. Keep it up!</span
    >
  </section>
</template>
  
<script>
export default {
  name: "AppHome",
  components: {},
  props: [],
  data() {
    return {
      username: "Aga",
      num_sets: 3,
      num_flashcards: 50,
    };
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
