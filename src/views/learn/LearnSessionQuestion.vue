<template>
  <flashcard-card :cardtext="text" />
  <div class="text-center">
    <br />
    <button
      @click="$emit('give_answer')"
      @keyup.enter="$emit('give_answer')"
      class="btn btn-check btn-lg my-5 px-5"
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

<style scoped>
.btn-check {
  background: #3590f0;
  color: #ffffff;
}

.btn-check:hover {
  background: #3380d1;
  color: #ffffff;
}
</style>
