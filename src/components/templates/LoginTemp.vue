<template>
  <div>
    <header-component></header-component>
    <div class="container pt-5">
        <div class="p-5 border col-8 offset-2">
            <h2 class="mb-5">ログイン</h2>
        <login-form :error="error"/>
        </div>
        
    </div>
  </div>
</template>

<script>
import HeaderComponent from '../organisms/Header'
import LoginForm from '../organisms/LoginFrom'
export default {
  props:['error'],
  components:{
    LoginForm,
    HeaderComponent
  }
}
</script>