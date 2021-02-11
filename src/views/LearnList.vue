<template>
  <section class="mt-4 mb-5">
    <div v-if="total_flashcards" class="mx-md-5">
      <div class="mb-4 text-center">
        <h1 class="h2">Learn</h1>
      </div>
      <div class="mt-4 mb-3 text-center">
        <a
          class="btn btn-learn btn-lg btn-block content-center text-uppercase py-2 mx-auto"
          href=""
        >
          Learn all flashcards
          <span class="badge badge-light ml-2">{{ total_flashcards }}</span>
        </a>
      </div>
      <div class="fluid-container">
        <div v-for="set in big_sets" :key="set.id">
          <div class="btn-group col-12 text-center">
            <button
              type="button"
              class="btn btn-grey btn-block btn-lg dropdown-toggle mb-1"
              data-toggle="dropdown"
            >
              {{ set.name }}
              <span class="badge badge-primary ml-2">{{
                set.num_flashcards
              }}</span>
            </button>
            <div class="dropdown-menu">
              <a class="dropdown-item text-center py-1" href="">
                Learn all flashcards from the set</a
              >
              <a class="dropdown-item text-center mb-1 py-1" href="">
                Choose part to learn</a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="fluid-container">
        <div v-for="set in small_sets" :key="set.id">
          <div class="mx-3">
            <a
              class="btn btn-grey btn-lg btn-block mb-1"
              role="button"
              aria-pressed="true"
              >{{ set.name }}
              <span class="badge badge-primary ml-2">{{
                set.num_flashcards
              }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="my-4 mx-3">
      <h4>
        You have to add some flashcards before learning them!
        <i class="fas fa-smile-wink" style="font-size: 24px"></i>
      </h4>
    </div>
  </section>
</template>

<script>
export default {
  name: "LearnIntro",
  data() {
    return {
      total_flashcards: 115,
      big_sets: [
        { id: 1, name: "angielski", num_flashcards: 60 },
        { id: 2, name: "niemiecki", num_flashcards: 40 },
      ],
      small_sets: [{ id: 3, name: "hiszpański", num_flashcards: 15 }],
    };
  },
};
// to do compute big sets and small sets
</script>

<style scoped>
.btn-grey {
  background: #eeeeee;
  color: #000000;
  max-width: 700px;
  margin: auto;
}

.btn-grey:hover {
  background: #cccccc;
  color: #000000;
}
</style>