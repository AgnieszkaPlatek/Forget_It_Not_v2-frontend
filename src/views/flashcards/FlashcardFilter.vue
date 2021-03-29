<template>
  <section>
    <h1 class="h3 mt-4 mb-5 ml-3 text-center">
      Filter flashcards from <b>{{ setname }}</b>
    </h1>
    <div class="mb-4">
      <form @submit.prevent="filterFlashcards">
        <div class="row col-12 mb-2">
          <label for="min_date" class="h6 col-3 text-right pt-2"
            >FROM DATE:</label
          >
          <input
            type="date"
            v-model="min_date"
            placeholder="dd/mm/yyyy"
            class="col-7"
          />
        </div>
        <div class="row col-12">
          <label for="max_date" class="h6 col-3 text-right pt-2"
            >TO DATE:</label
          >
          <input
            type="date"
            v-model="max_date"
            placeholder="dd/mm/yyyy"
            class="col-7"
          />
          <button id="glass" type="submit" :disabled="submitted">
            <i class="fa fa-search"></i>
          </button>
        </div>
      </form>
    </div>
    <div v-if="total">
      <div class="text-center mt-5 mb-3">
        <h4 v-if="total === 1">Selected {{ total }} flashcard!</h4>
        <h4 v-else>Selected {{ total }} flashcards!</h4>
      </div>
      <router-link
        :to="{
          name: 'LearnIntro',
          params: {
            setname: set_name,
            part: true,
            cards: JSON.stringify(cards),
            set_id: id,
          },
        }"
        class="btn btn-learn btn-block btn-lg btn-primary mb-4"
        >LEARN
      </router-link>
      <FlashcardTable :flashcards="flashcards" />
    </div>
    <div v-if="next_page || previous_page" class="mt-5">
      <ul class="page-item pagination justify-content-center">
        <li v-if="previous_page" @click="goToPage(1)" class="page-link mr-1">
          First
        </li>
        <li
          v-if="previous_page"
          @click="goToPage(previous_page)"
          class="page-link mr-1"
        >
          Previous
        </li>
        <li
          v-for="page in pagesToShow"
          :key="page"
          @click="goToPage(page)"
          :class="{ active: isActive(page) }"
          class="page-item mr-1"
        >
          <button class="page-link">
            {{ page }}
          </button>
        </li>
        <li
          v-if="next_page"
          @click="goToPage(next_page)"
          class="page-link mr-1"
        >
          Next
        </li>
        <li v-if="next_page" @click="goToPage(pages.length)" class="page-link">
          Last
        </li>
      </ul>
    </div>
    <!-- <div v-if="message" class="ml-5 mt-5 text-center">
      <h4>{{ message }}</h4>
    </div> -->
    <div class="text-right mr-5">
      <router-link
        :to="{ name: 'FlashcardList', params: { id: id } }"
        class="btn btn-back btn-sm px-5 mx-3 mt-4"
        >Back</router-link
      >
    </div>
  </section>
</template>

<script>
import axios from "axios";
import FlashcardTable from "@/components/FlashcardTable.vue";
export default {
  name: "FlashcardFilter",
  components: { FlashcardTable },
  props: ["id", "setname"],
  data() {
    return {
      table: false,
      flashcards: "",
      min_date: "",
      max_date: "",
      cards: "",
      message: "",
      previous_page: 0,
      current_page: 0,
      next_page: 0,
      pages: [],
      query: "",
      url: "",
      submitted: false,
    };
  },
  mounted() {},
  methods: {
    goToPage(page) {
      console.log("Go to page", page);
      this.loadFlashcards(this.url + "&page=" + page);
    },
    isActive(page) {
      return page == this.current_page;
    },
    filterFlashcards() {
      console.log("Started filtering");
      if (!this.min_date && !this.max_date) {
        this.message = "No flashcards found. Try again!";
        this.$router.forceUpdate();
      }
      if (this.min_date && !this.query.includes("min_date")) {
        this.query += "&min_date=" + this.min_date;
      }
      if (this.max_date && !this.query.includes("max_date")) {
        this.query += "&max_date=" + this.max_date;
      }
      this.message = "";
      this.url = "flashcard-list/" + this.id + "/?" + this.query;
      this.loadFlashcards(this.url);
      this.getAllCards(
        "http://localhost:8000/api/learn/" + this.id + "/?" + this.query
      );
    },
    getAllCards(url) {
      console.log("Started getting flashcards from", url);
      axios
        .get(url)
        .then((response) =>
          (this.cards = response.data).catch((error) => console.log(error))
        );
      console.log("This cards are: ", this.cards);
    },
    loadFlashcards(url) {
      console.log("Started loading", url);
      axios
        .get(url, {
          headers: {
            Authorization: "Token 4dcdca18cc571489b5840d2041ed8b36588e0e33",
          },
        })
        .then((response) =>
          ((this.flashcards = response.data["results"]),
          (this.next_page = response.data["next_page"]),
          (this.previous_page = response.data["previous_page"]),
          (this.set_name = response.data["results"][0]["set_name"]),
          (this.pages = response.data["pages"]),
          (this.current_page = response.data["current_page"])).catch((error) =>
            console.log(error)
          )
        );
      if (this.flashcards.length > 0) {
        this.table = true;
        this.message = "";
      } else {
        this.message = "No flashcards found. Try again!";
      }
    },
  },
  computed: {
    pagesToShow() {
      return this.pages.filter(
        (page) => page < this.current_page + 3 && page > this.current_page - 3
      );
    },
    total() {
      return this.cards.length;
    },
  },
};
</script>

<style scoped>
form {
  max-width: 600px;
  margin: auto;
  background: white;
  border-radius: 15px;
}
#glass {
  padding: 6px 12px;
  background: #8fcafa;
  font-size: 17px;
  border: none;
  cursor: pointer;
  text-align: right;
}

#glass:hover {
  background: #5db2f8;
}

input {
  padding: 6px;
  font-size: 17px;
  border: none;
  background: #daeaf8;
}
label {
  font-size: 0.9em;
  font-weight: bold;
  color: #646464;
}
ul {
  padding-inline-start: 0px;
}
</style>
