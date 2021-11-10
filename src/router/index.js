import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home"
import Login from "../views/Login"
import Register from "../views/Register"
import Search from "../views/Search"

//重写push和replace方法
//目的：为了让编程式导航重复点击时不报错

const push = VueRouter.prototype.push
const replace = VueRouter.prototype.replace

VueRouter.prototype.push = function(location,onComplate,onabort){
    // 如果用户想处理失败，就处理
    if(onComplate&&onabort){
       return push.call(this,location,onComplate,onabort)
    }
    // 如果用户不想处理失败，就给默认值：空行函
       return push.call(this,location,onComplate,()=>{})
}

VueRouter.prototype.replace = function(location,onComplate,onabort){
    // 如果用户想处理失败，就处理
    if(onComplate&&onabort){
       return replace.call(this,location,onComplate,onabort)
    }
    // 如果用户不想处理失败，就给默认值：空行函
       return replace.call(this,location,onComplate,()=>{})
}


Vue.use(VueRouter);

export default new VueRouter({
    routes:[{
        path:'/',
        component:Home
    },
    {
        path:'/login',
        component:Login,
        meta:{
            isFooterHide: true
        }
    },
    {
        path:'/register',
        component:Register,
        meta:{
            isFooterHide: true
        }
    },
    {
        name:'Search',
        //？代表params参数可选的
        path:'/search/:searchText?',
        component:Search
    }
]
})