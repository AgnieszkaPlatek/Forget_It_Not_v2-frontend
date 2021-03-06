<template>
  <section>
    <h1 class="h3 mt-4 mb-5 ml-3 text-center">
      Filter flashcards from <b>{{ setname }}</b>
    </h1>
    <p>{{ min_date }}</p>
    <p>{{ max_date }}</p>
    <div class="filter fluid-container mb-4">
      <form @submit="filter_flashcards">
        <div class="row col-12 mb-md-2">
          <label for="min_date" class="h6 col-lg-2 text-left pt-2"
            >from date:</label
          >
          <input
            type="date"
            id="min_date"
            v-model="min_date"
            placeholder="dd/mm/yyyy"
            class="ml-2 col-5 col-md-4"
          />
        </div>
        <div class="row col-12">
          <label for="max_date" class="h6 col-lg-2 text-left pt-2"
            >to date:</label
          >
          <input
            type="date"
            id="max_date"
            v-model="max_date"
            placeholder="dd/mm/yyyy"
            class="ml-2 col-5 col-md-4"
          />
          <button type="submit"><i class="fa fa-search"></i></button>
        </div>
      </form>
    </div>
    <table v-if="flashcards" class="table table-hover mt-5">
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
    <router-link
      v-if="flashcards"
      :to="{
        name: 'LearnSession',
        params: {
          setname: set_name,
          cards: JSON.stringify(flashcards),
        },
      }"
      class="btn btn-learn btn-block btn-lg btn-primary mb-4"
      >LEARN
    </router-link>
    <div class="text-right">
      <router-link
        :to="{ name: 'FlashcardList', params: { id: id } }"
        class="btn btn-back btn-sm px-5 mx-3 mt-3"
        >Back</router-link
      >
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "FlashcardFilter",
  props: ["id", "setname"],
  data() {
    return {
      flashcards: null,
      url: "flashcard-list/",
      min_date: "2021-02-22",
      max_date: "2021-02-22",
    };
  },
  mounted() {
    this.filter_flashcards();
  },
  methods: {
    filter_flashcards() {
      if (this.min_date) {
        this.query += "&min_date=" + this.min_date;
      }
      console.log(this.query);
      if (this.max_date) {
        this.query += "&max_date=" + this.max_date;
      }
      axios
        .get(this.url + this.id + "/?" + this.query, {
          headers: {
            Authorization: "Token 4dcdca18cc571489b5840d2041ed8b36588e0e33",
          },
        })
        .then((response) =>
          ((this.flashcards = response.data["results"]),
          (this.next_page = response.data["next_page"]),
          (this.previous_page = response.data["previous_page"]),
          (this.set_name = response.data["results"][0]["set_name"]),
          // (this.username = response.data["results"][0]["owner_name"]),
          (this.pages = response.data["pages"]),
          (this.current_page = response.data["current_page"]),
          (this.next_link = response.data["links"]["next"]),
          (this.previous_link =
            response.data["links"]["previous"])).catch((error) =>
            console.log(error)
          )
        );
    },
  },
};
</script>

<style scoped>
.filter button {
  padding: 6px 12px;
  background: #8fcafa;
  font-size: 17px;
  border: none;
  cursor: pointer;
  text-align: right;
}

.filter button:hover {
  background: #5db2f8;
}

.filter input[type="date"] {
  padding: 6px;
  font-size: 17px;
  border: none;
  background: #d3e7fa;
}
</style>
