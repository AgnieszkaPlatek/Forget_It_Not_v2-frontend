<template>
  <section class="my-4">
    <div class="text-center">
      <div class="mb-2">
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
          class="btn btn-square btn-block btn-learn btn-lg btn-primary text-uppercase dropdown-toggle"
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
      <table class="table table-hover col-11">
        <tbody>
          <tr v-for="flashcard in flashcards" :key="flashcard.id">
            <router-link
              :to="{ name: 'FlashcardDetail', params: { id: flashcard.id } }"
            >
              <td>{{ flashcard.back }}</td>
              <td>{{ flashcard.front }}</td>
              <td>
                <small>{{ flashcard.added }}</small>
              </td>
            </router-link>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="fluid-container mt-5 ml-3">
      <div class="mb-3">
        <a
          href=""
          class="btn btn-add mb-1 px-5 py-3"
          role="button"
          aria-pressed="true"
          >Add Flashcard</a
        >
      </div>
      <div class="row">
        <a
          href=""
          class="btn btn-update btn-sm ml-3 px-5"
          role="button"
          aria-pressed="true"
          >Update Set</a
        >
        <a
          href=""
          class="btn btn-delete btn-sm ml-3 px-5"
          role="button"
          aria-pressed="true"
          >Delete Set</a
        >
      </div>
    </div>
  </section>
</template>
  
<script>
import axios from "axios";
import SearchBar from "@/components/SearchBar.vue";
export default {
  name: "FlashcardList",
  components: {
    SearchBar,
  },
  props: ["id"],
  data() {
    return {
      created: "", //20 January, 2021
      num_flashcards: 0,
      setname: "",
      username: "",
      flashcards: [],
      authenticated: true,
    };
  },
  mounted() {
    axios
      .get("http://localhost:8000/flashcard-list/" + this.id, {
        headers: {
          Authorization: "Token 4dcdca18cc571489b5840d2041ed8b36588e0e33",
        },
      })
      .then(
        (response) => (
          (this.flashcards = response.data),
          (this.num_flashcards = response.data.length),
          (this.setname = response.data[0]["set_name"]),
          (this.username = response.data[0]["owner_name"])(
            (this.created = response.data[0]["set_created"])
          )
        )
      )
      .catch((error) => console.log(error));
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
td {
  color: #2b2a2a;
  font-weight: bold;
}
</style>
