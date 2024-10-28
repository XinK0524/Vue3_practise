<template>
    <div class="person">
        <h2>大名:{{person.name}}</h2>
        <h2>幾歲:{{person.age}},{{ n1 }}</h2>
        <button @click="changeName">波浪名</button>
        <button @click="changeAge">長大了</button>
    </div>
</template>


<script lang="ts" setup name="Person">
    import{reactive,toRefs,toRef}from"vue"

    // 數據
    let person = reactive({
        name:"狗",
        age:10
    })

    let {name,age} = toRefs(person)
    let n1 = toRef(person,'age')
    console.log(n1.value);
    

    // 方法
    function changeName(){
        name.value += "~"
        console.log(name.value , person.name);
        
    }
    function changeAge(){
        age.value += 1
    }
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