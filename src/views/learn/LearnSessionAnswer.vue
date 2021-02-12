<template>
  <flashcard-card :cardtext="flashcard.back" />
  <div class="ml-4 mb-2">
    <h4>Did you know?</h4>
  </div>
  <div class="fluid-container mx-3">
    <form method="POST">
      <div class="row mb-4">
        <button
          class="btn btn-yes btn-square d-inline-block col-6 col-md-3"
          type="submit"
          name="learned"
          value="ok"
        >
          <b>YES</b>
        </button>
        <button
          class="btn btn-not btn-square d-inline-block col-6 col-md-3"
          type="submit"
          name="not-learned"
          value="no"
        >
          <b>NO</b>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import FlashcardCard from "@/components/FlashcardCard.vue";
export default {};
</script>

<style>
</style>
