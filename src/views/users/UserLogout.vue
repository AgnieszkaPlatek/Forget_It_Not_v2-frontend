<template>
  <section class="mt-3 ml-3">
    <div class="mt-4 mb-4">
      <h2 class="h3">You have been logged out</h2>
    </div>
    <div class="border-top">
      <router-link :to="{ name: 'UserLogin' }" class="small"
        >Log In Again</router-link
      >
    </div>
  </section>
</template>

<script>
export default {
  name: "UserLogout",
};
</script>

<style scoped>
router-link {
  color: #0000ff;
}
</style>