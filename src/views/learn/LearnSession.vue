<template>
  <section class="mt-3 mx-2">
    <div v-if="set && !finished" class="ml-2 mb-4 mt-4">
      <h1 class="h2">
        Learning set <strong>{{ set.name }}</strong>
      </h1>
    </div>
    <div v-else-if="!set && !finished" class="ml-2 mb-4 mt-4">
      <h2>Learning all flashcards</h2>
    </div>
    <div class="ml-3 mb-5">
      <progress id="learning" value="{{ learned }}" max="{{ total }}">
        {{ learned }}
      </progress>
      <label class="ml-2" for="learning"
        ><b>{{ learned }} / {{ total }}</b></label
      >
    </div>
    <LearnSessionQuestion v-if="question" />
    <LearnSessionAnswer v-if="answer" />
    <LearnSessionFinished v-if="finished" />
    <div class="row">
      <div class="col-4 offset-4 col-md-5 offset-md-5"></div>
      <router-link
        :to="{ name: 'SetList' }"
        class="btn btn-square btn-back btn-sm d-inline-block col-4 col-md-2 mb-3"
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
  components: {
    LearnSessionQuestion,
    LearnSessionAnswer,
    LearnSessionFinished,
  },
  data() {
    return {
      question: false,
      answer: false,
      finished: false,
      learned: 0,
      total: 5,
      flashcard: null,
      flashcards: [
        { id: 1, front: "pies", back: "dog", added: "20 January, 2021" },
        { id: 2, front: "kot", back: "cat", added: "20 January, 2021" },
        { id: 3, front: "mysz", back: "mouse", added: "21 January, 2021" },
        { id: 4, front: "koń", back: "horse", added: "22 January, 2021" },
        { id: 5, front: "krowa", back: "cow", added: "22 January, 2021" },
      ],
    };
  },
  methods: {
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
    give_answer() {
      this.answer = true;
      this.question = false;
      console.log("answer showed");
    },

    learn() {
      this.learned += 1;
      this.flashcards.splice(this.flashcards.indexOf(this.flashcard), 1);
      console.log("flashcard learned and removed");
      if (this.learned === this.total) {
        alert("Congratulations! You finished learning your flashcards!");
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

<style>
</style>