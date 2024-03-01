<template>
   <section class="px-10 mt-12 flex justify-center w-full">
    <div class="max-w-6xl w-full flex justify-between py-10 px-10 items-center">
      <img :src="$t('fromToFandom.url')" alt="from-to-fandom" class="h-96">
      <div>
        <h3 class="text-3xl max-w-60 text-[#23272A] font-medium mb-5">{{ $t('fromToFandom.title') }}</h3>
        <p class="max-w-60 text-base text-[#23272A]">{{ $t('fromToFandom.text') }}</p>
      </div>
    </div>
  </section>
</template> 

<script lang="ts" setup></script>