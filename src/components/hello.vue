<template>
  <div>hello
    <p v-for="(item,index) in sonData" :key="index" ref = 'pref'>{{item}}</p>
    <span>{{fatherName|guolvqiFn}}</span>  
  </div>
</template> 


<script>
export default {
  watch: {
   
  },
  // 局部过滤器
  filters: {
    guolvqiFn(params){
      // console.log(params)
    }
  },
  // 所有都么有
  beforeCreate(){
    // console.log(this.$data,this.$el,this.fatherName)
  },
  // data数据存在，dom没有，指令没有
 created () {
    // console.log(this.$data,this.$el,this.fatherName)
 },
// data，dom都有，指令没有
beforeMount () {
    // console.log(this.$data,this.$el,this.fatherName)
},
  // data数据，dom，指令渲染完毕  
 mounted () {
    this.$emit('gofather',this.fatherName)
    // console.log(this.$data,this.$el,this.fatherName)
    this.eventBus.$on('goBrother',(data) => {
      // console.log(data())
    })  
  },

  data () {
    return {
      fatherName:'我是父亲的数据'
    }
  },
  props:{
    sonData:Array,
    eventBus:Object,
  }

}
</script>

<style lang="less">

p{
  color:yellow
}


</style>
