<template>
  <div class="text-center items-center flex w-full justify-center flex-col mt-20 ring-none h-">
    <h2 class="text-white text-5xl uppercase mb-10">{{ $t('information.title') }}</h2>
    <p class="text-white max-w-2xl text-lg mb-10">
      {{ $t('information.text') }}
    </p>

    <div class="max-w-lg flex space-x-3">
      <button class="bg-white w-60 rounded-full flex items-center justify-center h-10 text-sm space-x-2">
        <i class="fa-solid fa-download"></i>
        <span>Download for Windows</span></button>
      <button class="bg-[#23272A] w-60 rounded-full flex items-center justify-center h-10 text-white text-sm">Open
        Discord in your browser</button>
    </div>
  </div>
</template> 

<script lang="ts" setup></script>