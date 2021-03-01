<template>
  <section class="my-4">
    <p>{{ setname }}</p>
    <p>{{ set_name }}</p>
    <div class="text-center">
      <div v-if="set_name" class="mb-2">
        <h1 class="h2">
          {{ set_name
          }}<span class="badge badge-primary ml-3">{{ num_flashcards }}</span>
        </h1>
      </div>
      <div v-else>
        <h1 class="h2">
          {{ setname
          }}<span class="badge badge-primary ml-3">{{ num_flashcards }}</span>
        </h1>
      </div>
      <div class="mb-lg-3 pb-2">
        <h5>by {{ username }}</h5>
        <p class="text-muted">created on {{ created }}</p>
      </div>
    </div>
    <div v-if="num_flashcards > 0" class="fluid-container">
      <div class="mb-2" id="lm">
        <a id="set_filter" href="" class="btn ml-5"
          >Filter flashcards by date</a
        >
        <SearchBar />
      </div>
    </div>
    <div v-if="num_flashcards > 0 && num_flashcards < 50">
      <div class="fluid-container mb-3">
        <div class="text-center">
          <a
            href=""
            class="btn btn-learn btn-primary px-5 py-3 btn-lg"
            role="button"
            aria-pressed="true"
            >Learn</a
          >
        </div>
      </div>
    </div>
    <div v-else-if="num_flashcards > 50" class="fluid-container mb-5">
      <div class="btn-group col-12 mb-1">
        <button
          type="button"
          class="btn btn-learn btn-lg btn-primary text-uppercase dropdown-toggle"
          data-toggle="dropdown"
        >
          Learn
        </button>
        <div class="dropdown-menu">
          <a class="dropdown-item text-center text-uppercase py-1" href="">
            Learn all flashcards from the set</a
          >
          <a class="dropdown-item text-center text-uppercase mb-1 py-1" href=""
            >Choose part to learn</a
          >
        </div>
      </div>
    </div>
    <div class="container">
      <table class="table table-hover">
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
    </div>
    <div v-if="next_page || previous_page" class="btn-group row ml-5">
      <div v-if="previous_page">
        <router-link
          :to="{ name: 'FlashcardList', params: { id: this.id } }"
          class="btn btn-outline-primary btn-sm mr-2"
          >First</router-link
        >
        <router-link
          :to="{ name: 'FlashcardList', params: { id: this.id } }"
          class="btn btn-outline-primary btn-sm mr-2"
        >
          Previous</router-link
        >
      </div>
      <div v-for="page in pages" :key="page" class="btn-group">
        <button
          type="button"
          @click="goToPage(page)"
          class="btn btn-outline-primary btn-sm mr-2"
        >
          {{ page }}
        </button>
      </div>

      <div v-if="next_page">
        <router-link to="" class="btn btn-outline-primary btn-sm mr-2"
          >Next</router-link
        >
        <router-link
          :to="{ name: 'FlashcardList', params: { id: id } }"
          class="btn btn-outline-primary btn-sm"
        >
          Last</router-link
        >
      </div>
    </div>
    <p class="mt-3">You are on page {{ current_page }}</p>
    <div class="fluid-container mt-5 ml-3">
      <div class="mb-3 text-center">
        <router-link
          :to="{ name: 'FlashcardAdd' }"
          class="btn btn-primary mb-1 px-5 py-3"
          >Add Flashcard</router-link
        >
      </div>
    </div>
    <div class="row">
      <a href="" class="btn btn-update btn-sm ml-3 px-5">Update Set</a>
      <router-link
        :to="{
          name: 'SetDelete',
          params: { id: id, setname: setname },
        }"
        class="btn btn-delete btn-sm ml-3 px-5"
        >Delete Set</router-link
      >
    </div>
  </section>
  <div class="text-center">
    <router-link
      :to="{ name: 'SetList', params: { id: id } }"
      class="btn btn-back btn-sm my-3 px-5"
      role="button"
      >Back</router-link
    >
  </div>
</template>
  
<script>
import axios from "axios";
import SearchBar from "@/components/SearchBar.vue";
export default {
  name: "FlashcardList",
  components: {
    SearchBar,
  },
  props: ["id", "setname"],
  data() {
    return {
      created: "", //20 January, 2021
      num_flashcards: 0,
      username: "",
      flashcards: [],
      authenticated: true,
      next_link: "",
      previous_link: "",
      previous_page: 0,
      current_page: 0,
      next_page: 0,
      pages: [],
      query_url: "",
      page_url: "",
      url: "flashcard-list/" + this.id,
      set_name: "",
    };
  },
  mounted() {
    console.log("Mounted");
    this.loadFlashcards(this.url);
  },
  methods: {
    loadFlashcards(url) {
      console.log("Loading");
      axios
        .get(url, {
          headers: {
            Authorization: "Token 4dcdca18cc571489b5840d2041ed8b36588e0e33",
          },
        })
        .then((response) =>
          ((this.flashcards = response.data["results"]),
          (this.num_flashcards = response.data["count"]),
          (this.next_page = response.data["next_page"]),
          (this.previous_page = response.data["previous_page"]),
          (this.set_name = response.data["results"][0]["set_name"]),
          (this.username = response.data["results"][0]["owner_name"]),
          (this.created = response.data["results"][0]["set_created"]),
          (this.pages = response.data["pages"]),
          (this.current_page = response.data["current_page"]),
          (this.next_link = response.data["links"]["next"]),
          (this.previous_link =
            response.data["links"]["previous"])).catch((error) =>
            console.log(error)
          )
        );
    },
    goToDetail(id) {
      this.$router.push({
        name: "FlashcardDetail",
        params: { id: id },
      });
    },
    goToPage(page) {
      this.current_page = page;
      let url = this.url + "/?page=" + page;
      this.loadFlashcards(url);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
