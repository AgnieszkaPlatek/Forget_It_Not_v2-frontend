<template>
  <div>
    <button id="left" type="button" @click="back" class="arrow btn btn-sm px-4">
      &lt;
    </button>
    <button
      id="right"
      type="button"
      @click="forward"
      class="arrow btn btn-sm px-4"
    >
      &gt;
    </button>
    <br />
  </div>
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

<style scoped>
.arrow {
  font-weight: bold;
  font-size: 2em;
  color: #92c5fc;
  background: #ffffff;
}
.arrow:hover {
  background: #ffffff;
  font-size: 2.2em;
  color: #5ba9fc;
}
#left {
  float: left;
}
#right {
  float: right;
}
</style>
