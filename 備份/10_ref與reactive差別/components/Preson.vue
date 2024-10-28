<template>
    <div class="person">
        <h2>一輛{{car.brand}}，要{{car.price}}萬</h2>
        <button @click="changeBrand">改牌子</button>
        <button @click="changePrice">改價格</button>
        <button @click="changeCcar">改車子</button>
        <hr>
        <h2>總額{{sum}}</h2>
        <button @click="changeSum">點我總額++</button>
    </div>
</template>


<script lang="ts" setup name="Person">
    import{ref,reactive} from'vue'

    // 數據
    let car = reactive({brand:"BMW" , price:100})
    let sum = ref(0)

    // 方法
    function changePrice(){
        car.price += 10
        console.log(car.price);
    }
    function changeBrand(){
        car.brand = "賓士"
    }
    function changeCcar(){
        // car = {brand:"奧迪" , price:150} //這個頁面不會更新
        // car = reactive({brand:"奧迪" , price:150}) //這個頁面不會更新

        // 下面這個方法葉面會更新
        Object.assign(car,{brand:"奧迪" , price:150})
    }
    function changeSum(){
        sum.value += 1
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