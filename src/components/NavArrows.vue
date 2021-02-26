<template>
  <!-- Here will be arrows back and forward -->
  <!-- <button type="button" @click="back" class="btn btn-info">Back</button>
  <button type="button"@click="forward" class="btn btn-info">Forward</button> -->
  <p>Arrows</p>
</template>

<script>
export default {
  name: "NavArrows",
  methods: {
    back() {
      this.$router.go(-1);
    },
    forward() {
      this.$router.go(1);
    },
  },
};
</script>

<style
</style>
