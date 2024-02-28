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
   :country="country" 
   :handleClickSelectedCountry="handleClickSelectedCountry" 
   :handleClickOpenedOptionsCountry="handleClickOpenedOptionsCountry" 
   :openedOptionsCountry="openedOptionsCountry" />
</template>
 

<script lang="ts" setup>
import { ref, reactive, watch } from 'vue'; 
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
const country = reactive({
  text: 'Brazil, BRA',
  url: '../src/assets/imgs/brazil.svg'
});


const handleClickOpenedOptionsCountry = () => openedOptionsCountry.value = !openedOptionsCountry.value;
const handleClickSelectedCountry = (text: string, url: string) => {
  openedOptionsCountry.value = false;
  country.text = text
  country.url = url
}


watch(openedOptionsCountry, () => {
  window.document.addEventListener('click', (event: any) => {
    if (openedOptionsCountry.value && !Boolean(event.target.id)) {
      openedOptionsCountry.value = false
    }
  })
})

</script>


<!-- 
    [x] - Implementar botão de tradutor 
    [] - Implementar tradução pagina
    [] - Implementar Dark Mode  
    [] - Responsivo 
    [] - Dropmenu
    [x] - Componentizar aplicação   
    [x] - Ajustes Finos aplicação  

 -->