<script lang="ts" setup>

</script>

<template>
  <section class="h-screen bg-[#5865F2] bg-[url('../src/assets/imgs/fundo.svg')] bg-cover">
    <nav class=" w-full flex items-center justify-between py-3 px-10">
      <img src="../src/assets/imgs/logo.png" />

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
        <button class="bg-white w-60 rounded-full flex items-center justify-center h-10 text-sm">Download for Windows</button>
        <button class="bg-[#23272A] w-60 rounded-full flex items-center justify-center h-10 text-white text-sm">Open Discord in your browser</button>
      </div>
    </div>
  </section>
</template>

