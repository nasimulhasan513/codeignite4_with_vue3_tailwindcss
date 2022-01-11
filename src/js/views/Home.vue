<template>
  <div>{{ name }}</div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["name"]),
  },
};
</script>

<style lang="scss" scoped>
</style>