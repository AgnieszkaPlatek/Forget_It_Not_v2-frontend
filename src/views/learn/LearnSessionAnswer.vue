<template>
  <flashcard-card :answer="true" :cardtext="text" />
  <div class="text-center">
    <div class="ml-4 mb-2 mt-5">
      <h4>Did you know?</h4>
    </div>
    <div class="btn-group mb-5">
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
  props: ["text", "answer"],
  components: {
    FlashcardCard,
  },
  emits: ["mark_learned", "not_learned"],
};
</script>

<style scoped>
.btn-not {
  background: #fc836d;
  color: #ffffff;
}

.btn-not:hover {
  background: #f35335;
  color: #ffffff;
}

.btn-yes {
  background: #77b6f9;
  color: #ffffff;
}

.btn-yes:hover {
  background: #3590f0;
}
</style>
