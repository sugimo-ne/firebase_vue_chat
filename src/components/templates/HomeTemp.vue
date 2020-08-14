<template>
  <div class="row no-gutters">
    <div class="col-md-1 hidden-xs hidden-sm hidden-md border-right side-menu bg-dark"></div>
    <div
      class="col-md-4 offset-md-1 hidden-xs hidden-sm hidden-md border-right side-menu bg-light text-dark"
    >
      <ul>
        <li>
          <user-card 
          class="border"
          v-for="user in users" :key="user.email"
          :class="{'aboutUser':user.user_id == $route.params.id}"
          :email="user.email"
          :name="user.name"
          :image="user.image"
          :id="user.user_id"
          @clickUser="clickUser"></user-card>
        </li>
      </ul>
    </div>
    <div class="col-md-7 offset-md-5">
      <header-component class="fixed-top offset-md-5 col-md-7"></header-component>

      <router-view></router-view>

      <Message class="fixed-bottom offset-md-5 col-md-7 bg-light" :image="image" :toUser="toUser" @fileModal="fileModal"></Message>
    </div>
  </div>
</template>
<script>
import HeaderComponent from "../organisms/Header";
import Message from "../organisms/MessageForm";
import UserCard from '../organisms/UserCard' 
export default {
  props:{
    image:String,
    users:{
      type:Array,
      required:true
    },
    toUser:{
      required:true,
      type:Object
    },
  },
  components: {
    HeaderComponent,
    Message,
    UserCard
  },
  methods:{
    fileModal(){
      this.$emit('fileModal')
    },
    clickUser(val){
    this.$emit('clickUser' , val)
    }
  },
};
</script>

<style scoped>
.side-menu {
  height: 100vh;
  position: fixed;
}
ul{
  list-style-type: none;
  padding: 0;
}
.high {
}
main {
  padding-top: 60px;
  padding-bottom: 120px;
}
.aboutUser{
  background-color: rgba(137, 199, 235, 0.212);
}

@media screen and (max-width: 639px) {
  .side-menu {
    display: none;
  }
}
@media only screen and (min-width: 640px) and (max-width: 767px) {
  .side-menu {
    display: none;
  }
}
</style>