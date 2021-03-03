<template>
  <div class="filter fluid-container mb-4">
    <form method="GET">
      <div class="row col-12 mb-md-2">
        <label for="min_date" class="h6 col-lg-2 text-left pt-2"
          >from date:</label
        >
        <input
          type="date"
          id="min_date"
          name="min_date"
          placeholder="dd/mm/yyyy"
          class="ml-2 col-5 col-md-4"
        />
      </div>
      <div class="row col-12">
        <label for="max_date" class="h6 col-lg-2 text-left pt-2"
          >to date:</label
        >
        <input
          type="date"
          id="max_date"
          name="max_date"
          placeholder="dd/mm/yyyy"
          class="ml-2 col-5 col-md-4"
        />
        <button type="submit"><i class="fa fa-search"></i></button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "FlashcardListFilter",
};
</script>

<style>
</style>
