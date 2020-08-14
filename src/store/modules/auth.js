import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

//import router from "../../router";

const state = {
  currentUser: null,
};
const mutations = {
  setUser(state, user) {
    state.currentUser = user;
  },
};

const getters = {
  isLogin: (state) => !!state.currentUser,
  currentUser: (state) => state.currentUser || null,
};

const actions = {
  register(context, data) {

    firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password)
      .then((response) => {
        firebase
          .database()
          .ref("users")
          .child(response.user.uid)
          .set({
            user_id: response.user.uid,
            name: data.name,
            email: response.user.email,
          })
          .then(() => {
            let name = firebase.auth().currentUser;
            name.updateProfile({
              displayName: data.name,
            });
            
          }).catch((e) => {
              console.log(e)
          });
        
      })
      .catch((e) => {
        if (e.code == "auth/email-already-in-use") {
          context.commit(
            "error/setError",
            "入力したメールアドレスは登録済みです。",
            { root: true }
          );
        } else {
          context.commit(
            "error/setError",
            "入力したメールアドレスかパスワードに問題があります。",
            { root: true }
          );
        }
      });
  },
  login(context, data) {
    console.log(data);
    firebase
      .auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then((response) => {
        context.commit("setUser", response.user);
      })
      .catch(() => {
        context.commit(
          "error/setError",
          "入力したメールアドレスかパスワードに問題があります。",
          { root: true }
        );
      });
  },
  signOut(context) {
    firebase.auth().signOut();
    context.commit("setUser", null);
    this.$router.push("/login");
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
