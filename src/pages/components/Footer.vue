<template>
    <footer class="bg-[#23272A] h-[450px] px-10 py-10">
        <div class="w-full flex border-b border-[#5865F2]">
            <div class="w-1/5">
                <h4 class="text-[#5865F2] uppercase text-2xl w-32">Imagine a place</h4>

                <button class="flex items-center py-3 px-2  text-white text-sm w-48"
                    @click="handleClickOpenedOptionsLang" id="country">
                    <img v-bind:src="lang.url" alt="us" class="h-4 mr-3" />
                    {{ lang.text }}
                </button>


                <ul v-if="openedOptionsLang" class="bg-slate-500 h-[70px] w-48 rounded absolute z-10">
                    <li class="flex  space-x-3 px-2 py-2 cursor-pointer hover:bg-slate-400"
                        @click="() => handleClickSelectedLang('English, USA', '../src/assets/imgs/us.svg')" id="country">
                        <img src="../../../src/assets/imgs/us.svg" alt="us" class="h-4" />
                        <p class="text-white text-sm">English, USA</p>
                    </li>
                    <li class="flex  space-x-3 px-2 py-2 cursor-pointer  hover:bg-slate-400"
                        @click="() => handleClickSelectedLang('Brazil, BRA', '../src/assets/imgs/brazil.svg')"
                        id="country">
                        <img src="../../../src/assets/imgs/brazil.svg" alt="us" class="h-4" />
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
            <img src="../../../src/assets/imgs/logo.svg" alt="logo" />
            <button class="bg-[#5865F2] cursor-pointer text-white text-sm w-28 rounded-full">Open Discord</button>
        </div>
    </footer>
</template> 


<script lang="ts" setup> 
import {FooterProps} from '../../types/footer.ts'

 defineProps<FooterProps>() 
</script>