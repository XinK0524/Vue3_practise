// 創建一個路由器，並暴露出去

// 第一步: 引入 createRouter
import { createRouter,createWebHistory } from "vue-router";
// 引入一個個要呈現的組件
import Home from "@/pages/Home.vue";
import News from "@/pages/News.vue";
import About from "@/pages/About.vue";
import Detail from "@/pages/Detail.vue";

// 第二步: 創建路由器
const router = createRouter({
    history:createWebHistory(), // 路由器的工作模式
    routes:[ // 一個個的路由規則
        {
            path:'/home',
            component:Home
        },
        {
            path:'/about',
            component:About
        },
        {
            path:'/news',
            component:News,
            children:[
                {
                    name:'xiang',
                    path:'detail',
                    component:Detail,

                    // 第一種方法 : 將路由收到的所有 params 參數作為 props 傳給路由組件 
                    // props:true,

                    // 第二種寫法 : 函數寫法，可以自己決定將甚麼作為 props 給路由組件
                    props(route){
                        return route.query
                    },

                    // 第三種寫法 : 對象寫法，可以自己決定將甚麼作為 props 給路由組件
                    // props:{
                    //     a:100,
                    //     b:200,
                    //     c:300
                    // }
                }
            ]
        }
    ]
})

// 暴露出去
export default router