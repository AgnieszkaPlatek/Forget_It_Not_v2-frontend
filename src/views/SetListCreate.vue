<template>
  <form method="POST">
    <fieldset class="form-group mt-2">
      <legend class="border-bottom mb-4">Create new set</legend>
      {{ form }}
    </fieldset>
    <div class="row mb-4 mt-3">
      <button class="btn btn-primary btn-square ml-3 px-5" type="submit">
        Submit
      </button>
      <router-link
        :to="{ name: 'SetList' }"
        class="btn btn-back btn-square ml-1"
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
  name: SetListCreate,
};
</script>

<style>
</style>
