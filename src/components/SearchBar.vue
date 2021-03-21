<template>
  <div class="search-container">
    <form @submit.prevent="check(query)">
      <input
        id="search"
        type="text"
        placeholder="Search for flashcard"
        v-model="query"
      />
      <button data-toggle="modal" data-target="#searchModal">
        <i type="submit" class="fa fa-search"></i>
      </button>
    </form>
  </div>
</template>
<script>
export default {
  name: "SearchBar",
  emits: ["search"],
  data() {
    return {
      query: "",
      checked_query: "",
    };
  },
  mounted() {},
  methods: {
    check(query) {
      if (query && query.length > 2) {
        // this.checked_query = query;
        this.$emit("search", query);
        console.log("Checking query");
        console.log(query);
      }
    },
    // findInSet(query) {
    //   console.log("Searching in set");
    //   axios
    //     .get("flashcard-sets/" + this.id + "/?search=" + query, {
    //       headers: {
    //         Authorization: "Token 4dcdca18cc571489b5840d2041ed8b36588e0e33",
    //       },
    //     })
    //     .then((response) =>
    //       (this.result = JSON.stringify(
    //         response.data["flashcards"]
    //       )).catch((error) => console.log(error))
    //     );
    //   this.$emit("result", this);
    // },
  },
};
</script>
<style scoped>
.search-container {
  width: 100%;
}

.search-container input[type="text"] {
  padding: 6px;
  font-size: 17px;
  border: none;
  background: #f2f2f2;
  float: left;
}

.search-container button {
  padding: 6px 12px;
  background: #dddddd;
  font-size: 17px;
  border: none;
  cursor: pointer;
  float: left;
}

.search-container button:hover {
  background: #bbbbbb;
}

@media (max-width: 991px) {
  .search-container {
    max-width: 100%;
    margin-left: 0px;
  }
  .search-container input[type="text"] {
    max-width: 90%;
  }
  .search-container button {
    margin: 0px;
    padding: 6px 10px;
  }
}

#search {
  width: 250px;
  margin-left: 20px;
}
@media (max-width: 1100px) {
  #search {
    margin-bottom: 10px;
    width: 200px;
  }
  /* #search:focus {
    width: 400px;
    max-width: 87%;
    margin-bottom: 10px;
  } */
}
</style>
