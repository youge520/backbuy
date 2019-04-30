import Vue from 'vue'
import App from './App.vue'
// 导入公共样式
import './assets/statics/site/css/style.css'

//导入饿了么ui
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

//导入路由
import VueRouter from 'vue-router'
//导入index的vue
import index from './components/index.vue'
//导入detail的vue
import detail from './components/detail.vue'

//Vue.use一下
Vue.use(VueRouter)
// 写规则
const routes = [
  //index的规则
  {
    path: '/index',
    component: index
  },
  //detail规则
  {
    // path: '/detail',
    //修改路径规则动态的携带id
    path: '/detail/:id',
    component: detail
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
