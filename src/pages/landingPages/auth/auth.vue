<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import loginForm from '@/components/loginForm/loginForm.vue';
import signupForm from '@/components/signUpForm/signupForm.vue';

</script>
<template>
    <section class="grid grid-rows-none md:grid-cols-2 gap-2 pt-7 md:pt-14">
        <div class="flex flex-col m-0 md:m-auto gap-2">
            <Tabs default-value="Login" class="w-64 gap-2 md:w-[400px]">
                <TabsList class="flex w-full  gap-3">
                    <TabsTrigger value="Login" class="w-full">
                        Login
                    </TabsTrigger>
                    <TabsTrigger value="Sign-up" class="w-full">
                        Sign-up
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="Login">
                    <loginForm />
                </TabsContent>
                <TabsContent value="Sign-up">
                    <signupForm />
                </TabsContent>
            </Tabs>
        </div>
        <div class="relative hidden md:flex items-center">
            <h1
                class="hidden md:block absolute bottom-44 -left-80 text-foreground  text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] rotate-90">
                Take the ride with us
            </h1>
            <div class="inline-flex min-h-full min-w-full gap-2 ">
                <div class="mx-auto rounded-full dark:bg-foreground">
                    <img v-motion :initial="{ x: 400, y: -400, opacity: 0, scale: 0.4 }" :enter="{
                        x: 0, y: 0, opacity: 1, scale: 1, transition: {
                            delay: 10, duration: 1000, type: 'spring',
                            stiffness: 2500,
                            damping: 250,
                            mass: 0.5,
                        }
                    }" src="@/assets/img/white-login-bg.png" class="inline-block">
                </div>
            </div>
        </div>
    </section>

</template>