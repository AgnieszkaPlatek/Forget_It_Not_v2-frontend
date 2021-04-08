<template>
  <section>
    <h3 class="text-center mt-3">Change your password</h3>
    <form @submit.prevent="confirm">
      <label>New password:</label>
      <input type="password" required v-model="new_password" />
      <label>Retype new password:</label>
      <input type="password" required v-model="re_new_password" />
      <div class="submit mt-5">
        <button class="btn btn-primary btn-block px-5" type="submit">
          Confirm new password
        </button>
      </div>
    </form>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "PasswordResetConfirm",
  props: ["uid", "token"],
  data() {
    return {
      new_password: "",
      re_new_password: "",
    };
  },
  methods: {
    confirm() {
      if (this.new_password != this.re_new_password) {
        this.message = "The passwords are not equal. Try again!";
        return;
      }
      axios({
        method: "post",
        url: "auth/users/reset_password_confirm/",
        data: {
          uid: this.uid,
          token: this.token,
          new_password: this.new_password,
          re_new_password: this.re_new_password,
        },
      }).catch((err) => {
        console.log("error in request", err);
      });
      this.$router.push({ name: "PasswordResetComplete" });
    },
  },
};
</script>

<style scoped>
form {
  max-width: 400px;
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
  border-bottom: 1.5px solid #ddd;
  color: #555;
  background-color: #ffffff;
}
</style>