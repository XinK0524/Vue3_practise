<template>
    <ul class="news-list">
        <li>編號: {{ query.id }}</li>
        <li>標題: {{ query.title }}</li>
        <li>內容: {{ query.content }}</li>
    </ul>
</template>

<script setup lang="ts" name="About">
import { toRefs } from 'vue';
import { useRoute } from 'vue-router';

let route = useRoute()
let {query} = toRefs(route)

</script>

<style>
    .news-list{
        list-style: none;
        padding-left: 20px;
    }
    .news-list>li{
        line-height: 30px;
    }
</style>