<template>
  <section class="mt-4 ml-3">
    <div v-if="set && !part" class="mb-4 pt-2">
      <h1 class="h2">
        Learn<strong>{{ set.name }}</strong>
      </h1>
    </div>
    <div v-else-if="set && part" class="mb-4 pt-2">
      <h1 class="h2">
        Learn part of<strong>{{ set.name }}</strong>
      </h1>
    </div>
    <div v-else-if="num_flashcards" class="mb-4 pt-2">
      <h1 class="h2">Learning all flashcards</h1>
    </div>

    <div class="mb-3 pb-3">
      <h5>
        You have <strong>{{ count }}</strong> flashcard
        <strong>{{ count }}</strong> flashcards to learn. Good luck!
      </h5>
    </div>

    <div class="mb-3 pt-3">
      <a class="btn btn-b mb-3 px-5" href="">START</a>
    </div>
  </section>
</template>

<script>
export default {
  name: LearnIntro,
  data() {
    return {
      set: true,
      part: true,
      num_flashcards: 30,
    };
  },
};
</script>

<style>
</style>
