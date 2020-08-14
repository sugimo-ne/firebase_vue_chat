<template>
  <div>
      <h4 class="border-bottom">画像アップロード</h4>
    <output v-if="preview" class="text-center">
      <img :src="preview" />
    </output>
    <input type="file" @change="onFileSelected" />
    <button class="btn btn-info" @click="fileUpload">添付する</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileName: null,
      preview: null,
    };
  },
  methods: {
    onFileSelected(event) {
      if (event.target.files.length === 0) {
        this.reset();
        return false;
      }
      if (!event.target.files[0].type.match("image.*")) {
        this.reset();
        return false;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        this.preview = e.target.result;
      };
      this.fileName = event.target.files[0];
      reader.readAsDataURL(event.target.files[0]);
    },
    reset() {
      this.preview = "";
      this.fileName = "";
      this.$el.querySelector('input[type="file"]').value = null;
    },
    fileUpload(){
        console.log(this.fileName)
        this.$emit('fileUpload' , this.fileName)
    }
  },
};
</script>

<style scoped>
div {
  padding:40px 25px;
  background-color: white;
  height:400px;
  width:450px;
  overflow: scroll;
}
output{
  height: 300px;
  width: 300px;
  max-width: 100%;
  max-height: 100%;
}
img {
  width: auto;
  height: auto;
  max-width: 80%;
  max-height: 80%;
}
</style>