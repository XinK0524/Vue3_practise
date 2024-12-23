<template>
    <div class="news">
        <h2>你好這是新聞</h2>
        <!-- 導航區 -->
        <ul>
            <li v-for="news in newsList">
                <!-- 第一種寫法 -->
                <!-- <RouterLink :to="`/news/detail/${news.id}/${news.title}/${news.content}`">{{ news.title }}</RouterLink> -->

                <!-- 第二種寫法 -->
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
    import { RouterView,RouterLink } from 'vue-router';
    import Detail from '@/pages/Detail.vue'

    const newsList = reactive([
        {id:"01",title:"狗",content:"小狗"},
        {id:"02",title:"貓",content:"小貓"},
        {id:"03",title:"機",content:"小機"},
        {id:"04",title:"朱",content:"小朱"}
    ])
</script>

<style scoped>
    .news h2{
        text-align: center;
        font-size: 40px
    }
</style>