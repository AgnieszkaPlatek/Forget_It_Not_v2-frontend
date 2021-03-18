<template>
  <table class="table table-hover mt-5">
    <thead>
      <tr>
        <th>Front</th>
        <th>Back</th>
        <th v-if="all">Set</th>
        <th>Added</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="flashcard in flashcards"
        :key="flashcard.id"
        @click="goToDetail(flashcard.flashcard_set, flashcard.id)"
      >
        <td>{{ flashcard.front }}</td>
        <td>{{ flashcard.back }}</td>
        <td v-if="all">
          <b>{{ flashcard.set_name }}</b>
        </td>
        <td>
          <small>{{ flashcard.added }}</small>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "FlashcardTable",
  props: ["flashcards", "all"],
  methods: {
    goToDetail(set_id, f_id) {
      this.$router.push({
        name: "FlashcardDetail",
        params: {
          id: set_id,
          f_id: f_id,
          cards: JSON.stringify(this.flashcards),
        },
      });
    },
  },
};
</script>

<style scoped>
th {
  color: #000000;
  font-size: 1.1em;
}
td {
  color: #2b2a2a;
  cursor: pointer;
  font-size: 1.1em;
}
</style>
