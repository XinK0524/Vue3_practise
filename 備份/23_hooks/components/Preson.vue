<template>
    <div class="person">
        <h2>總和{{sum}} , 十倍數 {{bigSum}}</h2>
        <button @click="add">加加</button>
        <hr>
        <img v-for="(dog,index) in dogList" :src="dog" alt="" :key="index">
        <br>
        <button @click="getDog">來狗</button>
    </div>
</template>
<script lang="ts" setup name="Person">
    import useSum from '@/hooks/useSum';
    import useDog from '@/hooks/useDog';

    const {sum,add,bigSum} = useSum()
    const {dogList,getDog} = useDog()
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
    img{
        height: 100px;
        margin: 10px;
    }
</style>