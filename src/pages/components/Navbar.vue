<template>
    <nav class=" w-full flex items-center justify-between py-3 px-10">
        <img src="../../../src/assets/imgs/logo.svg" />

        <ul class="flex list-none space-x-10">
        <li class="text-white text-base" v-for="menu in $tm('menus')" :key="menu">{{ menu }}</li>
        </ul>

        <Toggle v-model="toogle" v-bind:classes="{
            container: 'inline-block rounded-full outline-none',
            toggle: 'flex w-14 h-6 rounded-full relative cursor-pointer transition items-center box-content text-xs leading-none',
            toggleOn: 'bg-[#000000] justify-start text-white',
            toggleOff: 'bg-[#5865F2] justify-end text-gray-700',
            toggleOnDisabled: 'bg-[#5865F2] justify-start text-gray-400 cursor-not-allowed',
            toggleOffDisabled: 'bg-[#5865F2]   justify-end text-gray-400 cursor-not-allowed',
            handle: 'inline-block bg-white w-6 h-6 top-0 rounded-full absolute transition-all',
            handleOn: 'left-full transform -translate-x-full',
            handleOff: 'left-0',
            handleOnDisabled: 'bg-[#5865F2]  left-full transform -translate-x-full',
            handleOffDisabled: 'bg-[#5865F2]  left-0',
            label: 'text-center w-8 border-box whitespace-nowrap select-none',
        }" />
    </nav>
</template> 

<script lang="ts" setup>
import { ref } from 'vue'
import Toggle from '@vueform/toggle'
const toogle = ref(false);

</script>