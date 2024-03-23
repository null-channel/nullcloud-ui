<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { FormItem, FormControl, FormField, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
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
    <form class=" flex w-full gap-2" @submit="onSubmit">
        <FormField v-slot="{ componentField }" name="email">
            <FormItem class="w-2/3 md:w-2/4">
                <FormControl>
                    <Input type="text" placeholder="example@null-cloud.com" v-bind="componentField" />
                </FormControl>
                <FormMessage />
            </FormItem>
        </FormField>
        <Button variant="secondary" class="w-1/3 !bg-background md:w-1/4 gap-2 font-bold" type="submit">
            Hope in
            <Icon icon="heroicons:paper-airplane-20-solid" class="h-5 w-5" />
        </Button>
    </form>

</template>