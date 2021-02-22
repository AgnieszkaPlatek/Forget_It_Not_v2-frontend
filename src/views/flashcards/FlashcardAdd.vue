<template>
  <section>
    <h2 class="text-center mt-3">Add flashcard</h2>
    <form @submit="addFlashcard">
      <label>Front:</label>
      <input type="front" required v-model="front" />
      <label>Back:</label>
      <input type="back" required v-model="back" />
      <div class="submit mt-5">
        <button class="btn btn-primary btn-block px-5" type="submit">
          Add
        </button>
      </div>
    </form>

    <!-- <fieldset class="form-group mt-2">
        <legend class="border-bottom mb-4">Add flashcard</legend>
      </fieldset>
      <div class="row mb-4 mt-4 ml-1">
        <button class="btn btn-square btn-primary px-5" type="submit">
          Add
        </button> -->
    <div class="text-center">
      <router-link
        :to="{ name: 'SetList' }"
        class="btn btn-back btn-sm my-3 px-5"
        role="button"
        >Cancel</router-link
      >
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "FlashcardAdd",
  data() {
    return {
      front: "",
      back: "",
    };
  },
  methods: {
    addFlashcard() {
      axios({
        method: "post",
        url: "http://localhost:8000/flashcards/",
        data: {
          flashcard_set: 4,
          front: this.front,
          back: this.back,
        },
        headers: {
          "Content-Type": "application/json",
          Authorization: "Token 4dcdca18cc571489b5840d2041ed8b36588e0e33",
        },
      }).catch((err) => {
        console.log("error in request", err);
      });
    },
  },
};
</script>

<style scoped>
form {
  max-width: 500px;
  margin: auto;
  background: white;
  text-align: left;
  padding: 20px;
  border-radius: 10px;
}
label {
  color: #555;
  display: inline-block;
  font-size: 1.3em;
  margin: 20px 0 15px;
  font-weight: bold;
}
input {
  display: block;
  padding: 10px 6px;
  width: 100%;
  border: none;
  border-bottom: 2px solid #ddd;
  color: #555;
  background-color: #ffffff;
}
</style>
