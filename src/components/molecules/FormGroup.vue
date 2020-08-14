<template>
    <div class="form-group">
        <label :for="id">{{ label }}</label>
        <InputFrom
          :type="type"
          class="form-control"
          :id="id"
          :placeholder="placeholder"
          :value="value"
          @change="changeVal"
        />
      </div>
</template>

<script>
import InputFrom from '../atoms/InputFrom'
export default {
    props:{
      label:String,
      type:String,
      id:String,
      value:String,
      placeholder:String
    },
    methods:{
      changeVal(value){
        this.$emit('changeVal' , value);
      }
    },
    components:{
        InputFrom
    }
}
</script>