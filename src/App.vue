

<template>
  <section class="h-screen bg-[url('../src/assets/imgs/background_img.svg')] bg-cover bg-bottom ">
    <nav class=" w-full flex items-center justify-between py-3 px-10">
      <img src="../src/assets/imgs/logo.svg" />

      <ul class="flex list-none space-x-10">
        <li class="text-white text-base">Download</li>
        <li class="text-white text-base">Nitro</li>
        <li class="text-white text-base">Discover</li>
        <li class="text-white text-base">Safety</li>
        <li class="text-white text-base">Support</li>
        <li class="text-white text-base">Blog</li>
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


    <div class="text-center items-center flex w-full justify-center flex-col mt-20 ring-none h-">
      <h2 class="text-white text-5xl uppercase mb-10">Imagine a place...</h2>
      <p class="text-white max-w-2xl text-lg mb-10">
        ...where you can belong to a school club, a gaming group, or a worldwide
        art community. Where just you and a handful of friends can spend time together.
        A place that makes it easy to talk every day and hang out more often.
      </p>

      <div class="max-w-lg flex space-x-3">
        <button class="bg-white w-60 rounded-full flex items-center justify-center h-10 text-sm space-x-2">
          <i class="fa-solid fa-download"></i>
          <span>Download for Windows</span></button>
        <button class="bg-[#23272A] w-60 rounded-full flex items-center justify-center h-10 text-white text-sm">Open
          Discord in your browser</button>
      </div>
    </div>
  </section>

  <section class="px-10 mt-12 flex justify-center w-full">
    <div class="flex max-w-6xl w-full justify-between px-10">
      <img src="../src/assets/imgs/create_invite.svg" alt="invite-img" class="h-96">
      <div>
        <h3 class="text-3xl max-w-48 text-[#23272A] font-medium mb-5">Create an invite-only place where you belong</h3>
        <p class="max-w-60 text-base text-[#23272A]">Discord servers are organized into topic-based channels where you can
          collaborate, share, and just talk about your day without clogging up a group chat.</p>
      </div>
    </div>
  </section>

  <section class="px-10 mt-12 flex justify-center w-full">
    <div class="bg-[#F6F6F6] max-w-6xl w-full flex  justify-between py-10 px-10 items-center">

      <div>
        <h3 class="text-3xl max-w-60 text-[#23272A] font-medium mb-5">Where hanging out is easy</h3>
        <p class="max-w-60 text-base text-[#23272A]">Grab a seat in a voice channel when you’re free. Friends in your
          server can see you’re around and instantly pop in to talk without having to call.</p>
      </div>

      <img src="../src/assets/imgs/voice_connected.svg" alt="voice-connected" class="h-96">
    </div>
  </section>

  <section class="px-10 mt-12 flex justify-center w-full">
    <div class="max-w-6xl w-full flex justify-between py-10 px-10 items-center">
      <img src="../src/assets/imgs/from_to_fandom.svg" alt="from-to-fandom" class="h-96">
      <div>
        <h3 class="text-3xl max-w-60 text-[#23272A] font-medium mb-5">From few to a fandom</h3>
        <p class="max-w-60 text-base text-[#23272A]">Get any community running with moderation tools and custom member
          access. Give members special powers, set up private channels, and more.</p>
      </div>
    </div>
  </section>

  <section class="flex justify-center met-12 px-10 w-full">
    <div class="flex flex-col bg-[#F6F6F6] max-w-6xl justify-center items-center py-20 text-center">
      <div>
        <h3 class="text-[#23272A]  text-3xl font-medium mb-5">Reliable tech for staying close</h3>
        <p class="text-sm max-w-2xl">Low-latency voice and video feels like you’re in the same room. Wave hello over
          video, watch friends stream
          their games, or gather up and have a drawing session with screen share.</p>
      </div>

      <img src="../src/assets/imgs/reliable_tech .svg" alt="reliable_tech">

      <div>
        <p class="text-[#23272A] text-xl font-medium mb-5">Ready to start your journey?</p>
        <button class="bg-[#5865F2] text-white w-60 h-10 rounded-full space-x-1">
          <i class="fa-solid fa-download"></i>
          <span> Download for Windows</span>
        </button>
      </div>
    </div>
  </section>

  <footer class="bg-[#23272A] h-[450px] px-10 py-10">
    <div class="w-full flex border-b border-[#5865F2]">
      <div class="w-1/5">
        <h4 class="text-[#5865F2] uppercase text-2xl w-32">Imagine a place</h4>

        <!-- Aqui-->

        <button class="flex items-center py-3 px-2  text-white text-sm w-48" @click="handleClickOpenedOptionsCountry" id="country" >
          <img v-bind:src="country.url" alt="us" class="h-4 mr-3" />
          {{ country.text }}        
         </button>
     

          <ul v-if="openedOptionsCountry" class="bg-slate-500 h-[70px] w-48 rounded absolute z-10">
          <li class="flex  space-x-3 px-2 py-2 cursor-pointer hover:bg-slate-400"
            @click="() => handleClickSelectedCountry('English, USA', '../src/assets/imgs/us.svg')" id="country">
            <img src="../src/assets/imgs/us.svg" alt="us" class="h-4" />
            <p class="text-white text-sm">English, USA</p>
          </li>
          <li class="flex  space-x-3 px-2 py-2 cursor-pointer  hover:bg-slate-400"
            @click="() => handleClickSelectedCountry('Brazil, BRA', '../src/assets/imgs/brazil.svg')" id="country">
            <img src="../src/assets/imgs/brazil.svg" alt="us" class="h-4" />
            <p class="text-white text-sm">Brazil, BRA</p>
          </li>
        </ul>

        


        <ul class="flex text-white space-x-3">
          <li><i class="fa-brands fa-twitter cursor-pointer"></i></li>
          <li><i class="fa-brands fa-instagram cursor-pointer"></i></li>
          <li><i class="fa-brands fa-facebook cursor-pointer"></i></li>
          <li><i class="fa-brands fa-youtube cursor-pointer"></i></li>
        </ul>

      </div>

      <div class="w-4/5  flex justify-between pt-2 pb-10">
        <div>
          <h5 class="text-[#5865F2] mb-2 text-base">Product</h5>
          <ul>
            <li class="text-sm text-white mb-2">Download</li>
            <li class="text-sm text-white mb-2">Nitro</li>
            <li class="text-sm text-white mb-2">Status</li>
          </ul>
        </div>

        <div>
          <h5 class="text-[#5865F2] text-lg mb-2">Company</h5>
          <ul>
            <li class="text-sm text-white mb-2">About</li>
            <li class="text-sm text-white mb-2">Jobs</li>
            <li class="text-sm text-white mb-2">Branding</li>
            <li class="text-sm text-white mb-2">Newsroom</li>
          </ul>
        </div>
        <div>
          <h5 class="text-[#5865F2] text-lg mb-2">Product</h5>
          <ul>
            <li class="text-sm text-white mb-2">Download</li>
            <li class="text-sm text-white mb-2">Nitro</li>
            <li class="text-sm text-white mb-2">Status</li>
          </ul>
        </div>
        <div>
          <h5 class="text-[#5865F2] text-lg mb-2">Resources</h5>
          <ul>
            <li class="text-sm text-white mb-2">College</li>
            <li class="text-sm text-white mb-2">Support</li>
            <li class="text-sm text-white mb-2">Safety</li>
            <li class="text-sm text-white mb-2">Blog</li>
            <li class="text-sm text-white mb-2">Feedback</li>
            <li class="text-sm text-white mb-2">Developers</li>
            <li class="text-sm text-white mb-2">StreamKit</li>
          </ul>
        </div>

        <div>
          <h5 class="text-[#5865F2] text-lg mb-2">Policies</h5>
          <ul>
            <li class="text-sm text-white mb-2">Terms</li>
            <li class="text-sm text-white mb-2">Privacy</li>
            <li class="text-sm text-white mb-2">Cookie Settings</li>
            <li class="text-sm text-white mb-2">Guidelines</li>
            <li class="text-sm text-white mb-2">Acknowledgements</li>
            <li class="text-sm text-white mb-2">Licenses</li>
            <li class="text-sm text-white mb-2">Moderation</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="flex py-10 justify-between w-full">
      <img src="../src/assets/imgs/logo.svg" alt="logo" />
      <button class="bg-[#5865F2] cursor-pointer text-white text-sm w-28 rounded-full">Open Discord</button>
    </div>
  </footer>
</template>
 

<script lang="ts" setup>
import Toggle from '@vueform/toggle'
import { ref, reactive, watchEffect } from 'vue';

const toogle = ref(false);
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

 
watchEffect(() => {
  window.document.addEventListener('click', (event: any) => {
    if(openedOptionsCountry.value && !Boolean(event.target.id)) { 
       openedOptionsCountry.value = false
    }
  })
})
 



</script>


<!-- 
    [] - Implementar botão de tradutor 
    [] - Implementar tradução pagina
    [] - Implementar Dark Mode  
    [] - Responsivo 
    [] - Dropmenu
    [] - Componentizar aplicação  
 -->