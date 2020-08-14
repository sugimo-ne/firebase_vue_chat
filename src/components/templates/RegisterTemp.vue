<template>
  <div>
    <header-component></header-component>
    <div class="container pt-5">
      <div class="col-8 offset-2 p-5 border">
        <h2>登録</h2>
        <register-form :error="error"/>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "../organisms/Header";
import RegisterForm from "../organisms/RegisterForm";
export default {
  props:['error'],
  components: {
    RegisterForm,
    HeaderComponent,
  },
};
</script>