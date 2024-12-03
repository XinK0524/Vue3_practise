<template>
    <Preson v-if="isShow"/>
</template>

<script lang="ts" setup name="App">
    import Preson from './components/Preson.vue';
    import {ref} from 'vue'

    let isShow = ref(true)
</script>
