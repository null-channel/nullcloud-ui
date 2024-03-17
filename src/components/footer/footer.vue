<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { FormItem, FormControl, FormField, FormDescription, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import golangMaskot from "@assets/svg/go.svg"
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { subscribe } from '@/shared/api/marketing';

const formSchema = toTypedSchema(z.object({
    email: z.string().min(1, { message: "This field has to be filled." }).email("This is not a valid email.")
}))


const { handleSubmit } = useForm({
    validationSchema: formSchema,
})

const onSubmit = handleSubmit(subscribe)
</script>

<template>
    <div class="absolute  bottom-0  mt-4 w-full p-2 h-72">
        <div class="container h-full flex flex-col-reverse">

            <div class="flex flex-row w-ful py-4">
                <div class="flex md:flex-row justify-center items-center space-x-2 space-y-4">
                    <a href="">
                        <Icon icon="bxl:github" class="text-background mt-4 w-8 h-8"></Icon>
                    </a>
                    <a href="">
                        <Icon icon="bxl:discord-alt" class="text-background w-8 h-8"></Icon>
                    </a> <a href="">
                        <Icon icon="bxl:youtube" class="text-background w-8 h-8"></Icon>
                    </a>
                    <a href="">
                        <Icon icon="bxl:twitch" class="text-background w-8 h-8"></Icon>
                    </a>
                </div>
                <p class="flex w-full items-center justify-center text-background gap-2 text-xs md:text-base">
                    Made by the Developer for developer. Powered by <span>

                        <Icon icon="heroicons:heart-solid" class="text-rose-600 w-8 h-8">
                        </Icon>
                    </span>
                </p>

            </div>
            <div class="grid grid-rows-2 md:grid-cols-2 h-full pt-36 border-b border-border">
                <div class="flex md:flex-col items-start">
                    <Button variant="link" class="text-background cursor-pointer hover:no-underline">
                        Home
                    </Button>
                    <Button variant="link" class="text-background cursor-pointer hover:no-underline">
                        Sign up
                    </Button>
                    <Button variant="link" class="text-background cursor-pointer hover:no-underline">
                        Contact
                    </Button>
                </div>

                <div class="my-auto">
                    <form class=" flex w-full gap-2 pb-5 md:pt-10" @submit="onSubmit">
                        <FormField v-slot="{ componentField }" name="email">
                            <FormItem class="w-2/3 md:w-2/4">
                                <FormControl>
                                    <Input type="text" placeholder="example@null-cloud.com" v-bind="componentField" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        </FormField>
                        <Button variant="secondary" class="w-1/3  md:w-1/4 gap-2 font-bold" type="submit">
                            Hope in
                            <Icon icon="heroicons:paper-airplane-20-solid" class="h-5 w-5" />
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div class="absolute right-60 bottom-44 -z-20">
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
    </div>
    <div class="absolute  left-0 bottom-0 w-full h-fitx bg-foreground h-72 md:h-auto md:bg-transparent -z-10">

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="dark:text-white text-black">
            <path fill-opacity="1" class="fill-current dark:fill-current"
                d="M0,32L120,64C240,96,480,160,720,176C960,192,1200,160,1320,144L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z">
            </path>
        </svg>
    </div>
</template>

<style scoped></style>