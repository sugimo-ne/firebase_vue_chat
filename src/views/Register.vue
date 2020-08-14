<template>
  <div>
    <Register :error="errorMessage"/>
  </div>
</template>

<script>
import Register from "../components/templates/RegisterTemp";
export default {
  computed: {
    errorMessage() {
      return this.$store.getters["error/getError"];
    },
  },
  components: {
    Register,
  },
};
</script>