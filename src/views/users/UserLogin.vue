<template>
  <section>
    <h2 class="text-center mt-3">Log In</h2>
    <p>{{ username }}</p>
    <p>{{ password }}</p>
    <form @submit="register">
      <label>Username:</label>
      <input type="username" required v-model="username" />
      <label>Password:</label>
      <input type="password" required v-model="password" />
      <div class="submit mt-5">
        <button class="btn btn-primary btn-block px-5" type="submit">
          Sign In
        </button>
      </div>
    </form>
    <div class="text-center mt-2">
      <small class="text-muted">
        <a href="">Forgot password?</a>
      </small>
    </div>
    <div class="text-center pt-3">
      <small class="text-muted">
        Need An Account?
        <router-link :to="{ name: 'UserRegister' }" class="ml-2"
          >Sign Up Now</router-link
        >
      </small>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "UserLogin",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    register() {
      axios({
        method: "post",
        url: "api/auth/users/",
        data: {
          username: this.username,
          password: this.password,
        },
        headers: {
          "Content-Type": "application/json",
        },
      }).catch((err) => {
        console.log("error in request", err);
      });
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
