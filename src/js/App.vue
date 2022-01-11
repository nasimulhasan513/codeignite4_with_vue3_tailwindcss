<template>
  <div>
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  components: { Header },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>