<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button';
import { Icon } from '@iconify/vue'
import { FormControl, FormDescription, FormField, FormMessage } from '@/components/ui/form';
import FormItem from '@/components/ui/form/FormItem.vue';
import { Input } from '@/components/ui/input';
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import Autoplay from 'embla-carousel-autoplay'
import { subscribe } from '@/shared/api/marketing';

const formSchema = toTypedSchema(z.object({
    email: z.string().min(1, { message: "This field has to be filled." }).email("This is not a valid email.")
}))


const { handleSubmit } = useForm({
    validationSchema: formSchema,
})
const logoIcons = ref([
    'bxl:react',
    'bxl:vuejs',
    'bxl:flask',
    'bxl:django',
    'bxl:spring-boot',
    'bxl:vuejs',
    'bxl:go-lang',
    'bxl:angular',
    // it's a hack 
    'bxl:react',
    'bxl:vuejs',
    'bxl:flask',
    'bxl:django',
    'bxl:spring-boot',
    'bxl:vuejs',
    'bxl:go-lang',
    'bxl:angular',
    // it's a hack 

]);
const onSubmit = handleSubmit(subscribe)

</script>
<template>
    <section class="grid  grid-rows-2 md:grid-rows-none md:grid-cols-2 gap-2 pt-7 md:pt-14">
        <div class="flex flex-col my-auto gap-8">
            <h1
                class="text-foreground text-center md:text-left text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] origin-center relative">
                Having a hard time
                <span class="relative inline-block">
                    <span class="text-background relative z-10">
                        deploying
                    </span>
                    <span class=" -z-10 absolute h-20 inset-0 bg-foreground transform skew-y-3"></span>
                </span>
                your project ?
            </h1>

            <span class="max-w-[750px] text-center md:text-left text-lg text-muted-foreground sm:text-xl">
                Use the <span class="font-bold">Null-Cloud</span> to ship faster.
            </span>
            <form class=" flex w-full gap-2" @submit="onSubmit">
                <FormField v-slot="{ componentField }" name="email">
                    <FormItem class="w-3/4">
                        <FormControl>
                            <Input class="" type="text" placeholder="example@null-cloud.com" v-bind="componentField" />
                        </FormControl>
                        <FormDescription>
                            We will not share your email.
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                </FormField>
                <Button class="w-1/4 gap-2 font-bold" type="submit">
                    Hope in
                    <Icon icon="heroicons:paper-airplane-20-solid" class="h-5 w-5" />
                </Button>
            </form>
        </div>
        <div class="m-auto rounded-full dark:bg-foreground" v-motion :initial="{
                scale: 0
            }" :enter="{
                scale: 1,
                transition: {
                    delay: 5, duration: 1000, type: 'spring',
                    stiffness: 2500,
                    damping: 250,
                    mass: 0.5,
                }
            }">
            <img v-motion :initial="{
                x: -400,
                y: -400,
                opacity: 0,
                scale: 0.4
            }" :enter="{
                x: 10,
                y: 10,
                opacity: 1,
                scale: 1,
                transition: {
                    delay: 10, duration: 1000, type: 'spring',
                    stiffness: 2500,
                    damping: 250,
                    mass: 0.5,
                }
            }" src="@/assets/img/white-bg.png" class=" inline-block" alt="Light Mode Image">

        </div>
    </section>

    <section class="grid md:grid-cols-2 gap-9 pt-14 md:pt-24">
        <div class="relative m-auto w-full">
            <img v-motion :initial="{
                x: 0,
                y: 0,
                rotate: 0
            }" :enter="{
                x: 50,
                y: 20,
                rotate: -5,
                transition: {
                    duration: 2500,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    repeatType: 'mirror'
                }
            }" src="@assets/img/astro.png" class="rounded-full" />

        </div>
        <div class="flex flex-col space-y-9 m-auto">
            <h2 class="uppercase gap-2 text-foreground text-5xl font-sans font-black">
                You are only one link a way from deploying your app 📎
            </h2>

            <p class="text-foreground text-base font-sans  font-semibold">We offer a way to deploy your app in a
                matter of second using only your github repo</p>

        </div>


    </section>
    <section class="flex flex-col justify-center items-center pt-14 md:pt-24 space-y-10">

        <h2 class=" flex justify-center items-center gap-2 text-foreground text-2xl font-sans font-black">
            We support <Icon icon="heroicons:heart-solid" class="text-rose-600"></Icon>
        </h2>
        <div>
            <Carousel class="relative w-full max-w-2xl justify-center items-center" :plugins="[Autoplay({
                delay: 500, stopOnFocusIn: false,
                stopOnInteraction: false,
                stopOnMouseEnter: false,
                stopOnLastSnap: false,
            })]" :opts="{
                align: 'start',
                loop: true,
                watchDrag: false,
                dragFree: false
            }">
                <CarouselContent class="-ml-2">
                    <CarouselItem v-for="(imag, index) in logoIcons" :key="index" class="pl-2 basis-1/7 md:basis-16">
                        <div class="p-1">
                            <Card>
                                <CardContent class="flex aspect-square items-center justify-center p-2">
                                    <Icon :icon="imag" class="w-4 h-4 md:w-8 md:h-8 text-foreground"></Icon>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                </CarouselContent>
            </Carousel>
        </div>
    </section>

</template>