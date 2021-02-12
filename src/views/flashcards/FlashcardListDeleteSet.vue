<template>
  <section class="mt-4 mx-1">
    <form method="POST">
      <fieldset class="form-group mt-2">
        <legend class="border-bottom mb-3">Delete Set</legend>
        <h1 class="h5">
          Are you sure you want to delete the set "{{ set.name }}"?
        </h1>
      </fieldset>
      <div class="row mb-4 ml-1">
        <button class="btn btn-delete px-4" type="submit">Yes, Delete</button>
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
  </section>
</template>

<script>
export default {};
</script>

<style>
</style>