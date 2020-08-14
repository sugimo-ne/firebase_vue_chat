<template>
  <div>
    <Login :error="errorMessage"/>
  </div>
</template>

<script>
import Login from "../components/templates/LoginTemp";
export default {
  computed: {
    errorMessage() {
      return this.$store.getters["error/getError"];
    },
  },
  components: {
    Login,
  },
};
</script>