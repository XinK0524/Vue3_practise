<template>
    <div class="person">
        <h2>姓名:{{ name }}</h2>
        <h2>年齡:{{ age }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年齡</button>
        <button @click="showTel">看看我的電話</button>
    </div>
</template>

<script lang="ts">
    export default{
        name:'person', //組件名
        setup(){
            // console.log(this) // setup 函數中的 this 是 undefined , Vue3中已經弱化 this 了
            // 數據, 原本寫在 data 中的，此時的 name 、age、tel 都不是響應式的數據
            let name = '狗' 
            let age = 18 
            let tel = '09222222' 

            // 方法
            function changeName(){
                name = '貓'        // 這樣修改 name ,頁面是沒有變化的
                console.log(name) // name 有修改了 , 但 name 不是響應式的
            }
            function changeAge(){
                age += 1          // 這樣修改 age ,頁面是沒有變化的
                console.log(age)  // age 有修改了 , 但 age 不是響應式的
            }
            function showTel(){
                alert(tel)
            }

            //將數據、方法交出去，模板才能使用
            // return{name , age ,changeName,changeAge,showTel}

            // setup 的返回值也可以是一個渲染函數
            return () => '安安'
        }
        
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