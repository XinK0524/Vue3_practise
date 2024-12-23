<template>
    <div class="home">
        <h2>你好這是家</h2>
    </div>
</template>

<script setup lang="ts" name="Home">
    import { onMounted } from 'vue';
    import { useRouter } from 'vue-router';
    
    const router = useRouter()

    // onMounted(() => {
    //     setTimeout(()=>{
    //         // 在此處編寫一段代碼，讓路由跳轉
    //         router.push('/news')
    //     },3000)
    // })

</script>

<style scoped>
    .home h2{
        text-align: center;
        font-size: 40px
    }
</style>