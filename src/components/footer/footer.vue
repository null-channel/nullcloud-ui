<script setup lang="ts">
import { Icon } from '@iconify/vue'
// import golangMaskot from "@assets/svg/go.svg"
import SocialLinks from "@/components/footer/socialLinks.vue"
import SiteMap from "@/components/footer/siteMap.vue"
import NewsLetterForm from "@/components/footer/newsLetterForm.vue"
</script>

<template>
    <div class="absolute  bottom-0  mt-4 w-full p-2 h-72">
        <div class="container h-full flex flex-col-reverse">

            <div class="flex flex-row w-ful py-4">
                <SocialLinks />
                <p class="flex w-full items-center justify-center text-background gap-2 text-xs md:text-base">
                    Made by the Developer for developer. Powered by <span>

                        <Icon icon="heroicons:heart-solid" class="text-rose-600 w-8 h-8">
                        </Icon>
                    </span>
                </p>

            </div>
            <div class="grid grid-rows-2 md:grid-cols-2 h-full pt-24 border-b border-border">
                <div class="flex md:flex-col items-start">
                    <SiteMap />
                </div>

                <div class="flex flex-col translate-y-24  ">
                    <NewsLetterForm/>
                </div>
            </div>
        </div>
    </div>
    <!-- <div class="absolute right-60 bottom-44 -z-20">
        <golangMaskot class="w-36" v-motion :initial="{
                        x: 0,
                        y: 90,
                        rotate: 0
                    }" :enter="{
                        x: 0,
                        y: 0,
                        rotate: -5,
                        transition: {
                            duration: 2500,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            repeatType: 'mirror'
                        }
                    }" />
    </div> -->
    <div class="absolute  left-0 bottom-0 w-full h-fitx bg-foreground h-72 md:h-auto md:bg-transparent -z-10">

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="dark:text-white text-black">
            <path fill-opacity="1" class="fill-current dark:fill-current"
                d="M0,32L120,64C240,96,480,160,720,176C960,192,1200,160,1320,144L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z">
            </path>
        </svg>
    </div>
</template>

<style scoped></style>