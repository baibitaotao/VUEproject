<template>
    <div>我是hello1
        <span>蛋蛋</span>
        <a href="#">我是五号</a>
        <div>好样的</div>
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
