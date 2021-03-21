<template>
  <section>
    <h2 class="text-center mt-3">Log In</h2>
    <p>{{ username }}</p>
    <p>{{ password }}</p>
    <form @submit.prevent="authenticate">
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
  <p>{{ findTitle }}</p>
</template>

<script>
import axios from "axios";

export default {
  name: "UserLogin",
  data() {
    return {
      username: "",
      password: "",
      token: "",
    };
  },
  methods: {
    authenticate() {
      console.log("Started authenticating");
      console.log(this.$store.state.endpoints.obtainToken);
      axios({
        method: "post",
        // url: this.$store.state.endpoints.obtainToken,
        url: "auth/token/login/",
        data: {
          username: this.username,
          password: this.password,
        },
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          console.log(response.data.auth_token);
          console.log(this.findTitle);
          this.token = response.data.auth_token;
          // this.$store.commit("updateToken", response.data.auth_token);
          // this.$store.commit("setAuthUser", {
          //   authUser: response.data,
          //   isAuthenticated: true,
          // });
        })
        // const base = {
        //   baseURL: this.$store.state.endpoints.baseUrl,
        //   headers: {
        //     // Set your Authorization to 'JWT', not Bearer!!!
        //     Authorization: `Token ${this.$store.state.token}`,
        //     "Content-Type": "application/json",
        //   },
        //   xhrFields: {
        //     withCredentials: true,
        //   },
        // }})
        // this.$router.push({ name: "SetList" });
        .catch((err) => {
          console.log("error in request", err);
        });
    },
    computed: {
      findTitle() {
        return this.$store.state.title;
      },
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
