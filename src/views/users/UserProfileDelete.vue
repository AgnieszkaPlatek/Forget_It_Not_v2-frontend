<template>
  <section class="mt-4">
    <form method="POST">
      <fieldset class="form-group mt-2 mx-2">
        <legend class="border-bottom mb-3 ml-3">
          Are you sure you want to delete your account?
        </legend>
        <p class="ml-3">
          This will permanently delete your profile and any content you have
          generated.
        </p>
      </fieldset>
      <div class="row mb-4 ml-3">
        <button
          class="btn btn-square btn-delete ml-2 px-4"
          type="submit"
          name="delete"
        >
          Yes, Delete
        </button>
        <a
          href=""
          class="btn btn-square btn-back ml-2"
          role="button"
          aria-pressed="true"
        >
          Cancel</a
        >
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: "UserProfileDelete",
};
</script>

<style>
</style>
