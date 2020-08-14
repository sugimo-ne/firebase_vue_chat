<template>
  <div>
    <div class="items pb-1 row">
      <div class="col-3">
         <!-- <input type="file" @change="fileUpload" /> -->
         <clip-icon @fileSelect="fileSelect"></clip-icon>
      </div>
      <div class="col-3 offset-5 text-right">
        <button-item :text="'送信'" :choose="'btn-primary'" @clicked="sendMessage"></button-item>
      </div>
    </div>
    <text-area class="w-100" :toUser="toUser" :value="value" @cahnge="cahngeVal"></text-area>
  </div>
</template>

<script>
import TextArea from "../atoms/TextAreaComponent";
import ButtonItem from "../atoms/ButtonItem";
import clipIcon from '../atoms/clipIcon'
export default {
  props:{
    value:String,
    toUser:{
      required:true,
      type:Object
    }
  },
  components: {
    TextArea,
    ButtonItem,
    clipIcon
  },
  methods:{
    fileSelect(){
      this.$emit('fileSelect')
    },
    // fileUpload(event){
    //   this.$emit('fileChange' , event.target.files[0])
    // },
    sendMessage(){
      this.$emit('sendMessage')
    },
    cahngeVal(value){
      this.$emit('change' , value)
    }
  }
};
</script>