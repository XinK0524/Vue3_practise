<template>
    <div class="app">
        <h1>安安</h1>
        <Preson/>
    </div>
</template>

<script lang="ts">
    import Preson from './components/Preson.vue';
    export default{
        name:'App', //組件名
        components:{Preson} //註冊組件
    }
</script>

<style>
    .app{
        background-color: aquamarine;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>