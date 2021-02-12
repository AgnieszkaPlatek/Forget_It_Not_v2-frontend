<template>
  <section class="mt-4 mx-1">
    <form method="POST">
      <fieldset class="form-group mt-2">
        <legend class="border-bottom mb-4">Add flashcard</legend>
      </fieldset>
      <div class="row mb-4 mt-4 ml-1">
        <button class="btn btn-square btn-primary px-5" type="submit">
          Add
        </button>
        <router-link
          :to="{ name: 'SetList' }"
          class="btn btn-square btn-back btn-sm d-inline-block col-4 col-md-2 mb-3"
          role="button"
          >Cancel</router-link
        >
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: "FlashcardAdd",
};
</script>

<style>
</style>