<template>
  <section class="mt-4 ml-3">
    <div v-if="setname && !part" class="mb-4 pt-2 text-center">
      <h1 class="h2">
        Learn set <strong>{{ setname }}</strong>
      </h1>
    </div>
    <div v-else-if="part" class="mb-4 pt-2 text-center">
      <h1 class="h2">
        Learn part of set <strong>{{ setname }}</strong>
      </h1>
    </div>
    <div v-else-if="all" class="mb-4 pt-2 text-center">
      <h1 class="h2">Learning all flashcards</h1>
    </div>
    <div v-if="num_flashcards > 1" class="mb-3 pb-3 text-center">
      <h5>
        You have <strong>{{ num_flashcards }}</strong> flashcards to learn. Good
        luck!
      </h5>
    </div>
    <div v-if="setname && !part" class="mb-3 text-center">
      <router-link
        :to="{
          name: 'LearnSession',
          params: {
            cards: JSON.stringify(flashcards),
            setname: setname,
          },
        }"
        class="mb-3 py-2 btn btn-b mb-3 px-5"
      >
        START</router-link
      >
    </div>
    <div v-else-if="all" class="mb-3 text-center">
      <router-link
        :to="{
          name: 'LearnSession',
          params: {
            cards: JSON.stringify(flashcards),
            all: true,
          },
        }"
        class="mb-3 py-2 btn btn-b mb-3 px-5"
      >
        START</router-link
      >
    </div>
    <div v-else-if="part" class="mb-3 text-center">
      <router-link
        :to="{
          name: 'LearnSession',
          params: {
            cards: cards,
            setname: setname,
            part: true,
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
  props: ["all", "part", "set_id", "setname", "cards"],
  data() {
    return {
      flashcards: [],
      num_flashcards: 0,
    };
  },
  mounted() {
    if (this.setname && !this.part) {
      this.loadSet();
    } else if (this.all) {
      this.loadAll();
    }
    if (this.part) {
      this.num_flashcards = JSON.parse(this.cards).length;
    }
  },
  methods: {
    loadAll() {
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
    loadSet() {
      axios
        .get("flashcard-sets/" + this.set_id, {
          headers: {
            Authorization: "Token 4dcdca18cc571489b5840d2041ed8b36588e0e33",
          },
        })
        .then(
          (response) => (
            (this.flashcards = response.data["flashcards"]),
            (this.num_flashcards = response.data["num_flashcards"])
          )
        );
      console.log("Flashcards from set loaded");
    },
  },
};
</script>

<style>
</style>
