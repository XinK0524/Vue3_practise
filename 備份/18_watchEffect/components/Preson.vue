<template>
    <div class="person">
        <h2>需求 : 當水溫達到60度，或水位達到80cm時，給伺服器發送請求</h2>
        <h2>當前水溫 : {{ temp }} 度</h2>
        <h2>當前水位 : {{ height }} cm</h2>
        <button @click="changetemp">水溫+10</button>
        <button @click="changeheight">水位+10</button>
    </div>
</template>
<script lang="ts" setup name="Person">
    import {ref,watch,watchEffect} from 'vue'

    // 數據
    let temp = ref(10)
    let height = ref(0)

    // 方法
    function changetemp(){
        temp.value += 10
    }
    function changeheight(){
        height.value += 10
    }

    // 監視
    /* watch([temp,height],(Value) => {
        // 從 Value 中獲取最新的水溫(newTemp)、最新的水位(newHeight)
        let [newTemp,newHeight] = Value
        // 邏輯
        if(newTemp >= 60 || newHeight >= 80){
            console.log('發情球');
            
        }
    }) */
    
    // 監視 -- watchEffect實現
    watchEffect(()=>{
        if(temp.value >= 60 || height.value >= 80){
            console.log('發情球');
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