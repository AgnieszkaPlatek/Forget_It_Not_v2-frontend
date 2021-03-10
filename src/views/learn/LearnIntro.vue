<template>
  <section class="mt-4 ml-3">
    <!-- <div v-if="setname && !part" class="mb-4 pt-2">
      <h1 class="h2">
        Learn<strong>{{ setname }}</strong>
      </h1>
    </div>
    <div v-else-if="setname && part" class="mb-4 pt-2">
      <h1 class="h2">
        Learn part of<strong>{{ setname }}</strong>
      </h1>
    </div> -->
    <div class="mb-4 pt-2 text-center">
      <h1 class="h2">Learning all flashcards</h1>
    </div>

    <div v-if="num_flashcards > 1" class="mb-3 pb-3 text-center">
      <h5>
        You have <strong>{{ num_flashcards }}</strong> flashcards to learn. Good
        luck!
      </h5>
    </div>
    >
    <div class="mb-3 text-center">
      <router-link
        :to="{
          name: 'LearnSession',
          params: {
            cards: JSON.stringify(flashcards),
          },
        }"
        class="mb-3 py-2 btn btn-b mb-3 px-5"
      >
        START</router-link
      >
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "LearnIntro",
  // props: ["all", "part", "set_id", "setname"],
  props: ["all"],
  data() {
    return {
      setname: null,
      part: false,
      flashcards: null,
    };
  },
  mounted() {
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
    console.log("Flashcards mounted");
  },
};
</script>

<style>
</style>
