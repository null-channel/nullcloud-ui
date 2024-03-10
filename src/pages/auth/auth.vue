<script setup lang="ts">
import { h, ref } from 'vue'
import { Button } from '@/components/ui/button';
import { Icon } from '@iconify/vue'
import { FormControl, FormDescription, FormField, FormLabel, FormMessage } from '@/components/ui/form';
import FormItem from '@/components/ui/form/FormItem.vue';
import { Input } from '@/components/ui/input';
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { toast } from '@/components/ui/toast'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import loginForm from '@/components/loginForm/loginForm.vue';
import signupForm from '@/components/signupForm/signupForm.vue';

const formSchema = toTypedSchema(z.object({
    email: z.string().min(1, { message: "This field has to be filled." }).email("This is not a valid email.")
}))

const { handleSubmit } = useForm({
    validationSchema: formSchema,
})

const onSubmit = handleSubmit((values) => {
    toast({
        title: 'You submitted the following values:',
        description: h('pre', { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' }, h('code', { class: 'text-white' }, JSON.stringify(values, null, 2))),
    })
})
</script>
<template>
    <div class="container">
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
                        <signupForm/>
                    </TabsContent>
                </Tabs>
            </div>
            <div class="relative hidden md:flex items-center">
                <h1
                    class="hidden md:block absolute bottom-44 -left-80 text-foreground  text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] rotate-90">
                    Take the ride with us
                </h1>
                <div class="m-auto inline-flex min-h-full min-w-full gap-2">
                    <div class="flex-grow">
                        <img v-motion :initial="{ x: 400, y: -400, opacity: 0, scale: 0.4 }" :enter="{
                            x: 0, y: 0, opacity: 1, scale: 1, transition: {
                                delay: 10, duration: 1000, type: 'spring',
                                stiffness: 2500,
                                damping: 250,
                                mass: 0.5,
                            }
                        }" src="@/assets/img/white-login-bg.png" class="dark:hidden inline-block"
                            alt="Light Mode Image">
                        <img v-motion :initial="{
                            x: 400, y: -400, opacity: 0, scale: 0.4
                        }" :enter="{
                            x: 0, y: 0, opacity: 1, scale: 1, transition: {
                                delay: 10, duration: 1000, type: 'spring',
                                stiffness: 2500,
                                damping: 250,
                                mass: 0.5,
                            }
                        }" src="@/assets/img/dark-login-bg.png" class="hidden dark:inline-block"
                            alt="Dark Mode Image">
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>