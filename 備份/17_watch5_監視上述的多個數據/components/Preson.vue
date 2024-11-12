<template>
    <div class="person">
        <h1>情況五 : 監視上述的多個數據</h1>
        <h2>名字:{{person.name}}</h2>
        <h2>幾歲:{{person.age}}</h2>
        <h2>我的車:{{person.car.c1}}{{person.car.c2}}</h2>
        <button @click="changeName">改名</button>
        <button @click="changeAge">過生日</button>
        <button @click="changeC1">修第一台車</button>
        <button @click="changeC2">修第二台車</button>
        <button @click="changeCars">修全部車</button>
    </div>
</template>
<script lang="ts" setup name="Person">
    import { reactive, watch } from 'vue';
import { walk } from 'vue/compiler-sfc';
    // 數據
    let person = reactive({
        name : "dog",
        age : 13,
        car:{
            c1:"BMW",
            c2:"本田"
        }
    })

    // 方法
    function changeName(){
        person.name += "~"
    }
    function changeAge(){
        person.age += 1
    }
    function changeC1(){
        person.car.c1 = "寶馬"
    }
    function changeC2(){
        person.car.c2 = "保時捷"
    }
    function changeCars(){
        person.car = {c1:"TOYOTA",c2:"YAA"}
    }

     // 監視， 情況五 : 監視上述的多個數據
    watch([()=> person.name,()=> person.car.c1],(newValue,oldValue)=>{
        console.log('person.car變化',newValue,oldValue);
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