<template>
  <flashcard-card :cardtext="text" />
  <div>
    <div class="ml-4 mb-2 mt-5">
      <h4>Did you know?</h4>
    </div>
    <div class="row mb-4">
      <button @click="$emit('mark_learned')" class="btn btn-yes px-5 mr-2">
        <b>YES</b>
      </button>
      <button @click="$emit('not_learned')" class="btn btn-not px-5">
        <b>NO</b>
      </button>
    </div>
  </div>
</template>

<script>
import FlashcardCard from "@/components/FlashcardCard.vue";
export default {
  name: "LearnSessionAnswer",
  props: ["text"],
  components: {
    FlashcardCard,
  },
  emits: ["mark_learned", "not_learned"],
};
</script>

<style>
</style>
