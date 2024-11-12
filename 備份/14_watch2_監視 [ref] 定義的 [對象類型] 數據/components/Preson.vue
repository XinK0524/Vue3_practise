<template>
    <div class="person">
        <h1>情況二 : 監視 [ref] 定義的 [對象類型] 數據</h1>
        <h2>名字：{{person.name}}</h2>
        <h2>幾歲：{{person.age}}</h2>
        <button @click="changeName">波浪名字</button>
        <button @click="changeAge">一年大一歲</button>
        <button @click="changePerson">變身</button>
    </div>
</template>


<script lang="ts" setup name="Person">
    import {ref , watch} from 'vue'
    // 數據
    let person = ref({
        name: "小狗",
        age: 18,
    })
    // 方法
    function changeName(){
        person.value.name += "~"
    }
    function changeAge(){
        person.value.age += 1
    }
    function changePerson(){
        person.value = {
            name : '大狗',
            age : 90,
        }
    }
    // 監視 , 情況一 : 監視 [ref] 定義的 [對象類型] 數據 , 監視的是地址值,若想要監視對象內部屬性的變化,需要手動開啟深度監視
    // watch 的第一個參數是 : 被監視的數據
    // watch 的第二個參數是 : 監視的回調
    // watch 的第三個參數是 : 配置對象 (deep , immediate等等......)
    watch(person,(newValue,oldValue)=>{
        console.log('person變身',newValue,oldValue);
    },{deep:true})
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