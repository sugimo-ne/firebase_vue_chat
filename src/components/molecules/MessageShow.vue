<template>
  <div>
    <small>
      {{userName}}
      <span class="mr-5"></span>
      {{getTime}}
    </small>
    <p>{{message}}</p>
  </div>
</template>

<script>
export default {
  computed: {
    getTime() {
      let dateTime = new Date(this.time);
      return dateTime.toLocaleDateString() + '-'+dateTime.toLocaleTimeString();
    },
  },
  props: {
    time: {
      type: Number,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
</style>