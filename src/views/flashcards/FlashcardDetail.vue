<template>
  <section class="mt-4 my-3">
    <div class="mb-5 text-center">
      <h1 class="h2">{{ setname }}</h1>
      <h5>by {{ username }}</h5>
      <small class="text-muted">added on {{ flashcard.added }}</small>
    </div>
    <div @click="changeText" class="text-center">
      <img class="mr-5" src="@/assets/arrow.png" alt="arrow" />
      <flashcard-card :cardtext="cardtext" />
    </div>
    <div class="fluid container col-md-8 mt-5">
      <div v-if="previous_index != null && next_index" class="row">
        <button
          @click="loadFlashcard(previous_index)"
          class="btn btn-previous col-6 offset-md-2 col-md-4 d-inline-block"
        >
          Previous
        </button>
        <button
          @click="loadFlashcard(next_index)"
          class="btn btn-next col-6 col-md-4 d-inline-block"
        >
          Next
        </button>
      </div>
      <div v-if="previous_index != null && !next_index" class="row">
        <button
          @click="loadFlashcard(previous_index)"
          class="btn btn-previous offset-md-2 col-md-8 d-inline-block"
        >
          Previous
        </button>
      </div>
      <div v-if="previous_index == null && next_index" class="row">
        <button
          @click="loadFlashcard(next_index)"
          class="btn btn-next offset-md-2 col-md-8 d-inline-block"
          role="button"
          aria-pressed="true"
        >
          Next
        </button>
      </div>
    </div>
    <div class="container mt-4 ml-3">
      <div class="row mb-3"></div>
      <div class="fluid-container mt-5">
        <div class="mb-3 text-center">
          <router-link
            :to="{ name: 'FlashcardAdd' }"
            class="btn btn-primary mb-2 px-5 py-3"
            >ADD FLASHCARD</router-link
          >
        </div>
      </div>
      <div class="text-center">
        <div class="btn-group">
          <a
            href=""
            class="btn btn-update btn-sm px-5"
            role="button"
            aria-pressed="true"
            >Edit</a
          >
          <router-link
            @click="deleteFlashcard"
            :to="{ name: 'FlashcardList', params: { id: id } }"
            class="btn btn-delete btn-sm ml-1 px-5"
            >Delete</router-link
          >
          <router-link
            :to="{ name: 'FlashcardList', params: { id: id } }"
            class="btn btn-back btn-sm px-5 ml-1"
            >Back</router-link
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import FlashcardCard from "@/components/FlashcardCard.vue";
export default {
  name: "FlashcardDetail",
  components: {
    FlashcardCard,
  },
  props: ["id", "f_id", "cards"],
  data() {
    return {
      setname: "",
      username: "",
      flashcards: [],
      flashcard: "",
      authenticated: true,
      next_index: null,
      previous_index: null,
      cardtext: "",
      showbackfirst: true,
      index: "",
    };
  },
  mounted() {
    this.flashcards = JSON.parse(this.cards);
    this.username = this.flashcards[0]["owner_name"];
    this.setname = this.flashcards[0]["set_name"];
    this.index = this.flashcards.findIndex(
      (flashcard) => flashcard.id == this.f_id
    );
    this.loadFlashcard(this.index);
  },
  methods: {
    loadFlashcard(index) {
      this.flashcard = this.flashcards[index];
      this.index = index;
      // Letting the user to decide if he wants to see back or front of the flashcard first
      if (this.showbackfirst == true) {
        this.cardtext = this.flashcard.back;
      } else {
        this.cardtext = this.flashcard.front;
      }
      // Calculating indexes of previous and next flashcard
      if (index < this.flashcards.length - 1) {
        this.next_index = index + 1;
      } else {
        this.next_index = null;
      }
      if (index > 0) {
        this.previous_index = index - 1;
      } else {
        this.previous_index = null;
      }
      console.log(this.index);
    },
    changeText() {
      if (this.cardtext == this.flashcard.back) {
        this.cardtext = this.flashcard.front;
        this.showbackfirst = false;
        console.log("cardtext: ", this.flashcard.front);
      } else {
        this.cardtext = this.flashcard.back;
        this.showbackfirst = true;
        console.log("cardtext: ", this.flashcard.back);
      }
    },
    deleteFlashcard() {
      axios({
        method: "delete",
        url: "flashcards/" + this.flashcard.id,
        headers: {
          Authorization: "Token 4dcdca18cc571489b5840d2041ed8b36588e0e33",
        },
      }).catch((err) => {
        console.log("error in request", err);
      });
      alert("Flashcard has been deleted!");
    },
    editFlashcard() {},
  },
};
</script>

<style scoped>
.btn-add {
  background: #2337af;
  color: #ffffff;
}

.btn-add:hover {
  background: #2c3779;
  color: #ffffff;
}
.btn-next {
  background: #dddddd;
  color: #000000;
  max-width: 300px;
  border-radius: 0px;
}

.btn-previous {
  background: #eeeeee;
  color: #000000;
  max-width: 300px;
  border-radius: 0px;
}

.btn-next:hover,
.btn-previous:hover {
  background: #bbbbbb;
  color: #000000;
}
</style>
