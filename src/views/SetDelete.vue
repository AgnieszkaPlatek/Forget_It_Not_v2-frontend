<template>
  <section class="mt-4 mx-1">
    <div id="warning">
      <h1 class="h3">
        Are you sure you want to delete your set <b>{{ setname }}</b
        >?
      </h1>
      <h2 class="h5">You will permanently loose all your flashcards!</h2>
    </div>
    <button @click="setDelete" class="btn btn-delete px-5" type="submit">
      Yes, Delete
    </button>
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
        url: "http://localhost:8000/flashcard-sets/" + this.id,
        headers: {
          Authorization: "Token 4dcdca18cc571489b5840d2041ed8b36588e0e33",
        },
      }).catch((err) => {
        console.log("error in request", err);
      });
      this.$router.push({ name: "SetList" });
    },
  },
};
</script>

<style scoped>
#warning {
  background-color: #f8bdb1;
  max-width: 700px;
  padding: 20px 20px 20px 20px;
  margin-bottom: 20px;
  border-radius: 10px;
}
</style>
