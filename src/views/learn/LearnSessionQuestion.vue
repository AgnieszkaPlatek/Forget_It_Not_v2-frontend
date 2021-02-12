<template>
  <flashcard-card :cardtext="flashcard.front" />
  <div class="fluid-container">
    <a class="btn btn-check d-inline-block btn-lg col-12 col-md-6 mb-3" href=""
      >Check if you know</a
    >
  </div>
</template>

<script>
import FlashcardCard from "@/components/FlashcardCard.vue";
export default {};
</script>

<style>
</style>
