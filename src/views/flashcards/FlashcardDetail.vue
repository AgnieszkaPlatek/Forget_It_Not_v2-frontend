<template>
  <section class="mt-4 my-3">
    <div class="mb-5 text-center">
      <h1 class="h2">{{ setname }}</h1>
      <h5>by {{ username }}</h5>
      <small class="text-muted">added on {{ added }}</small>
    </div>
    <div @click="changeText">
      <flashcard-card :cardtext="cardtext" />
    </div>
    <div class="fluid container col-md-8 mt-4">
      <div v-if="previous_id && next_id" class="row">
        <a
          href=""
          class="btn btn-previous col-6 offset-md-2 col-md-4 d-inline-block"
          role="button"
          aria-pressed="true"
          >Previous</a
        >
        <a
          href=""
          class="btn btn-next col-6 col-md-4 d-inline-block"
          role="button"
          aria-pressed="true"
          >Next</a
        >
      </div>
      <div v-if="previous_id && !next_id" class="row">
        <a
          href=""
          class="btn btn-previous offset-md-2 col-md-8 d-inline-block"
          role="button"
          aria-pressed="true"
          >Previous</a
        >
      </div>
      <div v-if="!previous_id && next_id" class="row">
        <a
          href=""
          class="btn btn-next offset-md-2 col-md-8 d-inline-block"
          role="button"
          aria-pressed="true"
          >Next</a
        >
      </div>
    </div>
    <div class="fluid-container mt-5 ml-3">
      <div class="row btn-group col-12 mb-3">
        <a
          href=""
          class="btn col-md-5 btn-add mb-1"
          role="button"
          aria-pressed="true"
          >Add Flashcard</a
        >
        <a
          href=""
          class="btn btn-back col-md-3 mb-1"
          role="button"
          aria-pressed="true"
          >Back</a
        >
        <a
          href=""
          class="btn btn-update col-md-2 mb-1"
          role="button"
          aria-pressed="true"
          >Edit</a
        >
        <a
          href=""
          class="btn btn-delete col-md-2 mb-1"
          role="button"
          aria-pressed="true"
          >Delete</a
        >
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import FlashcardCard from "@/components/FlashcardCard.vue";
// import FlashcardDetailDelete from "./flashcards/FlashcardDetailDelete.vue";
export default {
  name: "FlashcardDetail",
  components: {
    FlashcardCard,
    // FlashcardDetailDelete,
  },
  props: ["id"],
  data() {
    return {
      added: "", //20 January, 2021
      front: "",
      back: "",
      setname: "to be fetched",
      username: "",
      authenticated: true,
      next_id: false,
      previous_id: false,
      cardtext: "",
    };
  },
  mounted() {
    axios
      .get("http://localhost:8000/flashcards/" + this.id, {
        headers: {
          Authorization: "Token 4dcdca18cc571489b5840d2041ed8b36588e0e33",
        },
      })
      .then(
        (response) => (
          (this.front = response.data["front"]),
          (this.back = response.data["back"]),
          // this.setname = response.data["setname"],
          (this.username = response.data["owner_name"]),
          (this.added = response.data["added"])((this.cardtext = this.back))
        )
      )
      .catch((error) => console.log(error));
  },
  methods: {
    changeText() {
      if (this.cardtext == this.back) {
        this.cardtext = this.front;
        console.log("cardtext: ", this.front);
      } else {
        this.cardtext = this.back;
        console.log("cardtext: ", this.back);
      }
    },
  },
};
</script>

<style>
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
