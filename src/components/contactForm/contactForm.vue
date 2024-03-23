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
import { Textarea } from '@/components/ui/textarea'

const formSchema = toTypedSchema(z.object({
    email: z.string().min(1, { message: "This field has to be filled." }).email("This is not a valid email."),
    fullName: z.string().min(3),
    subject: z.string().min(3),
    message: z.string().min(300)
}))

const { handleSubmit } = useForm({
    validationSchema: formSchema,
})

const onSubmit = handleSubmit(async (_) => {
    try {
        console.log("Not implemented")
        toast({
            title: 'Success:',
            description: h('p', { class: 'text-foreground font-black' }, "Hold on tightly. Our team will contact you ass soon as possible."),
        })

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
        <FormField v-slot="{ componentField }" name="fullName">
            <FormItem>
                <FormLabel>
                    Full name <span class="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                    <Input type="text" fullName v-bind="componentField" />
                </FormControl>
                <FormMessage />
            </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="message">
            <FormItem>
                <FormLabel>
                    Your message <span class="text-destructive">*</span>
                </FormLabel>
                <FormControl class="grid w-full gap-1.5">
                    <Textarea v-bind="componentField" id="message-2" placeholder="Type your message here." />
                    <p class="text-sm text-muted-foreground">
                        Your message will be copied to the support team.
                    </p>
                </FormControl>
                <FormMessage />
            </FormItem>
        </FormField>
        <Button class="font-bold w-full mt-6" type="submit">
            Continue
        </Button>
    </form>
</template>