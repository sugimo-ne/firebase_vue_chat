<template>
  <form @submit.prevent="login">
    <strong v-if="error" class="text-danger">{{error}}</strong>
    <FormGroup
      v-for="form_item  in form_items"
      :key="form_item.id"
      :id="form_item.id"
      :type="form_item.type"
      :placeholder="form_item.placeholder"
      :label="form_item.label"
      :value="form_item.value"
      @changeVal="form_item.value = $event"
    />
    <button class="btn btn-primary form-control">ログイン</button>
  </form>
</template>

<script>
import FormGroup from "../molecules/FormGroup";
export default {
  props:['error'],
  components: {
    FormGroup,
  },
  data() {
    return {
      check:false,
      form_items: {
        email:{
          id: "email",
          type: "email",
          placeholder: "mail",
          label: "メールアドレス",
          value: "",
        },
        password:{
          id: "password",
          type: "password",
          placeholder: null,
          label: "パスワード",
          value: "",
        },
      },
    };
  },
  methods: {
    login() {
      this.check = true
      let userInfo = {};
      Object.keys(this.form_items).forEach((item) => {
        userInfo[item] = this.form_items[item].value;
      });
      this.$store.dispatch("auth/login", userInfo)
     },
  },
};
</script>