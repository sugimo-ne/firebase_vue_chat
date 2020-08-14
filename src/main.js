import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase/app";
import "firebase/auth";

Vue.config.productionTip = false;

var firebaseConfig = {
  apiKey: "AIzaSyDp3MZnSm2Xu03TRJycDzjs8ueSPX4sgrU",
  authDomain: "vue-firebase-chat-5e5c4.firebaseapp.com",
  databaseURL: "https://vue-firebase-chat-5e5c4.firebaseio.com",
  projectId: "vue-firebase-chat-5e5c4",
  storageBucket: "vue-firebase-chat-5e5c4.appspot.com",
  messagingSenderId: "897025505886",
  appId: "1:897025505886:web:7c3970c544dfa63a2f12cf"
};

firebase.initializeApp(firebaseConfig);

   new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");

    firebase
    .auth()
    .onAuthStateChanged((user) => {
      if(user){
        store.commit("auth/setUser", user);
      }
    })