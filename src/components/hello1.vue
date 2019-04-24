<template>
    <div>我是hello1
        <span>蛋蛋</span>
        <span>我是牛牛</span>
    </div>
</template>


<script>
export default {
    mounted () {
        this.eventBus.$emit('goBrother',this.transmitFn)    
    },

    data () {
        return {
            s1:'haode'
        }
    },
    props:{
        eventBus:Object,
    },
    methods: {
         transmitFn(){
             return ' transmitData'
         }
    }
}
</script>
