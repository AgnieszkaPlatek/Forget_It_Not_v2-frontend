<template>
  <section class="mt-4 mx-md-5">
    <div class="mb-5 text-center">
      <h1 class="h3">Flashcard Sets</h1>
      <h6>by {{ username }}</h6>
    </div>
    <div v-if="num_sets > 0">
      <table class="table table-hover mb-5">
        <thead>
          <tr>
            <th>Set</th>
            <th>Created on</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="set in sets" :key="set.id">
            <td>
              <router-link
                :to="{
                  name: 'FlashcardList',
                  params: {
                    id: set.id,
                    setname: set.name,
                    user: username,
                    date: set.created,
                  },
                }"
                class="mb-3"
                ><b>{{ set.name }}</b>
                <span class="badge badge-primary ml-2">{{
                  set.num_flashcards
                }}</span></router-link
              >
            </td>
            <td>
              <small>{{ set.created }}</small>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else class="mb-5 text-center">
      <h6>You have no sets yet. Click the button below to create one.</h6>
    </div>
    <div>
      <button
        v-if="!creating"
        @click="toggleCreate"
        class="btn btn-b btn-outline-primary px-5"
        type="submit"
      >
        New Set
      </button>
    </div>
    <div v-if="creating">
      <SetListCreate />
      <button @click="toggleCreate" class="btn btn-back ml-4 btn-sm px-3">
        Cancel
      </button>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import SetListCreate from "./SetListCreate.vue";
export default {
  name: "SetList",
  components: {
    SetListCreate,
  },
  props: [],
  data() {
    return {
      sets: [],
      username: "",
      num_sets: 0,
      creating: false,
    };
  },
  methods: {
    toggleCreate() {
      this.creating = !this.creating;
    },
  },
  mounted() {
    axios
      .get("flashcard-sets/", {
        headers: {
          Authorization: "Token 4dcdca18cc571489b5840d2041ed8b36588e0e33",
        },
      })
      .then(
        (response) => (
          (this.sets = response.data),
          (this.username = response.data[0]["owner_name"]),
          (this.num_sets = response.data.length)
        )
      )
      .catch((error) => console.log(error));
  },
};
</script>

<style>
</style>
