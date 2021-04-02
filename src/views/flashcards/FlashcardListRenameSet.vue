<template>
  <form @submit="setRename">
    <label>New name:</label>
    <input type="name" required v-model="new_name" />
    <button class="btn btn-primary px-5" type="submit">Rename</button>
  </form>
</template>

<script>
import axios from "axios";
export default {
  name: "FlashcardListRenameSet",
  props: ["id"],
  data() {
    return {
      new_name: "",
    };
  },
  methods: {
    setRename() {
      console.log("Renaming set");
      axios({
        method: "patch",
        url: "flashcard-sets/" + this.id + "/",
        data: {
          name: this.new_name,
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
  font-size: 1.1em;
  margin: 25px 0 10px;
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
