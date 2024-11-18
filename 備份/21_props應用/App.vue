<template>
    <Preson a="haha" :list="personList"/>
</template>

<script lang="ts" setup name="App">
    import Preson from './components/Preson.vue';
    import { reactive } from 'vue';
    import { type Persons } from './types';

    let personList = reactive<Persons>([
        {id:'1',name:'dog',age:65},
        {id:'2',name:'cat',age:95},
        {id:'3',name:'book',age:25}
    ])
</script>
