<template>
    <section class="flex justify-center met-12 px-10 w-full">
    <div class="flex flex-col bg-[#F6F6F6] max-w-6xl justify-center items-center py-20 text-center">
      <div>
        <h3 class="text-[#23272A]  text-3xl font-medium mb-5">{{ $t('reliableTech.title') }}</h3>
        <p class="text-sm max-w-2xl">{{ $t('reliableTech.title') }}</p>
      </div>

      <img :src="$t('reliableTech.url')" alt="reliable_tech">

      <div>
        <p class="text-[#23272A] text-xl font-medium mb-5">{{ $t('reliableTech.journey.title') }}</p>
        <button class="bg-[#5865F2] text-white w-60 h-10 rounded-full space-x-1">
          <i class="fa-solid fa-download"></i>
          <span>{{ $t('reliableTech.journey.text') }}</span>
        </button>
      </div>
    </div>
  </section>
</template> 

<script lang="ts" setup></script>