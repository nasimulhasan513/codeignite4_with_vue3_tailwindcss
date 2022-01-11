<template>
  <div class="flex gap-3 justify-center">
    <router-link
      class="bg-gray-200 p-4 font-semibold"
      exact-active-class="bg-gray-300"
      to="/"
      >Home</router-link
    >
    <router-link
      class="bg-gray-200 p-4 font-semibold"
      exact-active-class="bg-gray-300"
      to="/about"
      >About</router-link
    >
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>