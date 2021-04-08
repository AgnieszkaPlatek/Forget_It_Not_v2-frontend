<template>
  <div class="card col-md-7 content-center mt-4 mx-auto p-3">
    <h1 v-if="!answer" class="h3 card-body p-3">{{ cardtext }}</h1>
    <h1 v-if="answer" class="h3 card-body p-3 bold">{{ cardtext }}</h1>
  </div>
</template>

<script>
export default {
  name: "FlashcardCard",
  props: ["cardtext", "answer"],
};
</script>

<style scoped>
.card {
  -webkit-box-shadow: 4px 9px 20px -4px rgba(0, 0, 0, 0.37);
  -moz-box-shadow: 4px 9px 20px -4px rgba(0, 0, 0, 0.37);
  box-shadow: 4px 9px 20px -4px rgba(0, 0, 0, 0.37);
  text-align: center;
  font-family: "Ubuntu", sans-serif;
  letter-spacing: 2px;
  max-width: 700px;
}
.bold {
  font-weight: bold;
}
</style>
