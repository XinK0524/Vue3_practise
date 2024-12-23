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
                    component:Detail
                }
            ]
        }
    ]
})

// 暴露出去
export default router