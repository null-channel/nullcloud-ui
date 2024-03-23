<script setup lang="ts">
import ContactForm from "@/components/contactForm/contactForm.vue"
import { Icon } from '@iconify/vue'

</script>
<template>
    <section class="grid grid-rows-none my-auto h-full md:grid-cols-2 gap-44 pt-7 md:pt-14 ">
        <div class="flex flex-col my-auto">
            <h1 class="text-foreground text-3xl font-black">
                Contact us
            </h1>
            <p class="text-muted-foreground">
                Help us build a better cloud for developper
            </p>
            <div class="flex flex-row text-foreground space-x-8">
                <ContactForm />
                <div class="flex flex-col mr-28 gap-2 items-center justify-center">
                    <div class="flex border-l md:flex-col h-fit justify-center items-center space-x-2 space-y-4">
                        <a href="https://github.com/null-channel">
                            <Icon icon="bxl:github" class="ml-3 w-8 h-8"></Icon>
                        </a>
                        <a href="https://discord.gg/qRfJJbDq">
                            <Icon icon="bxl:discord-alt" class=" w-8 h-8"></Icon>
                        </a> <a href="https://www.youtube.com/@NullLabs">
                            <Icon icon="bxl:youtube" class="w-8 h-8"></Icon>
                        </a>
                        <a href="https://www.twitch.tv/marekcounts">
                            <Icon icon="bxl:twitch" class="w-8 h-8"></Icon>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="relative hidden md:flex flex-col items-center">
            <div class="inline-flex gap-2 ">
                <div class="mx-auto ">
                    <img src="@/assets/img/contact-mecha.png" class="inline-block border rounded-full">
                </div>
            </div>
        </div>

    </section>

</template>