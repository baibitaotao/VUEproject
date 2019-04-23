import Vue from 'vue'
import Router from 'vue-router'
import shucai from '../components/shucai.vue'
import books from '../components/books/books.vue'
import muchshucai from '../components/books/muchshucai/muchshucai.vue'


Vue.use(Router)

// console.log(shucai)

// 路由注意匹配<router-view></router-view>
export default new Router({
  routes: [
    {
      path:'/',
      name:'books',
      component:books
    },{
      path:'/shucai/:id',
      name:'shucai',
      component:shucai,
      children:[{
        path:'gogo',
        name:'muchshucai',
        component:muchshucai
        // 不能后面加s踩过的坑
      }]
    },
    // 避免乱输的情况
    {
      name:'default',
      path:'*',
      redirect:'/'
    }
  ]
})
