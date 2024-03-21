<script setup lang="ts">
import { h, ref } from 'vue'
import { Button } from '@/components/ui/button';
import { FormControl, FormField, FormLabel, FormMessage } from '@/components/ui/form';
import FormItem from '@/components/ui/form/FormItem.vue';
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { toast } from '@/components/ui/toast'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useSignUp } from 'vue-clerk'
import { useRouter } from 'vue-router';
import { PinInput, PinInputGroup, PinInputInput } from '../ui/pin-input';
import InitSignUpForm from "@/components/signUpForm/intSignupForm.vue"
const route = useRouter();
const verifying = ref(false)
const { isLoaded, signUp, setActive } = useSignUp()

const pinSchema = toTypedSchema(z.object({
    pin: z.array(z.coerce.string()).length(6, { message: 'Invalid input' }),
}))
const { handleSubmit: handelPinSubmit, setValues: setPin } = useForm({
    validationSchema: pinSchema,
    initialValues: {
        pin: [],
    },
})
const onPinSubmit = handelPinSubmit(async ({ pin }) => {
    if (!isLoaded) return;
    try {
        if (signUp?.value) {
            // Submit the code that the user provides to attempt verification
            console.log(pin.join(''))
            const completeSignUp = await signUp.value.attemptEmailAddressVerification({
                code: pin.join('')
            });

            if (completeSignUp.status !== "complete") {
                // The status can also be `abandoned` or `missing_requirements`
                // Please see https://clerk.com/docs/references/react/use-sign-up#result-status for  more information
                console.log(JSON.stringify(completeSignUp, null, 2));
            }
            // Check the status to see if it is complete
            // If complete, the user has been created -- set the session active
            if (completeSignUp.status === "complete") {
                if (!setActive.value) return
                await setActive.value({ session: completeSignUp.createdSessionId });
                toast({
                    title: 'Success:',
                    description: h('p', { class: 'text-foreground font-black' }, "Welcome to the Null cloud"),
                })
                // Redirect the user to a post sign-up route
                route.push({ name: 'complete-registration' });
            }
        }
    }
    catch (err: any) {
        // This can return an array of errors.
        // See https://clerk.com/docs/custom-flows/error-handling to learn about error handling
        console.error('Error:', JSON.stringify(err, null, 2));
        toast({
            title: 'Error:',
            description: h('p', { class: 'text-destructive font-black' }, err.errors[0].longMessage + pin.join('')),
        })
    }

})

const handleComplete = (e: string[]) => console.log(e.join(''))
</script>
<template>
    <form v-if="verifying" class=" flex flex-col w-full gap-2" @submit="onPinSubmit">
        <Card>
            <CardHeader>
                <CardTitle>Sign up</CardTitle>
                <CardDescription>


                </CardDescription>
            </CardHeader>
            <CardContent>
                <FormField v-slot="{ componentField }" name="pin">
                    <FormItem>
                        <FormLabel>OTP</FormLabel>
                        <FormControl>
                            <PinInput id="pin-input" class="flex gap-2 items-center mt-1" otp type="number"
                                :name="componentField.name" @complete="handleComplete"
                                @update:model-value="(arrStr: any) => { setPin({ pin: arrStr.filter(Boolean), }) }">
                                <PinInputGroup>
                                    <PinInputInput class="w-full" v-for="(id, index) in 6" :key="id" :index="index" />
                                </PinInputGroup>
                            </PinInput>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                </FormField>
            </CardContent>
            <CardFooter>
                <Button class="font-bold w-full mt-6" type="submit">
                    Submit
                </Button>
            </CardFooter>
        </Card>
    </form>
    <InitSignUpForm v-else v-model:sign-up="signUp" v-model:verifying="verifying" :isLoaded="isLoaded" />
</template>