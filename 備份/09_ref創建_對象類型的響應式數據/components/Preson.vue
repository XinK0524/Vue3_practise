<template>
    <div class="person">
        <h2>一輛{{car.brand}}，要{{car.price}}萬</h2>
        <button @click="changePrice">點點看</button>

        <h2>遊戲列表:</h2>
        <ul>
            <li v-for="game in games" :key="game.id">{{ game.name }}</li>
        </ul>
        <button @click="changeName">改名字</button>
    </div>
</template>


<script lang="ts" setup name="Person">
    import{ref} from'vue'

    // 數據
    let car = ref({brand:"BMW" , price:100})
    let games = ref([
        {id:'01',name:'英雄聯盟'},
        {id:'02',name:'明星三缺一'},
        {id:'03',name:'大便大便'}
    ])
    

    // 方法
    function changePrice(){
        car.value.price += 10
        console.log(car.value.price);
    }
    function changeName(){
        games.value[0].name = "尿尿小童"
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