<template>
  <section class="my-4 mx-3">
    <div class="media ml-2">
      <div class="media-body">
        <h2 class="account-heading">{{ user.username }}</h2>
        <p class="text-secondary">{{ user.email }}</p>

        <p v-if="num_sets === 1" class="h5"><b>1</b> set</p>
        <p v-else class="h5">
          <b>{{ num_sets }}</b> sets
        </p>
        <p v-if="num_flashcards === 1" class="h5"><b>1</b> flashcard</p>
        <p v-else class="h5">
          <b>{{ num_flashcards }}</b> flashcards
        </p>
      </div>
    </div>
    {% if not demo %}
    <form method="POST" enctype="multipart/form-data">
      <br />
      <fieldset class="form-group">
        <legend class="border-bottom mb-4">
          {% translate 'Profile Info' %}
        </legend>
      </fieldset>

      <div class="fluid-container">
        <button
          class="btn btn-square btn-primary col-md-4 d-inline-block mb-4"
          type="submit"
        >
          {% translate 'Update' %}
        </button>
        <div class="row col-12">
          <div class="col-4 offset-4 col-lg-5 offset-lg-5"></div>
          <form method="POST">
            <a
              href=""
              class="btn btn-square btn-sm btn-delete col-4 col-lg-2 d-inline-block"
            >
              Delete account</a
            >
          </form>
        </div>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: "UserProfile",
};
</script>

<style>
</style>
