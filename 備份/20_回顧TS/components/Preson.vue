<template>
    <div class="person">
        ???
    </div>
</template>
<script lang="ts" setup name="Person">
    import {type PersonInter,type Persons} from "@/types"
    
    // let person:PersonInter = {id:"1111",name:'dog',age:80}
    
    let personList:Persons = [
        {id:"1111",name:'dog',age:80},
        {id:"2222",name:'cat',age:30},
        {id:"3333",name:'book',age:60},
    ]

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