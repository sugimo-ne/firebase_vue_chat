<template>
  <input :type="type" class="form-control" :id="id" :placeholder="placeholder" v-model="inputVal"  @input="inputVal = $event.target.value"/>
</template>

<script>
export default {
   props:{
      type:String,
      id:String,
      value:String,
      placeholder:String
    },
    computed:{
      inputVal:{
        get:function(){
          return this.value
        },
        set:function(value){
          this.$emit('change' , value);
        }
      }
    },
}
</script>