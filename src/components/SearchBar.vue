<template>
  <div class="search-container">
    <form action="">
      <input
        id="search"
        type="text"
        placeholder="Search for flashcard"
        name="search"
      />
      <button type="submit"><i class="fa fa-search"></i></button>
    </form>
  </div>
</template>
<script>
export default {
  name: "SearchBar",
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
    float: none;
  }
  .search-container input[type="text"],
  .search-container button {
    text-align: left;
    margin: 0;
    padding: 6px 10px;
  }
}

#search {
  width: 200px;
  transition: width 0.5s ease;
}
#search:focus {
  width: 400px;
  max-width: 80%;
}
@media (max-width: 1100px) {
  #search:focus {
    width: 400px;
    max-width: 87%;
  }
}
</style>
