<template>
  <section class="mt-4">
    <div class="text-center">
      <h1 class="h2 mb-3">
        Hello <b>{{ username }}</b
        >!
      </h1>
    </div>
    <div class="text-center">
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
    </div>
    <div class="row col-12 mt-5">
      <div class="offset-lg-3"></div>
      <SearchBar class="col-lg-6" />
    </div>
    <div v-if="search_results">
      <FlashcardTable :flashcards="flashcards" />
    </div>
  </section>
  <br />
</template>
  
<script>
import axios from "axios";
import FlashcardTable from "@/components/FlashcardTable.vue";
import SearchBar from "@/components/SearchBar.vue";
export default {
  name: "AppHome",
  components: { SearchBar, FlashcardTable },
  props: [],
  data() {
    return {
      username: "",
      num_sets: 0,
      num_flashcards: 0,
      search_results: "",
      query: "",
    };
  },
  methods: {
    searchFlashcvard() {
      axios
        .get("flashcards/", {
          headers: {
            Authorization: "Token 4dcdca18cc571489b5840d2041ed8b36588e0e33",
          },
        })
        .then(
          (response) => (
            (this.flashcards = response.data),
            (this.num_flashcards = response.data.length)
          )
        );
      console.log("All flashcards loaded");
    },
  },
  mounted() {
    axios
      .get("auth/users/me/", {
        headers: {
          Authorization: "Token 4dcdca18cc571489b5840d2041ed8b36588e0e33",
        },
      })
      .then(
        (response) => (
          (this.username = response.data["username"]),
          (this.num_sets = response.data["num_sets"])(
            (this.num_flashcards = response.data["num_flashcards"])
          )
        )
      )
      .catch((error) => console.log(error));
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
