<template>
  <form @submit="setCreate">
    <label>Name:</label>
    <input type="name" required v-model="name" />
    <button class="btn btn-primary px-4" type="submit">Create</button>
  </form>
</template>

<script>
import axios from "axios";
export default {
  name: "SetListCreate",
  data() {
    return {
      name: "",
    };
  },
  methods: {
    setCreate() {
      axios({
        method: "post",
        url: "flashcard-sets/",
        data: {
          name: this.name,
        },
        headers: {
          "Content-Type": "application/json",
          Authorization: "Token 4dcdca18cc571489b5840d2041ed8b36588e0e33",
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
  background: white;
  text-align: left;
  padding: 20px;
  border-radius: 10px;
}
label {
  color: #555;
  display: inline-block;
  font-size: 1.2em;
  margin: 20px 0 15px;
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
  margin-bottom: 20px;
}
</style>
