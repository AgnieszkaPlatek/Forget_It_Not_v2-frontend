<template>
  <section class="mt-5">
    <div class="mb-4 ml-3 fluid-container">
      <h1 class="text-center">Welcome!</h1>
    </div>
    <div class="ml-4 mb-3 text-center">
      <h4>
        Please<a id="please-register" href=""> register</a> to begin creating
        your own sets of
      </h4>
    </div>
    <flashcard-card :cardtext="cardtext" />
    <div class="mt-5">
      <h5 class="text-center mb-3">or just</h5>
    </div>
    <div class="text-center mt-3">
      <form method="POST">
        <button
          id="grad"
          class="btn btn-lg-center px-5 py-3 text-center"
          type="submit"
          name="demo"
        >
          <b> TRY IT OUT</b>
        </button>
      </form>
    </div>
  </section>
</template>

<script>
import FlashcardCard from "../components/FlashcardCard.vue";
export default {
  name: "AppWelcome",
  components: {
    FlashcardCard,
  },
  data() {
    return {
      cardtext: "flashcards",
    };
  },
};
</script>

<style>
#grad {
  background-color: #5ba9fc;
  background-image: -webkit-radial-gradient(
    rgb(255, 255, 255),
    rgb(150, 200, 253)
  );
  background-image: radial-gradient(rgb(255, 255, 255), rgb(91, 169, 252));
  color: #000000;
  border: none;
  letter-spacing: 4px;
  word-spacing: 4px;
}

#grad:hover {
  background-image: -webkit-radial-gradient(
    rgb(255, 255, 255),
    rgb(119, 182, 249)
  );
  background-image: radial-gradient(rgb(255, 255, 255), rgb(53, 144, 240));
  text-shadow: -0.04ex 0 #000000, 0.04ex 0 #000000;
}
</style>
