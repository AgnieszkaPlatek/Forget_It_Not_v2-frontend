<template>
  <section class="my-4">
    <div class="ml-4">
      <div class="mb-2 mr-5">
        <h1 class="h2">
          {{ setname }}<span class="badge badge-primary ml-3">{{ count }}</span>
        </h1>
      </div>
      <div class="mb-lg-3 pb-2">
        <h5>by {{ username }}</h5>
        <p class="text-muted">created on {{ date }}</p>
      </div>
    </div>
    <div v-if="count > 0" class="fluid-container">
      <div class="row col-12 btn-md-group mb-2" id="lm">
        <a
          id="set_filter"
          href=""
          class="btn btn-square d-inline-block col-lg-6"
          >Filter flashcards by date</a
        >
        <a
          id="set_search"
          href=""
          class="btn btn-square d-inline-block col-lg-6"
          >Search for flashcard<i class="ml-3 fa fa-search"></i
        ></a>
      </div>
    </div>
    <div v-if="count > 0 && count < 50">
      <div class="fluid-container mb-3">
        <div class="col-12">
          <a
            href=""
            class="btn btn-square btn-learn btn-block btn-primary btn-lg"
            role="button"
            aria-pressed="true"
            >Learn</a
          >
        </div>
      </div>
    </div>
    <div v-else-if="count > 50" class="fluid-container mb-5">
      <div class="btn-group col-12 mb-1">
        <button
          type="button"
          class="btn btn-square btn-block btn-learn btn-lg btn-primary text-uppercase dropdown-toggle"
          data-toggle="dropdown"
        >
          Learn
        </button>
        <div class="dropdown-menu">
          <a class="dropdown-item text-center text-uppercase py-1" href="">
            Learn all flashcards from the set</a
          >
          <a class="dropdown-item text-center text-uppercase mb-1 py-1" href=""
            >Choose part to learn</a
          >
        </div>
      </div>
    </div>
    <div class="container">
      <table class="table table-hover col-11">
        <tbody>
          <tr v-for="flashcard in flashcards" :key="flashcard.id">
            <td>
              <a href="">{{ flashcard.back }} &minus; {{ flashcard.front }}</a>
            </td>
            <td>
              <small>{{ flashcard.added }}</small>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="fluid-container mt-5 ml-3">
      <div class="row btn-group mb-3 col-12">
        <a
          href=""
          class="btn btn-square btn-add d-inline-block col-lg-8 mb-1"
          role="button"
          aria-pressed="true"
          >Add Flashcard</a
        >
        <a
          href=""
          class="btn btn-back btn-square d-inline-block col-lg-4 mb-1"
          role="button"
          aria-pressed="true"
          >Back</a
        >
      </div>
      <div class="row col-12">
        <div class="col-lg-4 offset-lg-4"></div>
        <a
          href=""
          class="btn btn-update btn-square d-inline-block btn-sm col-lg-2 mb-1"
          role="button"
          aria-pressed="true"
          >Update Set</a
        >
        <a
          href=""
          class="btn btn-delete btn-square d-inline-block btn-sm col-lg-2 mb-1"
          role="button"
          aria-pressed="true"
          >Delete Set</a
        >
      </div>
    </div>
  </section>
</template>
  
<script>
export default {
  name: "FlashcardList",
  props: ["authenticated"],
  data() {
    return {
      date: "20 January, 2021",
      setname: "angielski",
      username: "Aga",
      flashcards: [
        { id: 1, front: "pies", back: "dog", added: "20 January, 2021" },
        { id: 2, front: "kot", back: "cat", added: "20 January, 2021" },
        { id: 3, front: "mysz", back: "mouse", added: "21 January, 2021" },
        { id: 4, front: "koń", back: "horse", added: "22 January, 2021" },
        { id: 5, front: "krowa", back: "cow", added: "22 January, 2021" },
      ],
    };
  },
  methods: {},
  computed: {
    count() {
      return this.flashcards.length;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
