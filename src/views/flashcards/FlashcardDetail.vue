<template>
  <section class="mt-4 my-3">
    <div class="mb-5 text-center">
      <h1 class="h2">{{ setname }}</h1>
      <h5>by {{ username }}</h5>
      <small class="text-muted">added on {{ added }}</small>
    </div>
    <div @click="changeText" class="text-center">
      <img class="mr-5" src="@/assets/arrow.png" alt="arrow" />
      <flashcard-card :cardtext="cardtext" />
    </div>
    <div class="fluid container col-md-8 mt-4">
      <div v-if="previous_id && next_id" class="row">
        <router-link
          :to="{ name: 'FlashcardDetail', params: { id: previous_id } }"
          @click="loadFlashcard"
          class="btn btn-previous col-6 offset-md-2 col-md-4 d-inline-block"
          >Previous</router-link
        >
        <router-link
          :to="{ name: 'FlashcardDetail', params: { id: next_id } }"
          @click="loadFlashcard"
          class="btn btn-next col-6 col-md-4 d-inline-block"
          >Next</router-link
        >
      </div>
      <div v-if="previous_id && !next_id" class="row">
        <router-link
          :to="{ name: 'FlashcardDetail', params: { id: previous_id } }"
          @click="loadFlashcard"
          class="btn btn-previous offset-md-2 col-md-8 d-inline-block"
          >Previous</router-link
        >
      </div>
      <div v-if="!previous_id && next_id" class="row">
        <router-link
          :to="{ name: 'FlashcardDetail', params: { id: next_id } }"
          @click="loadFlashcard"
          class="btn btn-next offset-md-2 col-md-8 d-inline-block"
          role="button"
          aria-pressed="true"
          >Next</router-link
        >
      </div>
    </div>
    <div class="container mt-5 ml-3">
      <div class="row mb-3"></div>
      <div class="fluid-container mt-5">
        <div class="mb-3 text-center">
          <router-link
            :to="{ name: 'FlashcardAdd' }"
            class="btn btn-primary mb-3 px-5 py-3"
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
            :to="{ name: 'FlashcardList', params: { id: set_id } }"
            class="btn btn-delete btn-sm ml-2 px-5"
            >Delete</router-link
          >
          <router-link
            :to="{ name: 'FlashcardList', params: { id: set_id } }"
            class="btn btn-back btn-sm px-5 mx-3"
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
  props: ["id"],
  data() {
    return {
      added: "", //20 January, 2021
      front: "",
      back: "",
      setname: "",
      set_id: 0,
      username: "",
      authenticated: true,
      next_id: null,
      previous_id: null,
      cardtext: "",
    };
  },
  mounted() {
    this.loadFlashcard();
  },
  methods: {
    loadFlashcard() {
      axios
        .get("flashcards/" + this.id, {
          headers: {
            Authorization: "Token 4dcdca18cc571489b5840d2041ed8b36588e0e33",
          },
        })
        .then(
          (response) => (
            (this.front = response.data["front"]),
            (this.back = response.data["back"]),
            (this.cardtext = this.front),
            (this.username = response.data["owner_name"]),
            (this.added = response.data["added"]),
            (this.set_id = response.data["flashcard_set"]),
            (this.setname = response.data["set_name"]),
            (this.next_id = response.data["next_id"]),
            (this.previous_id = response.data["previous_id"])
          )
        )
        .catch((error) => console.log(error));
    },
    changeText() {
      if (this.cardtext == this.back) {
        this.cardtext = this.front;
        console.log("cardtext: ", this.front);
      } else {
        this.cardtext = this.back;
        console.log("cardtext: ", this.back);
      }
    },
    deleteFlashcard() {
      axios({
        method: "delete",
        url: "http://localhost:8000/flashcards/" + this.id,
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
}

.btn-previous {
  background: #eeeeee;
  color: #000000;
  max-width: 300px;
}

.btn-next:hover,
.btn-previous:hover {
  background: #bbbbbb;
  color: #000000;
}
</style>
