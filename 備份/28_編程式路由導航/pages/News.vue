<template>
    <div class="news">
        <h2>你好這是新聞</h2>
        <!-- 導航區 -->
        <ul>
            <li v-for="news in newsList">
                <button @click="showNewDetail(news)">查看</button>
                <RouterLink 
                :to="{
                    name:'xiang',
                    query:{
                        id:news.id,
                        title:news.title,
                        content:news.content,
                    }
                }">
                    {{ news.title }}
                </RouterLink>

            </li>
        </ul>
        <!-- 展示區 -->
        <div class="news-content">
            <RouterView></RouterView>
        </div>
    </div>
</template>

<script setup lang="ts" name="News">
    import { reactive } from 'vue';
    import { RouterView,RouterLink, useRouter} from 'vue-router';
    import Detail from '@/pages/Detail.vue'

    const newsList = reactive([
        {id:"01",title:"狗",content:"小狗"},
        {id:"02",title:"貓",content:"小貓"},
        {id:"03",title:"機",content:"小機"},
        {id:"04",title:"朱",content:"小朱"}
    ])

    const router = useRouter()

    interface NewsInter{
        id:string,
        title:string,
        content:string,
    }

    function showNewDetail(news:NewsInter){
        router.replace({
            name:'xiang',
            query:{
                id:news.id,
                title:news.title,
                content:news.content,
            }
        })
    }
</script>

<style scoped>
    .news h2{
        text-align: center;
        font-size: 40px
    }
</style>