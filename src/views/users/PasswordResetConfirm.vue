<template>
  <section>
    <h3 class="text-center mt-3">Change your password</h3>
    <form @submit.prevent="confirm">
      <label>New password:</label>
      <input type="password" required v-model="new_password" />
      <label>Retype new password:</label>
      <input type="password" required v-model="re_new_password" />
      <div class="text-center mt-3">
        <h5 v-if="warning" class="warning">{{ warning }}</h5>
      </div>
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
      warning: "",
    };
  },
  methods: {
    confirm() {
      if (this.new_password != this.re_new_password) {
        this.warning = "Passwords must be equal. Try again!";
        return;
      }
      if (this.new_password.startsWith("qwerty")) {
        this.warning =
          "Your password should not begin with 'qwerty'. It is not safe. Try another one.";
        return;
      }
      if (this.new_password.length < 8) {
        this.warning = "Your password is too short. Try longer one.";
        return;
      }
      if (!/[A-Z]/.test(this.new_password)) {
        this.warning =
          "Your password should contain at least one uppercase letter.";
        return;
      }
      if (!/[a-z]/.test(this.new_password)) {
        this.warning =
          "Your password should contain at least one lowercase letter.";
        return;
      }
      if (!/[0-9]/.test(this.new_password)) {
        this.warning = "Your password should contain at least one digit.";
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