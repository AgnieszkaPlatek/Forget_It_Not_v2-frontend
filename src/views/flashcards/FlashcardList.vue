<template>
  <section class="my-4">
    <div class="text-center">
      <div v-if="setname" class="mb-2">
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
    <div
      v-if="num_flashcards > 10"
      class="mb-4 text-top col-lg-12 fluid-container row"
    >
      <div class="col-lg-6 my-2">
        <SearchBar @search="searchFlashcard" />
      </div>
      <div class="col-lg-6">
        <button @click="goToFilter(id)" id="set_filter" class="btn btn-block">
          Filter flashcards by date
        </button>
      </div>
    </div>
    <div v-if="search_results.length" class="mb-5">
      <div class="modal fade" id="searchModal" role="dialog">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-body">
              <FlashcardTable :flashcards="search_results" class="mb-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-link
      v-if="num_flashcards > 0 && num_flashcards <= 20"
      :to="{
        name: 'LearnIntro',
        params: {
          setname: setname,
          set_id: id,
        },
      }"
      class="btn btn-learn btn-block btn-lg btn-primary mb-5"
      >LEARN
    </router-link>
    <div v-if="num_flashcards > 20" class="fluid-container mb-3">
      <div class="mb-1">
        <button
          type="button"
          class="btn btn-learn btn-block btn-lg btn-primary dropdown-toggle"
          data-toggle="dropdown"
        >
          LEARN
        </button>
        <div class="dropdown-menu">
          <router-link
            :to="{
              name: 'LearnIntro',
              params: {
                setname: setname,
                set_id: id,
              },
            }"
            class="dropdown-item text-center text-uppercase py-1"
          >
            Learn all flashcards from the set</router-link
          >
          <a
            @click="goToFilter(id)"
            class="dropdown-item text-center text-uppercase mb-1 py-1"
            href=""
            >Choose part to learn</a
          >
        </div>
      </div>
    </div>
    <div v-if="flashcards.length" class="container mb-5">
      <FlashcardTable :flashcards="flashcards" />
    </div>
    <div v-else class="text-center">
      <h3>Begin adding your flashcards!</h3>
    </div>
    <div v-if="next_page || previous_page">
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
    <div class="fluid-container mt-5">
      <div class="mb-3 text-center">
        <router-link
          :to="{ name: 'FlashcardAdd' }"
          class="btn btn-primary mb-3 px-5 py-3"
          >ADD FLASHCARD</router-link
        >
      </div>
    </div>
    <div class="text-center">
      <div class="btn-group">
        <button
          v-if="!renaming"
          @click="toggleRename"
          class="btn btn-update btn-sm px-5 mb-2"
        >
          Rename Set
        </button>
        <router-link
          :to="{
            name: 'SetDelete',
            params: { id: id, setname: setname },
          }"
          class="btn btn-delete btn-sm ml-1 px-5 mb-2"
          >Delete Set</router-link
        >
      </div>
    </div>
    <div v-if="renaming">
      <FlashcardListRenameSet :id="id" />
      <button @click="toggleRename" class="btn btn-back ml-4 btn-sm px-3">
        Cancel
      </button>
    </div>
  </section>
</template>
  
<script>
import axios from "axios";
import SearchBar from "@/components/SearchBar.vue";
import FlashcardTable from "@/components/FlashcardTable.vue";
import FlashcardListRenameSet from "./FlashcardListRenameSet.vue";
export default {
  name: "FlashcardList",
  components: {
    SearchBar,
    FlashcardTable,
    FlashcardListRenameSet,
  },
  props: ["id"],
  data() {
    return {
      created: "", //20 January, 2021
      num_flashcards: 0,
      flashcards: [],
      authenticated: true,
      next_link: "",
      previous_link: "",
      previous_page: 0,
      current_page: 0,
      next_page: 0,
      pages: [],
      url: "flashcard-list/",
      query_url: "",
      page_url: "",
      set_name: "",
      renaming: false,
      search_results: "",
    };
  },
  mounted() {
    console.log("Mounted");
    this.loadFlashcards(this.url + this.id);
  },
  methods: {
    loadEmpty(url) {
      console.log("Loading empty");
      axios
        .get(url, {
          headers: {
            Authorization: "Token 4dcdca18cc571489b5840d2041ed8b36588e0e33",
          },
        })
        .then(
          (response) => (
            (this.num_flashcards = response.data["num_flashcards"]),
            (this.setname = response.data["name"]),
            (this.created = response.data["created"]).catch((error) =>
              console.log(error)
            )
          )
        );
    },
    loadFlashcards(url) {
      console.log("Loading flashcards");
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
          (this.setname = response.data["results"][0]["set_name"]),
          (this.created = response.data["results"][0]["set_created"]),
          (this.pages = response.data["pages"]),
          (this.current_page = response.data["current_page"]),
          (this.next_link = response.data["links"]["next"]),
          (this.previous_link =
            response.data["links"]["previous"])).catch((error) =>
            console.log(error)
          )
        );
      if (this.num_flashcards == 0) {
        this.loadEmpty();
      }
    },
    searchFlashcard(query) {
      console.log("Searching for flashcard");
      console.log(query);
      axios
        .get("search/" + this.id + "?search=" + query)
        .then((response) => (this.search_results = response.data));
    },
    toggleRename() {
      this.renaming = !this.renaming;
    },
    goToFilter(id) {
      this.$router.push({
        name: "FlashcardFilter",
        params: { id: id, setname: this.setname },
      });
    },
    goToPage(page) {
      this.loadFlashcards(this.url + this.id + "/" + "?page=" + page);
    },
    isActive(page) {
      return page === this.current_page;
    },
  },
  computed: {
    username() {
      return this.$store.state.authUser;
    },
    pagesToShow() {
      return this.pages.filter(
        (page) => page < this.current_page + 3 && page > this.current_page - 3
      );
    },
  },
};
</script>

<style scoped>
#set_filter {
  background: #dddddd;
  font-size: 18px;
  border: none;
  cursor: pointer;
  color: #000000;
  letter-spacing: 1px;
  word-spacing: 4px;
  display: block;
  width: 100%;
  margin-top: 5px;
}

#set_filter:hover {
  background: #bbbbbb;
}

@media (max-width: 1100px) {
  #set_filter {
    width: 100%;
    margin-top: 0px;
  }
}
ul {
  padding-inline-start: 0px;
}
</style>
