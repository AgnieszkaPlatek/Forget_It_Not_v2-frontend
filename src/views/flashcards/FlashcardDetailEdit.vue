<template>
  <section class="mt-4 mx-1">
    <form method="POST">
      <fieldset class="form-group mt-2">
        <legend class="border-bottom mb-4">Edit flashcard</legend>
      </fieldset>
      <div class="row mb-4">
        <button class="btn btn-primary ml-3" type="submit">Submit</button>
        <router-link
          :to="{ name: 'SetList' }"
          class="btn btn-back ml-2"
          role="button"
          aria-pressed="true"
        >
          Cancel</router-link
        >
      </div>
    </form>
  </section>
</template>

<script>
export default {};
</script>

<style>
</style>
