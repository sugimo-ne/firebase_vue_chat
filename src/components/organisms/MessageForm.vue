<template>
  <div class="border-top pt-3">
    <message-group
      class="ml-2 mr-2"
      :toUser="toUser"
      :value="value"
      @change="value = $event"
      @sendMessage="sendMessage($event)"
      @fileSelect="fileSelect"
    ></message-group>
    <!-- @fileChange="fileUpload($event)" -->
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";
import MessageGroup from "../molecules/MessageGroup";
export default {
  computed: {
    currentUser() {
      return this.$store.getters["auth/currentUser"];
    },
    paramsId() {
      return this.$route.params.id;
    },
  },
  data() {
    return {
      value: null,
      url:null,
    };
  },
  props: {
    toUser: {
      required: true,
      type: Object,
    },
    image:String
  },
  methods: {
    fileSelect(){
      this.$emit('fileModal')
    },
    // fileUpload(file) {
    //   console.log(file);
    //   let ref = firebase.storage().ref("images/" + file.name);
    //   let uploadTask = ref.put(file);
    //   uploadTask.on(
    //     firebase.storage.TaskEvent.STATE_CHANGED,
    //     null,
    //     error => {
    //       console.log(error)
    //     },
    //      () => {
    //       ref.getDownloadURL().then(url => {
    //         this.url = url
    //         console.log(url)
    //       })
    //     }
    //   );
    // },
    sendMessage() {
      let roomId = null;
      this.paramsId > this.currentUser.uid
        ? (roomId = this.currentUser.uid + "-" + this.paramsId)
        : (roomId = this.paramsId + "-" + this.currentUser.uid);
      let newMessage = firebase.database().ref("messages").child(roomId).push();
      let key_id = newMessage.key;
      newMessage
        .set({
          key: key_id,
          content: this.value,
          user: {
            name: this.currentUser.displayName,
            email: this.currentUser.email,
            image: this.currentUser.photoURL || null,
          },
          createdAt: firebase.database.ServerValue.TIMESTAMP,
          url: this.image,
        })
        .then(() => {
          this.value = null;
        });
    },
  },
  watch:{
    paramsId:{
      handler(){
        this.value = null
      }
    }
  },
  components: {
    MessageGroup,
  },
};
</script>