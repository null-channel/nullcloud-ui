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
const props = defineProps({
    isLoaded: Boolean
})

const signUp = defineModel<any>('signUp')
const verifying = defineModel<Boolean>('verifying')

const signInFormSchema = toTypedSchema(z.object({
    email: z.string().min(1, { message: "This field has to be filled." }).email("This is not a valid email."),
    password: z.string().min(1, { message: "This field has to be filled." })
}))

const { handleSubmit: handelSignInSubmit } = useForm({
    validationSchema: signInFormSchema,
})
const onSignInSubmit = handelSignInSubmit(async (values) => {
    console.log(values)
    if (!props.isLoaded) return;
    try {
        if (signUp?.value) {
            await signUp?.value.create({ emailAddress: values.email, password: values.password })
            await signUp?.value.prepareEmailAddressVerification({
                strategy: 'email_code'
            });
            verifying.value = true
            toast({
                title: 'Success:',
                description: h('p', { class: 'text-foreground font-black' }, "Please check email for code"),
            })
        } else {
            throw new Error("Something wrong with clerk")
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
    <form class=" flex flex-col w-full gap-2" @submit="onSignInSubmit">
        <Card>
            <CardHeader>
                <CardTitle>Sign up</CardTitle>
                <CardDescription>
                </CardDescription>
            </CardHeader>
            <CardContent v-if="!isLoaded" class="flex items-center justify-center">
                <div
                    class="inline-block items-center h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] text-foreground">
                </div>
            </CardContent>
            <CardContent v-if="isLoaded">
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
            </CardContent>
            <CardFooter>
                <Button class="font-bold w-full mt-6" type="submit">
                    Sign up
                </Button>
            </CardFooter>
        </Card>
    </form>
</template>