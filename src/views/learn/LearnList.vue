<template>
  <section class="mt-4 mb-5">
    <div v-if="total_flashcards" class="mx-md-5">
      <div class="mb-4 text-center">
        <h1 class="h2">Learn</h1>
      </div>
      <div class="mt-4 mb-3 text-center">
        <router-link
          :to="{
            name: 'LearnIntro',
            params: {
              all: true,
            },
          }"
          class="btn btn-learn btn-lg btn-block content-center text-uppercase py-2 mx-auto"
        >
          Learn all flashcards
          <span class="badge badge-light ml-2">{{ total_flashcards }}</span>
        </router-link>
      </div>
      <div class="fluid-container">
        <div v-for="set in big_sets" :key="set.id">
          <div class="btn-block text-center">
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
              <router-link
                :to="{
                  name: 'LearnIntro',
                  params: {
                    setname: set.name,
                    set_id: set.id,
                  },
                }"
                class="dropdown-item text-center py-1"
              >
                Learn all flashcards from the set</router-link
              >
              <router-link
                :to="{
                  name: 'FlashcardFilter',
                  params: { id: set.id, setname: set.name },
                }"
                class="dropdown-item text-center mb-1 py-1"
              >
                Choose part to learn</router-link
              >
            </div>
          </div>
        </div>
      </div>
      <div class="fluid-container">
        <div v-for="set in small_sets" :key="set.id">
          <router-link
            :to="{
              name: 'LearnIntro',
              params: {
                setname: set.name,
                set_id: set.id,
              },
            }"
            class="btn btn-grey btn-lg btn-block mb-1"
            >{{ set.name }}
            <span class="badge badge-primary ml-2">{{
              set.num_flashcards
            }}</span>
          </router-link>
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
import axios from "axios";
export default {
  name: "LearnList",
  data() {
    return {
      total_flashcards: 0,
      sets: [],
    };
  },
  mounted() {
    axios
      .get("flashcard-sets/")
      .then((response) => (this.sets = response.data));
    axios
      .get("auth/users/me/")
      .then(
        (response) => (this.total_flashcards = response.data["num_flashcards"])
      );
  },
  computed: {
    big_sets() {
      return this.sets.filter((set) => set.num_flashcards > 20);
    },
    small_sets() {
      return this.sets.filter(
        (set) => set.num_flashcards <= 20 && set.num_flashcards > 0
      );
    },
    username() {
      return this.$store.state.authUser;
    },
  },
};
</script>

<style scoped>
.btn-grey {
  background: #eeeeee;
  color: #000000;
  margin: auto;
}

.btn-grey:hover {
  background: #cccccc;
  color: #000000;
}
</style>
