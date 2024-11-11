<template>
    <div class="person">
        <h1>情況一 : 監視 [ref] 定義的 [基本數據] 數據</h1>
        <h2>總和:{{sum}}</h2>
        <button @click="changeSum">點我++</button>
    </div>
</template>


<script lang="ts" setup name="Person">
    import {ref , watch} from 'vue'
    // 數據
    let sum = ref(0)

    // 方法
    function changeSum(){
        sum.value += 1 
    }
    // 監視 , 情況一 : 監視 [ref] 定義的 [基本數據] 數據
    const stopWatch = watch(sum,(newValue , oldValue )=>{
        console.log('sum變了', newValue , oldValue);
        if(newValue >= 10){
            stopWatch()
        }
    })
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