<template>
  <main class="container">
    <ul>
      <li v-for="talk in talkContent" :key="talk.key">
        <talk-card
          :message="talk.content"
          :time="talk.createdAt"
          :user-name="talk.user.name"
          :url="talk.url"
        ></talk-card>
      </li>
    </ul>
  </main>
</template>

<script>
import TalkCard from "../TalkCard";
import firebase from "firebase/app";
import "firebase/database";
export default {
  data() {
    return {
      roomId: null,
      talkContent: [],
    };
  },
  computed: {
    currentUser() {
      return this.$store.getters["auth/currentUser"];
    },
    paramsId() {
      return this.$route.params.id;
    },
  },
  created() {
    this.paramsId > this.currentUser.uid
      ? (this.roomId = this.currentUser.uid + "-" + this.paramsId)
      : (this.roomId = this.paramsId + "-" + this.currentUser.uid);
    this.fetchRoom(this.paramsId);
  },
  mouted() {
    this.fetchRoom(this.paramsId);
  },
  methods: {
    scrollBottom() {
      this.$nextTick(() => {
        window.scrollTo(0, document.body.clientHeight)
      })
    },
    fetchRoom() {
      firebase
        .database()
        .ref("messages")
        .child(this.roomId)
        .on("child_added", (snapshot) => {
          this.talkContent.push(snapshot.val());
          this.$nextTick(() => {
            this.scrollBottom()
          });
        });
    },
  },
  watch: {
    paramsId: {
      handler(newVal) {
        this.talkContent = [];
        newVal > this.currentUser.uid
          ? (this.roomId = this.currentUser.uid + "-" + newVal)
          : (this.roomId = newVal + "-" + this.currentUser.uid);
        firebase
          .database()
          .ref("messages")
          .child(this.roomId)
          .on("value", (snapshot) => {
            this.talkContent = snapshot.val();
          });
      },
    },
  },
  components: {
    TalkCard,
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
</style>