<template>
  <form method="POST">
    <fieldset class="form-group mt-2">
      <legend class="border-bottom mb-4">Update Set</legend>
    </fieldset>
    <div class="row mb-4">
      <button class="btn btn-square btn-primary ml-3 px-4" type="submit">
        Submit
      </button>
      <router-link
        :to="{ name: 'SetList' }"
        class="btn btn-square btn-back ml-2"
        role="button"
        aria-pressed="true"
      >
        Cancel</router-link
      >
    </div>
  </form>
</template>

<script>
export default {
  name: FlashcardListRenameSet,
};
</script>

<style>
</style>
