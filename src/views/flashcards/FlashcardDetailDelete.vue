<template>
  <form method="POST">
    <fieldset class="form-group">
      <h1 class="h4 mb-4">Are you sure you want to delete this flashcard?</h1>
    </fieldset>
    <div class="form-group mb-4">
      <button class="btn btn-delete btn-sm px-5" type="submit">
        Yes, Delete
      </button>
      <a class="btn btn-back btn-sm px-5 ml-1" href="">Cancel</a>
    </div>
  </form>
</template>

<script>
export default {
  name: "FlashcardDetailDelete",
  props: ["flashcard"],
};
</script>

<style>
</style>