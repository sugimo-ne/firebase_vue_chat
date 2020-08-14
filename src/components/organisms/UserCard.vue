<template>
  <div class="row no-gutters" @click="clicked">
    <user :image="image" :css="css" class="col-3"></user>
    <div class="col-9">
      {{name}}
      <br />
      {{email}}
    </div>
  </div>
</template>

<script>
import User from "../atoms/UserIcon";
export default {
    data(){
        return{
            css:{
                'font-size':'2.5rem'
            }
        }
    },
  props: {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    id:{
      type:String,
      required:true
    },
    image: String,
  },
  methods:{
    clicked(){
    this.$emit('clickUser' , {
      name:this.name,
      email:this.email,
      image:this.image||null,
      id:this.id
    })
    }
  },
  components: {
    User,
  },
};
</script>

<style scoped>
</style>