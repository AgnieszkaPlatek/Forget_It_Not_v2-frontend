<template>
  <section>
    <h2 class="text-center mt-3">Register account</h2>
    <form @submit.prevent="register">
      <label>Username:</label>
      <input type="username" required v-model="username" />
      <label>Email:</label>
      <input type="email" required v-model="email" />
      <label>Password:</label>
      <input type="password" required v-model="password" />
      <label>Password confirmation:</label>
      <input type="password" required v-model="re_password" />
      <div class="submit mt-5">
        <button class="btn btn-primary btn-block px-5" type="submit">
          Sign Up
        </button>
      </div>
    </form>
    <div class="text-center pt-3">
      <small class="text-muted">
        Already Have An Account?
        <router-link :to="{ name: 'UserLogin' }" class="ml-2" href=""
          >Sign In</router-link
        >
      </small>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "UserRegister",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      re_password: "",
    };
  },
  methods: {
    register() {
      axios({
        method: "post",
        url: "auth/users/",
        data: {
          username: this.username,
          email: this.email,
          password: this.password,
          re_password: this.password,
        },
      }).catch((err) => {
        console.log("error in request", err);
      });
      this.$router.push("sets");
    },
  },
};
</script>

<style scoped>
form {
  max-width: 500px;
  margin: auto;
  background: white;
  text-align: left;
  border-radius: 15px;
}
label {
  color: #555;
  display: inline-block;
  font-size: 1.1em;
  margin: 25px 0 5px;
  font-weight: bold;
}
input {
  display: block;
  padding: 10px 6px;
  width: 100%;
  border: none;
  border-bottom: 2px solid #ddd;
  color: #555;
  background-color: #ffffff;
}
</style>
