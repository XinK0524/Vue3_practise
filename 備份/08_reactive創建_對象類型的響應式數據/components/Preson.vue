<template>
    <div class="person">
        <h2>一輛{{car.brand}}，要{{car.price}}萬</h2>
        <button @click="changePrice">點點看</button>

        <h2>遊戲列表:</h2>
        <ul>
            <li v-for="game in games" :key="game.id">{{ game.name }}</li>
        </ul>
        <button @click="changeName">改名字</button>
        <hr>
        <h2>深層肌膚{{ obj.a.b.c }}</h2>
        <button @click="changeObj">改數字</button>
    </div>
</template>


<script lang="ts" setup name="Person">
    import{reactive} from'vue'

    // 數據
    let car = reactive({brand:"BMW" , price:100})
    let games = reactive([
        {id:'01',name:'英雄聯盟'},
        {id:'02',name:'明星三缺一'},
        {id:'03',name:'大便大便'}
    ])
    let obj = reactive({
        a:{
            b:{
                c:777
            }
        }
    })

    // 方法
    function changePrice(){
        car.price += 10
        console.log(car.price);
    }
    function changeName(){
        games[0].name = "尿尿小童"
    }
    function changeObj(){
        obj.a.b.c = 999
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