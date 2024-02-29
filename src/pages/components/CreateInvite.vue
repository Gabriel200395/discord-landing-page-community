<template>
    <section class="px-10 mt-12 flex justify-center w-full">
    <div class="flex max-w-6xl w-full justify-between px-10">
      <img :src="$t('createInvite.url')" alt="invite-img" class="h-96">
      <div>
        <h3 class="text-3xl max-w-48 text-[#23272A] font-medium mb-5">{{ $t('createInvite.title') }}</h3>
        <p class="max-w-60 text-base text-[#23272A]">{{ $t('createInvite.text') }}</p>
      </div>
    </div>
  </section>
</template> 

<script lang="ts" setup></script>