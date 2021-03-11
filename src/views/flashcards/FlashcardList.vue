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
    <div v-if="num_flashcards > 10" class="fluid-container mb-5">
      <div class="align-center">
        <SearchBar />
      </div>
      <div class="text-center">
        <button
          @click="goToFilter(id)"
          id="set_filter"
          class="btn px-5 my-2 my-lg-0"
        >
          Filter flashcards by date
        </button>
      </div>
    </div>
    <br />
    <router-link
      v-if="num_flashcards > 0 && num_flashcards <= 20"
      :to="{
        name: 'LearnSession',
        params: {
          setname: setname,
          cards: JSON.stringify(flashcards),
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
    <div v-if="flashcards.length" class="container">
      <FlashcardTable :flashcards="flashcards" />
    </div>
    <div v-else class="text-center">
      <h3>Begin adding your flashcards!</h3>
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
          class="btn btn-update btn-sm px-5"
        >
          Rename Set
        </button>
        <router-link
          :to="{
            name: 'SetDelete',
            params: { id: id, setname: setname },
          }"
          class="btn btn-delete btn-sm ml-2 px-5"
          >Delete Set</router-link
        >
        <router-link
          :to="{ name: 'SetList', params: { id: id } }"
          class="btn btn-back btn-sm ml-2 px-5"
          role="button"
          >Back</router-link
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
      username: "",
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
    };
  },
  mounted() {
    console.log("Mounted");
    this.loadFlashcards(this.url + this.id);
    if (this.num_flashcards === 0) {
      this.loadEmpty("flashcard-sets/" + this.id);
    }
  },
  methods: {
    loadEmpty(url) {
      console.log("Loading flashcards");
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
            (this.username = response.data["owner_name"]),
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
    toggleRename() {
      this.renaming = !this.renaming;
    },
    goToDetail(id) {
      this.$router.push({
        name: "FlashcardDetail",
        params: { id: id },
      });
    },
    goToFilter(id) {
      this.$router.push({
        name: "FlashcardFilter",
        params: { id: id, setname: this.setname },
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
#set_filter {
  float: right;
  background: #dddddd;
  font-size: 18px;
  border: none;
  cursor: pointer;
  color: #000000;
  letter-spacing: 1px;
  word-spacing: 4px;
}

#set_filter:hover {
  background: #bbbbbb;
}

@media (max-width: 1100px) {
  #set_filter {
    display: block;
    width: 100%;
  }
}
#search {
  width: 200px;
  transition: width 0.5s ease;
}
#search:focus {
  width: 400px;
  max-width: 80%;
}
@media (max-width: 1100px) {
  #search:focus {
    width: 400px;
    max-width: 87%;
  }
}
</style>
