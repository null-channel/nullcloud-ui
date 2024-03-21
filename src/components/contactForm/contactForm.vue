<script setup lang="ts">
import { h } from 'vue'
import { Button } from '@/components/ui/button';
import { FormControl, FormField, FormLabel, FormMessage } from '@/components/ui/form';
import FormItem from '@/components/ui/form/FormItem.vue';
import { Input } from '@/components/ui/input';
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { toast } from '@/components/ui/toast'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useSignIn } from 'vue-clerk'
import { useRouter } from 'vue-router';

const route = useRouter();
const { isLoaded, signIn, setActive } = useSignIn()
const formSchema = toTypedSchema(z.object({
    email: z.string().min(1, { message: "This field has to be filled." }).email("This is not a valid email."),
    fullName: z.string().min(3),
    subject: z.string().min(3),
    message: z.string().min(300)
}))

const { handleSubmit } = useForm({
    validationSchema: formSchema,
})

const onSubmit = handleSubmit(async (values) => {
    if (!isLoaded.value) return;
    try {
        const completeSignIn = await signIn.value?.create({ identifier: values.email, password: values.password })
        if (completeSignIn?.status == "complete") {
            if (setActive.value != undefined) {
                await setActive.value({ session: completeSignIn.createdSessionId });
                toast({
                    title: 'Success:',
                    description: h('p', { class: 'text-foreground font-black' }, "Successfully logged in"),
                })

                route.push({ name: 'home' });
                return
            }
        }
    } catch (err: any) {
        // This can return an array of errors.
        // See https://clerk.com/docs/custom-flows/error-handling to learn about error handling
        console.error(JSON.stringify(err, null, 2));
        toast({
            title: 'Error:',
            description: h('p', { class: 'text-destructive font-black' }, err.errors[0].longMessage),
        })
    }

})

</script>
<template>
    <form class=" flex flex-col w-full gap-2" @submit="onSubmit">

        <FormField v-slot="{ componentField }" name="email">
            <FormItem>
                <FormLabel>
                    Email <span class="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                    <Input type="text" placeholder="example@null-cloud.com" v-bind="componentField" />
                </FormControl>
                <FormMessage />
            </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="password">
            <FormItem>
                <FormLabel>
                    Password <span class="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                    <Input type="password" placeholder="*******" v-bind="componentField" />
                </FormControl>
                <FormMessage />
            </FormItem>
        </FormField>
        <Button class="font-bold w-full mt-6" type="submit">
            Continue
        </Button>
    </form>
</template>