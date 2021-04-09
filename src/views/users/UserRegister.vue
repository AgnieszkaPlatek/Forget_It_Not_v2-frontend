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
      <div class="text-center mt-3">
        <h5 v-if="warning" class="warning">{{ warning }}</h5>
      </div>
      <div class="submit mt-4">
        <button class="btn btn-primary btn-block px-5" type="submit">
          Sign Up
        </button>
      </div>
    </form>
    <div v-if="message" id="message" class="mt-3 mx-5 text-center message">
      <h5>{{ message }}</h5>
    </div>
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
      message: "",
      warning: "",
    };
  },
  methods: {
    register() {
      if (this.password != this.re_password) {
        this.warning = "Passwords must be equal. Try again!";
        return;
      }
      if (this.password.startsWith("qwerty")) {
        this.warning =
          "Your password should not begin with 'qwerty'. It is not safe. Try another one.";
        return;
      }
      if (this.password.length < 8) {
        this.warning = "Your password is too short. Try longer one.";
        return;
      }
      if (!/[A-Z]/.test(this.password)) {
        this.warning =
          "Your password should contain at least one uppercase letter.";
        return;
      }
      if (!/[a-z]/.test(this.password)) {
        this.warning =
          "Your password should contain at least one lowercase letter.";
        return;
      }
      if (!/[0-9]/.test(this.password)) {
        this.warning = "Your password should contain at least one digit.";
        return;
      }
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
      this.warning = "";
      this.message = "Please confirm your email to complete registration.";
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
