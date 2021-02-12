<template>
  <section class="mt-4">
    <div class="mb-4">
      <h1 class="h3">Flashcard Sets</h1>
      <h6>by {{ username }}</h6>
    </div>
    <div v-if="num_sets > 0">
      <table class="table table-hover mb-5">
        <thead>
          <tr>
            <th>Set</th>
            <th>Created on</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="set in sets" :key="set.id">
            <td>
              <router-link :to="{ name: 'FlashcardList' }" class="mb-3"
                ><b>{{ set.name }}</b>
                <span class="badge badge-primary ml-2">{{
                  set.num_flashcards
                }}</span></router-link
              >
            </td>
            <td>
              <small>{{ set.created }}</small>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else class="mb-5">
      <h6>You have no sets yet. Click the button below to create one.</h6>
    </div>
    <div class="mb-2">
      <form>
        <button
          class="btn btn-b btn-outline-primary px-5"
          type="submit"
          formaction=""
        >
          New Set
        </button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "SetList",
  props: [],
  data() {
    return {
      username: "Aga",
      sets: [
        {
          id: 1,
          name: "angielski",
          num_flashcards: 50,
          created: "20 January, 2021",
        },
        {
          id: 2,
          name: "hiszpański",
          num_flashcards: 20,
          created: "21 January, 2021",
        },
        {
          id: 3,
          name: "niemiecki",
          num_flashcards: 15,
          created: "31 January, 2021",
        },
      ],
    };
  },
  computed: {
    num_sets() {
      return this.sets.length;
    },
  },
};
</script>

<style>
</style>
