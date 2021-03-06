<template>
  <section class="mt-4 mx-1">
    <div class="warning">
      <h1 class="h3">Are you sure you want to delete your account?</h1>
      <h5>
        This will permanently delete your profile and any content you have
        generated.
      </h5>
    </div>
    <a href="" @click="accountDelete" class="btn btn-delete px-5" type="submit">
      Yes, Delete
    </a>
    <router-link
      :to="{ name: 'SetList' }"
      class="btn btn-back ml-3"
      role="button"
      aria-pressed="true"
    >
      Cancel</router-link
    >
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "UserProfileDelete",
  methods: {
    accountDelete() {
      axios({
        method: "delete",
        url: "auth/users/me",
        headers: {
          Authorization: "Token 3ba62b1f6855e93af81af6fe28ccd388a7643874",
        },
      }).catch((err) => {
        console.log("error in request", err);
      });
    },
  },
};
</script>

<style>
</style>
