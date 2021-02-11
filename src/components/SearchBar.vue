<template>
  <div id="home_search" class="search-container mb-5 mt-3 mt-lg-5">
    <form action="">
      <input
        type="text"
        placeholder="Search for flashcard"
        name="search"
        class="mb-4 mb-md-2"
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
  float: left;
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
</style>
