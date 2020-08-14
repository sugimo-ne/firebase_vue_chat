import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home";
import Register from "./views/Register";
import Login from "./views/Login";
import TalkRoom from './components/organisms/children/TalkRoom'
import firebase from "firebase/app";
import "firebase/auth";

Vue.use(VueRouter);
 
export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home,
      name: "home",
      beforeEnter(to, from, next) {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
            next();
          } else {
            next("/login");
          }
        })
      },
      children:[
        {
          path:'room/:id',
          component:TalkRoom,
          props:true,
          name:'room'
        }
      ]
    },
    {
      path: "/register",
      component: Register,
      name: "register",
      beforeEnter(to, from, next) {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
            next("/");
          } else {
            next();
          }
        })
      },
    },
    {
      path: "/login",
      component: Login,
      name: "login",
      beforeEnter(to, from, next) {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
            next("/");
          } else {
            next();
          }
        })
      },
    },
  ],
});
