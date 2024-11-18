<template>
    <div class="person">
        <ul>
            <li v-for="p in list" :key="p.id">{{ p.name }} -- {{ p.age }}</li>
        </ul>
    </div>
</template>
<script lang="ts" setup name="Person">
    import { defineProps,withDefaults } from 'vue';
    import { type Persons } from '@/types';

    // 只接收 list
    // defineProps(['list'])

    // 接收 list + 限制類型
    // defineProps<{list:Persons}>()

    // 接收 list + 限制類型 + 限制必要性 + 指定默認值
    withDefaults(defineProps<{list?:Persons}>(),{
        list:() => [{id:'2',name:'變變',age:566}]
    })

    
    // 接收 list , 同時將 props 保存起來
    // let x = defineProps(['list'])
    // console.log(x.list);
    

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