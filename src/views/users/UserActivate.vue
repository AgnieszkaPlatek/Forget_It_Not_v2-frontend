<template>
  <section class="mt-3 ml-3">
    <div v-if="activated" class="mt-4 mb-4 message">
      <h4 class="h5">Your email has been confirmed. You can now log in!</h4>
    </div>
    <div class="text-center">
      <router-link :to="{ name: 'UserLogin' }" class="btn btn-lg btn-b px-4"
        >Log In</router-link
      >
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "UserActivate",
  props: ["uid", "token"],
  data() {
    return {
      activated: "",
    };
  },
  mounted() {
    axios({
      method: "post",
      url: "auth/users/activation/",
      data: {
        uid: this.uid,
        token: this.token,
      },
    }).catch((err) => {
      console.log("error in request", err);
      return;
    });
    this.activated = true;
  },
};
</script>

<style>
</style>