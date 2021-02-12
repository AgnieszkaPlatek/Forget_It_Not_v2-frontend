<template>
  <section class="mt-4 my-3">
    <div class="mb-5 text-center">
      <h1 class="h2">{{ flashcard.set }}</h1>
      <h5>by {{ username }}</h5>
      <small class="text-muted">added on {{ flashcard.added }}</small>
    </div>
    <flashcard-card :cardtext="cardtext" />
    <div class="fluid container col-md-8 mt-4">
      <div v-if="flashcard.previous_id && flashcard.next_id" class="row">
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
      <div v-if="flashcard.previous_id && !flashcard.next_id" class="row">
        <a
          href=""
          class="btn btn-previous offset-md-2 col-md-8 d-inline-block"
          role="button"
          aria-pressed="true"
          >Previous</a
        >
      </div>
      <div v-if="!flashcard.previous_id && flashcard.next_id" class="row">
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
import FlashcardCard from "@/components/FlashcardCard.vue";
// import FlashcardDetailDelete from "./flashcards/FlashcardDetailDelete.vue";
export default {
  name: "FlashcardDetail",
  components: {
    FlashcardCard,
    // FlashcardDetailDelete,
  },
  data() {
    return {
      username: "Aga",
      props: ["id", "flashcards"],
      flashcard: "",
    };
  },
  computed: {
    cardtext() {
      return this.flashcard.front + " - " + this.flashcard.back;
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