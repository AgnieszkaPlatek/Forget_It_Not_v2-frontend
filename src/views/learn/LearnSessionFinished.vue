<template>
  <div class="mb-3 ml-3 row">
    <h3>Well done</h3>
    <i class="material-icons ml-3" style="font-size: 33px; color: #2c73bf"
      >thumb_up</i
    >
  </div>
  <div class="mb-3 ml-3 mt-3">
    <progress id="learning" value="{{ total }}" max="{{ total }}">
      {{ total }}
    </progress>
    <label class="ml-2" for="learning"
      ><b>{{ total }} / {{ total }}</b></label
    >
  </div>
  <div v-if="set" class="mb-4 ml-3">
    <h4>
      You finished learning <strong>{{ set.name }}!</strong>
    </h4>
  </div>
  <div v-else class="mb-4 ml-3">
    <h4>You finished learning your flashcards!</h4>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
