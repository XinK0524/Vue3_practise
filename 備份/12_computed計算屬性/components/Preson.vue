<template>
    <div class="person">
        姓: <input type="text" v-model="firstName"><br>
        名: <input type="text" v-model="lastName"><br>
        <button @click="changeFullname">改名字摟</button><br>
        全名: <span>{{fullName}}</span><br>
        全名: <span>{{fullName}}</span><br>
        全名: <span>{{fullName}}</span><br>
        全名: <span>{{fullName}}</span><br>
    </div>
</template>


<script lang="ts" setup name="Person">
    import{ref,computed} from "vue"
    
    let firstName = ref("大")
    let lastName = ref("狗")

    // 這定義的fullName是一個計算屬性，且只能讀
    // let fullName = computed(()=>{
    //     console.log(1);
        
    //     return firstName.value.slice(0,1).toLocaleUpperCase() + firstName.value.slice(1) + "-" +lastName.value
    // })

    // 這定義的fullName是一個計算屬性，可讀可寫
    let fullName = computed({
        get(){
            return firstName.value.slice(0,1).toLocaleUpperCase() + firstName.value.slice(1) + "-" +lastName.value
        },
        set(val){
            const [s1,s2] = val.split('-')
            firstName.value = s1
            lastName.value = s2
        }
    })

    function changeFullname(){
        fullName.value = '小-狗'
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