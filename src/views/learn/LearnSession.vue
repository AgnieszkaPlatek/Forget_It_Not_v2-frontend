<template>
  <section class="mt-3 mx-2">
    <div
      v-if="setname && !part && !finished"
      class="ml-2 mb-4 mt-4 text-center"
    >
      <h1 class="h2">
        Learning flashcards from set <strong>{{ setname }}</strong>
      </h1>
    </div>
    <div v-if="part && !finished" class="ml-2 mb-4 mt-4 text-center">
      <h1 class="h2">
        Learning part of set <strong>{{ setname }}</strong>
      </h1>
    </div>
    <div v-else-if="all && !finished" class="ml-2 mb-4 mt-4 text-center">
      <h2>Learning all flashcards</h2>
    </div>
    <div
      v-if="!question && !answer && !finished && part"
      class="mb-3 pt-3 text-center"
    >
      <button @click="ask_question" class="btn btn-b mb-3 px-5">START</button>
    </div>
    <LearnSessionFinished v-if="finished" />
    <div v-if="question || (answer && !finished)" class="ml-3 mb-5 text-center">
      <progress id="learning" :value="learned" :max="total">
        {{ learned }}
      </progress>
      <label class="ml-2" for="learning"
        ><b>{{ learned }} / {{ total }}</b></label
      >
    </div>
    <LearnSessionQuestion
      v-if="question"
      :text="flashcard.front"
      @give_answer="show_answer"
    />
    <LearnSessionAnswer
      v-if="answer && !finished"
      :text="flashcard.back"
      @mark_learned="learn"
      @not_learned="ask_question"
    />
    <div v-if="!finished" class="row">
      <div class="col-4 offset-4 col-md-5 offset-md-5"></div>
      <router-link
        :to="{ name: 'SetList' }"
        class="btn btn-back btn-sm d-inline-block col-4 col-md-2 mb-3"
        role="button"
        >Cancel</router-link
      >
    </div>
  </section>
</template>

<script>
import LearnSessionQuestion from "./LearnSessionQuestion.vue";
import LearnSessionAnswer from "./LearnSessionAnswer.vue";
import LearnSessionFinished from "./LearnSessionFinished.vue";
export default {
  name: "LearnSession",
  props: ["setname", "all", "part", "cards"],
  components: {
    LearnSessionQuestion,
    LearnSessionAnswer,
    LearnSessionFinished,
  },
  beforeRouteLeave(to, from, next) {
    if (this.finished) {
      next(true);
    } else {
      const response = confirm(
        "You have not finished learning. Are you sure you want to leave?"
      );
      next(response);
    }
  },
  mounted() {
    console.log("Mounted");
    this.ask_question();
  },
  data() {
    return {
      question: false,
      answer: false,
      finished: false,
      learned: 0,
      flashcards: JSON.parse(this.cards),
      total: JSON.parse(this.cards).length,
      flashcard: null,
    };
  },
  methods: {
    delete_flashcard(flashcard) {
      this.flashcards.splice(this.flashcards.indexOf(flashcard), 1);
    },
    pick_flashcard() {
      var index = Math.floor(Math.random() * this.length);
      this.flashcard = this.flashcards[index];
      console.log("flashcard picked");
    },
    ask_question() {
      this.question = true;
      this.answer = false;
      this.pick_flashcard();
      console.log("question asked");
    },
    show_answer() {
      this.answer = true;
      this.question = false;
      console.log("answer showed");
    },

    learn() {
      this.learned += 1;
      this.flashcards.splice(this.flashcards.indexOf(this.flashcard), 1);
      console.log("flashcard learned and removed");
      if (this.learned === this.total) {
        this.finished = true;
        return;
      }
      this.ask_question();
    },
  },
  computed: {
    length() {
      return this.flashcards.length;
    },
  },
};
</script>

<style scoped>
.rows {
  cursor: pointer;
}
</style>
