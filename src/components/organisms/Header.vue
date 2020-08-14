<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark border-bottom">
    <div class="container">
      <!-- <router-link class="navbar-brand mr-auto" to="/" v-if="currentUser">{{currentUser.displayName}}</router-link> -->
      <span class="navbar-brand mr-auto" v-if="currentUser">{{roomName}}</span>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <span class="mr-auto"></span>
        <ul class="navbar-nav" v-if="!currentUser">
          <li class="nav-item">
            <router-link class="nav-link" to="/register">Register</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>
        </ul>
        <ul class="navbar-nav" v-else>
            <li class="nav-item">
            <!-- <router-link class="nav-link" to="/login">{{currentUser}}</router-link> -->
          </li>
          <li class="nav-item">
            <button class="btn btn-danger" @click="signOut">signOut</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
    computed:{
        currentUser(){
            return this.$store.getters["auth/currentUser"]
        },
        roomName(){
          return this.$store.getters["room/getRoom"]||'メッセージ'
        }
    },
    methods:{
      signOut(){
        this.$store.dispatch('auth/signOut')
      }
    }
}
</script>