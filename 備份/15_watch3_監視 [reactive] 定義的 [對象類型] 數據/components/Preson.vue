<template>
    <div class="person">
        <h1>情況三 : 監視 [reactive] 定義的 [對象類型] 數據</h1>
        <h2>名字：{{person.name}}</h2>
        <h2>幾歲：{{person.age}}</h2>
        <button @click="changeName">波浪名字</button>
        <button @click="changeAge">一年大一歲</button>
        <button @click="changePerson">變身</button>
        <hr>
        <h2>測試:{{obj.a.b.c}}</h2>
        <button @click="changeObj">換測試</button>
    </div>
</template>


<script lang="ts" setup name="Person">
    import {reactive , watch} from 'vue'
    // 數據
    let person = reactive({
        name: "小狗",
        age: 18,
    })
    let obj = reactive({
        a:{
            b:{
                c:777
            }
        }
    })
    // 方法
    function changeName(){
        person.name += "~"
    }
    function changeAge(){
        person.age += 1
    }
    function changePerson(){
        Object.assign(person,{name:'大狗', age:90})
    }

    function changeObj(){
        obj.a.b.c = 333
    }
    
    // 監視, 情況三 : 監視 [reactive] 定義的 [對象類型] 數據 ,且默認開啟深度監視的
    watch(person,(newValue,oldValue)=>{
        console.log('person變化',newValue,oldValue);
        
    })
    watch(obj,(newValue,oldValue)=>{
        console.log('obj變化',newValue,oldValue);
        
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