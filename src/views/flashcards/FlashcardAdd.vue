<template>
  <section>
    <div v-if="!added">
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
    </div>
    <div v-if="added" id="after" class="text-center my-3">
      <h4 class="alert">Flashcard has been added!</h4>
      <button
        @click="addAnother"
        type="submit"
        class="btn btn-primary btn-block mt-3 px-5"
      >
        Add another
      </button>
    </div>
    <div class="text-center">
      <router-link
        :to="{ name: 'FlashcardList', params: { id: id } }"
        class="btn btn-back btn-sm my-2 px-5"
        role="button"
        >Back</router-link
      >
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "FlashcardAdd",
  props: ["id"],
  data() {
    return {
      front: "",
      back: "",
      added: false,
    };
  },
  methods: {
    addFlashcard() {
      axios({
        method: "post",
        url: "flashcards/",
        data: {
          flashcard_set: this.id,
          front: this.front,
          back: this.back,
        },
      }).catch((err) => {
        console.log("error in request", err);
      });
      this.added = true;
      this.front = "";
      this.back = "";
    },
    addAnother() {
      this.added = false;
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
  border-radius: 15px;
}
label {
  color: #555;
  display: inline-block;
  font-size: 1.1em;
  margin: 25px 0 5px;
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
