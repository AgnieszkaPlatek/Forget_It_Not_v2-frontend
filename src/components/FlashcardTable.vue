<template>
  <table class="table table-hover mt-5">
    <thead>
      <tr>
        <th>Front</th>
        <th>Back</th>
        <th>Added</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="flashcard in flashcards"
        :key="flashcard.id"
        @click="goToDetail(flashcard.id)"
      >
        <td>{{ flashcard.front }}</td>
        <td>{{ flashcard.back }}</td>
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
  props: ["flashcards"],
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