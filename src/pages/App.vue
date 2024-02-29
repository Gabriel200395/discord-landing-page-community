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
  :openedOptionsCountry="openedOptionsCountry" 
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

const openedOptionsCountry = ref(false);
const lang = reactive({
  text: 'Brazil, BRA',
  url: '../src/assets/imgs/brazil.svg'
});


const handleClickOpenedOptionsLang = () => openedOptionsCountry.value = !openedOptionsCountry.value;
const handleClickSelectedLang = (text: string, url: string) => {
  openedOptionsCountry.value = false;
  lang.text = text
  lang.url = url
}

</script> 



