<template>
  <section>
    <div class="text-center mt-3">
      <h2>{{ username }}</h2>
      <h6 class="mb-4">{{ email }}</h6>
      <p v-if="num_sets === 1" class="h5"><b>1</b> set</p>
      <p v-else class="h5">
        <b>{{ num_sets }}</b> sets
      </p>
      <p v-if="num_flashcards === 1" class="h5"><b>1</b> flashcard</p>
      <p v-else class="h5">
        <b>{{ num_flashcards }}</b> flashcards
      </p>
    </div>
    <!-- 
    <form @submit="updateUserData">
      <label>Username:</label>
      <input type="username" required v-model="username" />
      <label>Email:</label>
      <input type="email" required v-model="email" />
          <div class="submit mt-5">
        <button class="btn btn-primary btn-block px-5" type="submit">
          Update
        </button>
      </div>
    </form> -->
    <div class="text-right mt-5">
      <button class="btn btn-sm btn-delete col-4 col-lg-2 d-inline-block">
        Delete account
      </button>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "UserProfile",
  data() {
    return {
      email: "",
      num_sets: "",
      num_flashcards: "",
    };
  },
  mounted() {
    axios
      .get("auth/users/me", {
        headers: {
          Authorization: "Token 4dcdca18cc571489b5840d2041ed8b36588e0e33",
        },
      })
      .then(
        (response) => (
          (this.email = response.data["email"]),
          (this.num_sets = response.data["num_sets"]),
          (this.num_flashcards = response.data["num_flashcards"])
        )
      )
      .catch((error) => console.log(error));
  },
  computed: {
    username() {
      return this.$store.state.authUser;
    },
  },
  // methods: {
  //   updateUserData() {},
  // },
};
</script>

<style>
</style>
