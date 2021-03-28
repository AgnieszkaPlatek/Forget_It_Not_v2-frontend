<template>
  <section class="mt-4 mx-1">
    <div class="warning">
      <h1 class="h3">
        Are you sure you want to delete your set <b>{{ setname }}</b
        >?
      </h1>
      <h2 class="h5">You will permanently loose all your flashcards!</h2>
    </div>
    <a
      href="/sets"
      @click="setDelete"
      class="btn btn-delete px-5"
      type="submit"
    >
      Yes, Delete
    </a>
    <router-link
      :to="{ name: 'SetList' }"
      class="btn btn-back ml-3"
      role="button"
      aria-pressed="true"
    >
      Cancel</router-link
    >
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "SetDelete",
  props: ["id", "setname"],
  data() {
    return {};
  },
  methods: {
    setDelete() {
      axios({
        method: "delete",
        url: "flashcard-sets/" + this.id,
      }).catch((err) => {
        console.log("error in request", err);
      });
    },
  },
};
</script>

<style scoped>
</style>
