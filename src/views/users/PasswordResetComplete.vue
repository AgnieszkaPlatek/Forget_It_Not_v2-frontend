<template>
  <section class="mt-3">
    <div class="message">
      Your password has been changed. You can use it to sign in!
    </div>
    <div class="text-center">
      <router-link :to="{ name: 'UserLogin' }" class="btn btn-primary px-4 mt-4"
        >Sign In</router-link
      >
    </div>
  </section>
</template>

<script>
export default {
  name: "PasswordResetComplete",
};
</script>

<style>
</style>
