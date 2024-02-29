<template>
  <section class="h-screen bg-[url('../src/assets/imgs/background_img.svg')] bg-cover bg-bottom ">
    <Navbar />
    <Information />
  </section>

  <CreateInvate />
  <VoiceConnected />
  <FromToFandom />
  <ReliableTech />
  <Footer :country="country" :handleClickSelectedCountry="handleClickSelectedCountry"
    :handleClickOpenedOptionsCountry="handleClickOpenedOptionsCountry" :openedOptionsCountry="openedOptionsCountry" />
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


const languages = {
  EN: {
    menus: ['Baixa', 'Nitro', 'Descobrir', 'Segurança', 'Suporte', 'Blog'],
    information: {
      titulo: 'IMAGINE UM LUGAR...',
      text: '...onde você pode pertencer a um clube escolar, a um grupo de jogos ou a uma comunidade artística mundial. Onde apenas você e alguns amigos podem passar algum tempo juntos. Um lugar que facilita conversar todos os dias e sair com mais frequência.',
      buttons: ['Baixar para Windows', 'Open Discord in your browser'],
    },
    createInvite: {
      titulo: 'Create an invite-only place where you belong',
      text: 'Os servidores Discord são organizados em canais baseados em tópicos onde você pode colaborar, compartilhar e apenas falar sobre o seu dia sem atrapalhar um bate-papo em grupo.',
      url: '../../../src/assets/imgs/create_invite.svg'
    },
    voiceConnected: {
      title: 'Where hanging out is easy',
      text: 'Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call.',
      url: '../../../src/assets/imgs/voice_connected.svg'
    },
    fromToFandom: {
      title: 'Where hanging out is easy',
      text: 'Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.',
      url: '../../../src/assets/imgs/from_to_fandom.svg'
    },
    reliableTech: {
      title: 'Reliable tech for staying close',
      text: 'Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.',
      url: '../../../src/assets/imgs/reliable_tech .svg'
    },
    footer: [
      {
        id: 1,
        title: 'Product',
        list: ['Download', 'Nitro', 'Status']
      },
      {
        id: 2,
        title: 'Company',
        list: ['About', 'Jobs', 'Branding', 'Newsroom']
      },
      {
        id: 3,
        title: 'Resources',
        list: ['College', 'Support', 'Safety', 'Blog', 'Feedback', 'Developers', 'StreamKit']
      },
      {
        id: 4,
        title: 'Policies',
        list: ['Terms', 'Privacy', 'Cookie Settings', 'Guidelines', 'Acknowledgements', 'Licenses', 'Moderation']
      },
    ]
  }
}

console.log(languages)
</script> 



