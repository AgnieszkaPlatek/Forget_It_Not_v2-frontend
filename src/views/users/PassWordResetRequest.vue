<template>
  <section class="mt-3 mx-1">
    <h3 class="text-center mt-3">Reset password</h3>
    <form @submit.prevent="resetPassword">
      <label>Email:</label>
      <input type="email" required v-model="email" />
      <div class="submit mt-5 text-center">
        <button class="btn btn-primary px-5" type="submit">
          Request password reset
        </button>
      </div>
      <div v-if="message" class="mt-4 message">
        <h5>{{ message }}</h5>
      </div>
    </form>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "PasswordResetRequest",
  data() {
    return {
      message: "",
      email: "",
    };
  },
  methods: {
    resetPassword() {
      axios({
        method: "post",
        url: "auth/users/reset_password/",
        data: {
          email: this.email,
        },
      }).catch((err) => {
        console.log("error in request", err);
        this.message = "The email is wrong. Please try again.";
        return;
      });
      this.message =
        "An email has been sent with instructions to reset your password.";
    },
  },
};
</script>

<style>
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