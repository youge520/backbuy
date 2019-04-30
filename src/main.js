import Vue from 'vue'
import App from './App.vue'
// 导入公共样式
import './assets/statics/site/css/style.css'

//导入路由
import VueRouter from 'vue-router'
//导入index的vue
import index from './components/index.vue'
//Vue.use一下
Vue.use(VueRouter)
// 写规则
const routes = [
  {
    path: '/index',
    component: index
  }
]
//实例化路由对象
const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //挂载到vue实例上
  router
}).$mount('#app')
