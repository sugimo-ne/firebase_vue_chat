<template>
  <i class="fas fa-paperclip" @click="clicked"></i>
</template>

<script>
export default {
    methods:{
        clicked(){
            this.$emit('fileSelect')
        }
    }
}
</script>