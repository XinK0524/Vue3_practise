<template>
    <div class="person">
        <h1>台灣</h1>
        <h2 ref="title2">美國</h2>
        <h3>德國</h3>
        <button @click="showLog">點我輸出</button>
    </div>
</template>
<script lang="ts" setup name="Person">
    import {ref,defineExpose} from 'vue'

// 創建一個title2 , 用於存儲ref標記的內容
    let title2 = ref()
    let a = ref(0)
    let b = ref(1)
    let c = ref(2)
    

    function showLog(){
        console.log(title2.value);
    }
    
    defineExpose({a,b,c})
</script>

<style scoped>
    .person{
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
    button{
        padding: 10px;
        margin: 10px;
    }
</style>