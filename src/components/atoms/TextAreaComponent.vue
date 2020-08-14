<template>
    <textarea name="" id="" cols="30" rows="2" :placeholder="toUser.name+'へのメッセージ'" v-model="inputVal" @input="inputVal = $event.target.value">
    </textarea>
</template>

<script>
export default {
    props:{
        value:String,
        toUser:{
            type:Object,
            required:true
        }
    },
    computed:{
        inputVal:{
            get(){
                return this.value
            },
            set(value){
                this.$emit('cahnge' , value)
            }
        }
    }
}
</script>

<style scoped>
textarea {
    resize: none;
}
</style>