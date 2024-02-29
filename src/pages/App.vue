<template>
  <section class="h-screen bg-[url('../src/assets/imgs/background_img.svg')] bg-cover bg-bottom ">
    <Navbar />
    <Information />
  </section>

  <CreateInvate />
  <VoiceConnected />
  <FromToFandom />
  <ReliableTech />
  <Footer 
  :lang="lang" 
  :handleClickOpenedOptionsLang="handleClickOpenedOptionsLang"
  :handleClickSelectedLang="handleClickSelectedLang" 
  :openedOptionsLang="openedOptionsLang" 
  />
</template>
 

<script lang="ts" setup>
import { ref, reactive } from 'vue';
import {
  Navbar,
  Information,
  CreateInvate,
  VoiceConnected,
  FromToFandom,
  ReliableTech,
  Footer
} from './components'

const openedOptionsLang = ref(false);
const lang = reactive({
  text: 'Brazil, BRA',
  url: '../src/assets/imgs/brazil.svg'
});


const handleClickOpenedOptionsLang = () => openedOptionsLang.value = !openedOptionsLang.value;
const handleClickSelectedLang = (text: string, url: string) => {
  openedOptionsLang.value = false;
  lang.text = text
  lang.url = url
}

</script> 



