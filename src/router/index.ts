// 創建一個路由器，並暴露出去

// 第一步: 引入 createRouter
import { createRouter,createWebHistory } from "vue-router";
// 引入一個個要呈現的組件
import Home from "@/components/Home.vue";
import News from "@/components/News.vue";
import About from "@/components/About.vue";

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
            component:News
        }
    ]
})

// 暴露出去
export default router