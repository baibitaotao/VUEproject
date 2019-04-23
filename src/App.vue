
<template>
  <div class="cantain"> 
    <p>我是app的标签</p>
    <div class="top">
      <div style="float:left"><span>编号:</span><input type="number" v-model="code"></div>
      <div style='float:left;margin-left:5px'><span>品牌名称:</span><input type="text" v-model="name"></div>
      <button style="margin-left:5px" @click="addFn">添加</button>
    </div>
    <div class="center">
        <span>品牌名称:</span>
        <input type="text" v-model="search">
    </div>
    <div class="bottom">
      <table border="1px solid #ccc" cellpadding='0' cellspacing='0'>
        <thead><td>编号</td><td>品牌名称</td><td>创立时间</td><td>操作</td></thead>
        <tr v-for="(item,index) in arr" :key="index"><td>{{item.id}}</td><td>{{item.name}}</td><td>{{item.creatTime}}</td><td @click="deletFn(index)">删除</td></tr>
        <tr v-if="!arr.length"><td colspan="4">没有更多的品牌数据</td></tr>
      </table>
    </div>

    <div>{{filterparams|name}}</div>
    <div><input type="text" v-model="arr[0].id"></div>
    <hello :sonData='goSon' @gofather = 'jieshouFn' :eventBus = 'eventBus'></hello>
    <hello1 :eventBus = 'eventBus'></hello1>
    <ul>
      <li><router-link to = '/'>首页</router-link></li>
      <li><router-link to = '/shucai/12'>蔬菜</router-link></li>
      <li><router-link to = '/shucai/21'>水果</router-link></li>
      <li><router-link to = '/shucai/32'>肉类</router-link></li>
    </ul>
    
    <component :is = 'componentName'></component>
    <router-view></router-view> 
  </div>
</template>

<script>

import moment from 'moment'
import Vue from 'vue'
import hello from './components/hello.vue'
import hello1 from './components/hello1.vue'
import home from './components/home'
import shucai from './components/shucai'
import books from './components/books/books'

Vue.filter('name',function (paramas){
  return '滚'
})

const eventBus = new Vue()

export default{

data () {
  return {
    code:null,
    name:null,
    search:null,
    arr:[{id:1,name:'lv',creatTime:'2019.1.12'},{id:2,name:'cc',creatTime:'2019.1.14'},{id:3,name:'bb',creatTime:'2019.1.13'}],
    filterparams:'abc',
    goSon:['a','b','c'],
    eventBus:eventBus,
    componentName:'home'
 }
},

computed: {
  fullName(){
    return this.code + this.name
  }
},

watch: {
    arr:{
      handler(newval,oldval){
        // console.log(newval[0].id,oldval[0].id)
      },
      deep:true,
    }

},

methods:{
jieshouFn(val){
  
},
deletFn(index){
   this.arr.splice(index,1)
  },
addFn(){
  if(this.code === null && this.name === null){
    return
  }    

  let obj = {}
  obj.id = this.code
  obj.name = this.name
  obj.creatTime = moment().format('YYYY.MM.DD')
  this.arr.push(obj)
}
},
// 子组件的注册，否则不能使用
components: {
  hello,
  hello1,
  home,
  shucai
}

}
</script>

<style lang="less" scoped>

p{
  color:green;
}

.cantain{
  min-width: 400px;
  max-width: 600px;
  padding:10px;
  margin:0 auto;
  border: 1px solid #ccc;
  .top{
    background-color: yellow;
    overflow: hidden;
    padding:5px;
  }
  .center{
    background-color:yellowgreen;
    padding: 10px;
  }
  .bottom{
    table{
      width:100%;
      text-align: center;
      tr{
        :nth-last-child(1){
          color:lightblue;
          cursor: pointer;
        }
      }
    }
  }

}

</style>







