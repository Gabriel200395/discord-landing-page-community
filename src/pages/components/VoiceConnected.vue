<template>
    <section class="px-10 mt-12 flex justify-center w-full">
        <div class="bg-[#F6F6F6] max-w-6xl w-full flex  justify-between py-10 px-10 items-center">
            <div>
                <h3 class="text-3xl max-w-60 text-[#23272A] font-medium mb-5">{{ $t('voiceConnected.title') }}</h3>
                <p class="max-w-60 text-base text-[#23272A]">{{ $t('voiceConnected.text') }} </p>
            </div>
            <img :src="$t('voiceConnected.url')" alt="voice-connected" class="h-96">
        </div>
    </section>
</template>

<script lang="ts" setup></script>