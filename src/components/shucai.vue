<template>
  <div>
    hello
    <!-- 在自己本身获取到自己的路由参数 -->
    <!-- {{$route.params.id}} -->
    {{$route.params.id|shucaiFn}}
    <button @click = 'jumpFn'>跳转</button> 
    <router-view></router-view> 
  </div>
</template> 


<script>
export default {
  watch: {
     '$route':(to,from) => {
      console.log(to)
    }
  },
  mounted () {
    // console.log(this.$route.params.id)
  },
  methods: {
     jumpFn(){
      //  注意跟$route.params.id区分。
       this.$router.push({name:'muchshucai'})
     } 
  },

  filters: {
    shucaiFn(params){
      if(params == 12){
        return '黄瓜'
      }
      else if(params == 21){
        return '菠萝'
      }
      else if(params == 32){
        return '牛肉'
      }
    }
  }

}
</script>

<style lang="less" scoped>




</style>
