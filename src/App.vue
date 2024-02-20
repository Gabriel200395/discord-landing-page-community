<script lang="ts" setup>

</script>

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

      <button class="bg-white h-10 w-10 rounded">Text</button>
    </nav>


    <div class="text-center items-center flex w-full justify-center flex-col mt-20">
      <h2 class="text-white text-5xl uppercase mb-10">Imagine a place...</h2>
      <p class="text-white max-w-2xl text-lg mb-10">
        ...where you can belong to a school club, a gaming group, or a worldwide
        art community. Where just you and a handful of friends can spend time together.
        A place that makes it easy to talk every day and hang out more often.
      </p>

      <div class="max-w-lg flex space-x-3">
        <button class="bg-white w-60 rounded-full flex items-center justify-center h-10 text-sm">Download for
          Windows</button>
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
        <p class="max-w-60 text-base text-[#23272A]">Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.</p>
      </div>
    </div>
  </section> 

</template>

