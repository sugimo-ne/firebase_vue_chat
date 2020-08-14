<template>
    <button :class="choose" class="btn" @click="clicked">{{text}}</button>
</template>

<script>
export default {
    props:{
        choose:{
            type:String,
            required:true
        },
        text:{
            type:String,
            required:true
        },
    },
    methods:{
        clicked(){
            this.$emit('clicked')
        }
    }
}
</script>

<style scoped>

</style>