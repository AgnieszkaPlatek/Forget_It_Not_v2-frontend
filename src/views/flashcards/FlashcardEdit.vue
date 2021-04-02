<template>
  <section>
    <div>
      <form @submit.prevent="editFlashcard">
        <br />
        <h3 class="mt-5 text-center">Edit flashcard</h3>
        <label>Front:</label>
        <input
          type="front"
          :required="!new_back"
          v-model="new_front"
          :placeholder="front"
        />
        <label>Back:</label>
        <input
          type="back"
          :required="!new_front"
          v-model="new_back"
          :placeholder="back"
        />
        <div class="submit mt-5">
          <button class="btn btn-primary btn-block px-5" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
    <div class="text-center">
      <router-link
        :to="{
          name: 'FlashcardDetail',
          params: { id: id, s_id: s_id, cards: cards, one: one },
        }"
        class="btn btn-back btn-sm my-4 px-5"
        >Cancel</router-link
      >
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "FlashcardEdit",
  props: ["id", "s_id", "cards", "one"],
  data() {
    return {
      back: "",
      front: "",
      new_front: "",
      new_back: "",
    };
  },
  mounted() {
    axios
      .get("flashcards/" + this.id)
      .then(
        (response) => (
          (this.back = response.data["back"]),
          (this.front = response.data["front"])
        )
      )
      .catch((error) => console.log(error));
  },
  methods: {
    editFlashcard() {
      if (this.new_front) {
        this.front = this.new_front;
      }
      if (this.new_back) {
        this.back = this.new_back;
      }

      axios({
        method: "patch",
        url: "flashcards/" + this.id + "/",
        data: {
          front: this.front,
          back: this.back,
        },
      }).catch((error) => console.log(error));

      alert("Flashcard has been changed!");
      this.$router.push({
        name: "FlashcardList",
        params: {
          id: this.s_id,
        },
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
