<template>
  <div :class="{'wrap':modal === true}">
    <Home :users="users" :image="url" :toUser="toUser" @clickUser="setUserInfo" @fileModal="callFileModal" />
    <div v-if="modal">
      <div class="my_img_modal" @click="modal = false"></div>
      <image-modal class="modal_img_content" @fileUpload="fileUpload($event)"></image-modal>
    </div>
  </div>
</template>
<script>
import Home from "../components/templates/HomeTemp";
import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import ImageModal from "../components/molecules/ImageModal";
export default {
  computed: {
    isLogin() {
      return this.$store.getters["auth/isLogin"];
    },
  },
  created() {
    //roomの設定
    let toUserId = this.$route.params.id;
    if (toUserId) {
      firebase
        .database()
        .ref("users")
        .child(toUserId)
        .on("value", (snapshot) => {
          this.toUser = snapshot.val();
          this.setRoom(snapshot.val());
        });
    }
  },
  mounted() {
    //userCardの設定
    let users = firebase.database().ref("users");
    if (this.isLogin) {
      users.on("child_added", (snapshot) => {
        this.users.push(snapshot.val());
      });
    }
  },
  methods: {
    bodyclick() {
      if (this.modal === true) {
        this.modal = false;
      }
    },
    //画像アップの際のモーダル
    callFileModal() {
      this.modal = true;
    },
     fileUpload(file) {
      console.log(file);
      let ref = firebase.storage().ref("images/" + file.name);
      let uploadTask = ref.put(file);
      uploadTask.on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        null,
        error => {
          console.log(error)
        },
         () => {
          ref.getDownloadURL().then(url => {
            this.url = url
            console.log(url)
          })
        }
      );
      this.modal = false
    },
    //roomの設定
    setUserInfo(val) {
      this.toUser = val;
      if (this.$route.params.email !== val.email) {
        this.$router.push(`/room/${val.id}`);
        this.setRoom(val);
      }
    },
    setRoom(val) {
      this.$store.dispatch("room/createRoom", val.name);
    },
  },
  data() {
    return {
      users: [],
      toUser: {},
      toUserInfo: null,
      modal: false,
      url:null,
    };
  },
  components: {
    Home,
    ImageModal,
  },
};
</script>

<style scoped>
.wrap {
  position: relative;
  height: 100vh;
  overflow: hidden;
}
.my_img_modal {
  height: 100vh;
  width: 100%;
  top: 0;
  position: absolute;
  z-index: 1050;
  background-color: rgba(0, 0, 0, 0.3);
}
.modal_img_content {
  left:25%;
  top:20%;
  width: 50%;
  position: absolute;
  z-index: 1100;
}
</style>