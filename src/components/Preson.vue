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
        data(){
            return{
                name:'狗',
                age:18,
                tel:'09090990'
            }
        },
        methods: {
            changeName(){
                this.name = '貓'
            },
            changeAge(){
                this.age += 1
            },
            showTel(){
                alert(this.tel)
            }
            
        },
        
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