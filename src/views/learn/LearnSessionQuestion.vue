<template>
  <flashcard-card :cardtext="text" />
  <div class="text-center">
    <br />
    <button
      @click="$emit('give_answer')"
      @keyup.enter="$emit('give_answer')"
      class="btn btn-check btn-lg my-5"
    >
      Check if you know
    </button>
  </div>
</template>

<script>
import FlashcardCard from "@/components/FlashcardCard.vue";
export default {
  name: "LearnSessionQuestion",
  props: ["text"],
  components: {
    FlashcardCard,
  },
  emits: ["give_answer"],
};
</script>

<style>
</style>
