<template>
    <div class="app">
        <Header/>
        <!-- 導航區 -->
        <div class="navigate">
            <RouterLink replace to="/home" active-class="active">首頁</RouterLink>
            <RouterLink replace to="/news" active-class="active">新聞</RouterLink>
            <RouterLink replace to="/about" active-class="active">關於</RouterLink>
        </div>
        <!-- 展示區 -->
        <div class="content">
            <RouterView></RouterView>
        </div>
    </div>
</template>

<script lang="ts" setup name="App">
    import { RouterView,RouterLink } from 'vue-router';
    import Header from '@/components/Header.vue'


</script>

<style>
    .navigate{
        display: flex;
        justify-content: space-around;
        margin: 20px 100px;
    }
    .navigate a{
        display: block;
        background-color: rgb(255, 136, 156);
        color: white;
        font-size: 15px;
        padding: 5px 25px;
        text-align: center;
        text-decoration: none;
        border-radius: 10px;
    }
    .navigate a.active{
        background-color: rgb(204, 48, 74);
        color: rgb(255, 255, 255);
    }
    .content{
        width: 80%;
        height: 500px;
        margin: 0 auto;
        border: 1px solid black;
        border-radius: 10px;
        padding: 20px;
    }
</style>
