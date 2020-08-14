<template>
  <article class="row no-gutters p-1 mt-1">
    <user class="col-2" :css="icon"></user>
    <message class="col-10" :message="message" :time="time" :user-name="userName"></message>
    <div class="view" v-if="url">
      <img :src="url" alt="">
    </div>
  </article>
</template>

<script>
import User from '../atoms/UserIcon'
import Message from '../molecules/MessageShow'
export default {
    props:{
      message:{
        required:true,
        type:String
      },
      time:{
        required:true,
        type:Number
      },
      userName:{
        required:true,
        type:String
      },
      url:String
    },
    components:{
        User,
        Message
    },
    data(){
        return{
            icon:{ 'font-size':'2.5rem'}
        }
    }
}
</script>

<style scoped>
article {
  transition: 0.4s;
}
article:hover {
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
}
i {
  font-size: 2.5rem;
}
.view{
  height: 300px;
  width: 300px;
}
img{
  width: auto;
  height: auto;
  max-width: 80%;
  max-height: 80%;
}
</style>